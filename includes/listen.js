module.exports = function ({
  api: _0xe7425,
  models: _0x4a8c8b
}) {
  const _0x382f07 = require("./controllers/users")({
    'models': _0x4a8c8b,
    'api': _0xe7425
  });
  const _0x1fcf7f = require("./controllers/threads")({
    'models': _0x4a8c8b,
    'api': _0xe7425
  });
  const _0x3137f4 = require("./controllers/currencies")({
    'models': _0x4a8c8b
  });
  const _0x2b1aae = require("../utils/log.js");
  const _0x177a2f = require('fs');
  const _0x3fab8b = require("moment-timezone");
  const _0xb44416 = require("axios");
  var _0x3d20f5 = _0x3fab8b.tz("Asia/Kolkata").day();
  const _0x300198 = __dirname + "/../Script/commands/checktt/";
  setInterval(async () => {
    const _0xa755d = _0x3fab8b.tz("Asia/Kolkata").day();
    if (_0x3d20f5 != _0xa755d) {
      _0x3d20f5 = _0xa755d;
      const _0x3a9de8 = _0x177a2f.readdirSync(_0x300198);
      console.log("--> CHECKTT: New Day");
      _0x3a9de8.forEach(async _0x459a57 => {
        const _0x3a2c9b = JSON.parse(_0x177a2f.readFileSync(_0x300198 + _0x459a57));
        let _0x4904dd = [];
        let _0x4a1dae = 1;
        for (const _0x5ca196 of _0x3a2c9b.day) {
          const _0xf3d1da = (await _0x382f07.getNameUser(_0x5ca196.id)) || "Facebook User";
          _0x5ca196.name = _0xf3d1da;
          _0x4904dd.push(_0x5ca196);
        }
        ;
        _0x4904dd.sort((_0x59207a, _0x2001a9) => {
          if (_0x59207a.count > _0x2001a9.count) {
            return -1;
          } else {
            return _0x59207a.count < _0x2001a9.count ? 1 : _0x59207a.name.localeCompare(_0x2001a9.name);
          }
        });
        let _0x116ea2 = "===Top 10 Interactive Days===\n";
        _0x116ea2 += _0x4904dd.slice(0, 10).map(_0x4b4a34 => {
          return _0x4a1dae++ + ". " + _0x4b4a34.name + " (" + _0x4b4a34.count + ')';
        }).join("\n");
        _0xe7425.sendMessage(_0x116ea2, _0x459a57.replace(".json", ''), _0x4936e3 => _0x4936e3 ? console.log(_0x4936e3) : '');
        _0x3a2c9b.day.forEach(_0x57e461 => {
          _0x57e461.count = 0;
        });
        _0x3a2c9b.time = _0xa755d;
        _0x177a2f.writeFileSync(_0x300198 + _0x459a57, JSON.stringify(_0x3a2c9b, null, 4));
      });
      if (_0xa755d == 1) {
        console.log("--> CHECKTT: New Week");
        _0x3a9de8.forEach(async _0x48aa6f => {
          const _0x1e431a = JSON.parse(_0x177a2f.readFileSync(_0x300198 + _0x48aa6f));
          let _0x588e64 = [];
          let _0x47ae64 = 1;
          for (const _0x2f07e7 of _0x1e431a.week) {
            const _0x26ba0a = (await _0x382f07.getNameUser(_0x2f07e7.id)) || "Facebook User";
            _0x2f07e7.name = _0x26ba0a;
            _0x588e64.push(_0x2f07e7);
          }
          ;
          _0x588e64.sort((_0x5677a2, _0x112e0e) => {
            if (_0x5677a2.count > _0x112e0e.count) {
              return -1;
            } else {
              return _0x5677a2.count < _0x112e0e.count ? 1 : _0x5677a2.name.localeCompare(_0x112e0e.name);
            }
          });
          let _0x13620c = "===Top 10 Interactive Week===\n";
          _0x13620c += _0x588e64.slice(0, 10).map(_0x98c57a => {
            return _0x47ae64++ + ". " + _0x98c57a.name + " (" + _0x98c57a.count + ')';
          }).join("\n");
          _0xe7425.sendMessage(_0x13620c, _0x48aa6f.replace(".json", ''), _0x342d48 => _0x342d48 ? console.log(_0x342d48) : '');
          _0x1e431a.week.forEach(_0x54ae48 => {
            _0x54ae48.count = 0;
          });
          _0x177a2f.writeFileSync(_0x300198 + _0x48aa6f, JSON.stringify(_0x1e431a, null, 4));
        });
      }
      global.client.sending_top = false;
    }
  }, 10000);
  (async function () {
    try {
      _0x2b1aae(global.getText("listen", "startLoadEnvironment"), "[ DATABASE ]");
      let _0x3d3656 = await _0x1fcf7f.getAll();
      let _0x1dc5a0 = await _0x382f07.getAll(["userID", "name", "data"]);
      let _0x47a99b = await _0x3137f4.getAll(["userID"]);
      for (const _0x2e389b of _0x3d3656) {
        const _0x25f0e8 = String(_0x2e389b.threadID);
        global.data.allThreadID.push(_0x25f0e8);
        global.data.threadData.set(_0x25f0e8, _0x2e389b.data || {});
        global.data.threadInfo.set(_0x25f0e8, _0x2e389b.threadInfo || {});
        if (_0x2e389b.data && _0x2e389b.data.banned == true) {
          global.data.threadBanned.set(_0x25f0e8, {
            'reason': _0x2e389b.data.reason || '',
            'dateAdded': _0x2e389b.data.dateAdded || ''
          });
        }
        if (_0x2e389b.data && _0x2e389b.data.commandBanned && _0x2e389b.data.commandBanned.length != 0) {
          global.data.commandBanned.set(_0x25f0e8, _0x2e389b.data.commandBanned);
        }
        if (_0x2e389b.data && _0x2e389b.data.NSFW) {
          global.data.threadAllowNSFW.push(_0x25f0e8);
        }
      }
      _0x2b1aae.loader(global.getText("listen", "loadedEnvironmentThread"));
      for (const _0x496c3b of _0x1dc5a0) {
        const _0x500db3 = String(_0x496c3b.userID);
        global.data.allUserID.push(_0x500db3);
        if (_0x496c3b.name && _0x496c3b.name.length != 0) {
          global.data.userName.set(_0x500db3, _0x496c3b.name);
        }
        if (_0x496c3b.data && _0x496c3b.data.banned == 1) {
          global.data.userBanned.set(_0x500db3, {
            'reason': _0x496c3b.data.reason || '',
            'dateAdded': _0x496c3b.data.dateAdded || ''
          });
        }
        if (_0x496c3b.data && _0x496c3b.data.commandBanned && _0x496c3b.data.commandBanned.length != 0) {
          global.data.commandBanned.set(_0x500db3, _0x496c3b.data.commandBanned);
        }
      }
      for (const _0x2f8219 of _0x47a99b) global.data.allCurrenciesID.push(String(_0x2f8219.userID));
      _0x2b1aae.loader(global.getText("listen", "loadedEnvironmentUser"));
      _0x2b1aae(global.getText("listen", "successLoadEnvironment"), "[ DATABASE ]");
    } catch (_0x365652) {
      return _0x2b1aae.loader(global.getText("listen", "failLoadEnvironment", _0x365652), "error");
    }
  })();
  _0x2b1aae(_0xe7425.getCurrentUserID() + " - [ " + global.config.PREFIX + " ] • " + (!global.config.BOTNAME ? "This bot was made by Islamick Chat" : global.config.BOTNAME), "[ BOT INFO ]");
  const _0xfd318 = require("./handle/handleCommand")({
    'api': _0xe7425,
    'models': _0x4a8c8b,
    'Users': _0x382f07,
    'Threads': _0x1fcf7f,
    'Currencies': _0x3137f4
  });
  const _0x453c63 = require("./handle/handleCommandEvent")({
    'api': _0xe7425,
    'models': _0x4a8c8b,
    'Users': _0x382f07,
    'Threads': _0x1fcf7f,
    'Currencies': _0x3137f4
  });
  const _0x576046 = require("./handle/handleReply")({
    'api': _0xe7425,
    'models': _0x4a8c8b,
    'Users': _0x382f07,
    'Threads': _0x1fcf7f,
    'Currencies': _0x3137f4
  });
  const _0x1b985f = require("./handle/handleReaction")({
    'api': _0xe7425,
    'models': _0x4a8c8b,
    'Users': _0x382f07,
    'Threads': _0x1fcf7f,
    'Currencies': _0x3137f4
  });
  const _0x2f97c6 = require("./handle/handleEvent")({
    'api': _0xe7425,
    'models': _0x4a8c8b,
    'Users': _0x382f07,
    'Threads': _0x1fcf7f,
    'Currencies': _0x3137f4
  });
  const _0x48fe89 = require("./handle/handleCreateDatabase")({
    'api': _0xe7425,
    'Threads': _0x1fcf7f,
    'Users': _0x382f07,
    'Currencies': _0x3137f4,
    'models': _0x4a8c8b
  });
  _0x2b1aae.loader("====== " + (Date.now() - global.client.timeStart) + "ms ======");
  const _0x1e4725 = __dirname + "/../Script/commands/ullash/datlich.json";
  const _0x3f3965 = {
    0x1: 2678400000,
    0x2: 2419200000,
    0x3: 2678400000,
    0x4: 2592000000,
    0x5: 2678400000,
    0x6: 2592000000,
    0x7: 2678400000,
    0x8: 2678400000,
    0x9: 2592000000,
    0xa: 2678400000,
    0xb: 2592000000,
    0xc: 2678400000
  };
  const _0x17b96b = _0x671c17 => new Promise(_0x14f8a4 => {
    _0x671c17.forEach((_0x583301, _0x128013) => _0x671c17[_0x128013] = parseInt(String(_0x583301).trim()));
    if (_0x671c17[1] > 12 || _0x671c17[1] < 1) {
      _0x14f8a4("Your month doesn't seem valid");
    }
    if (_0x671c17[0] > (_0x671c17[1] == 0 ? 0 : _0x671c17[1] == 2 ? _0x671c17[2] % 4 == 0 ? 29 : 28 : [1, 3, 5, 7, 8, 10, 12].includes(_0x671c17[1]) ? 31 : 30) || _0x671c17[0] < 1) {
      _0x14f8a4("Your date seems invalid");
    }
    if (_0x671c17[2] < 2022) {
      _0x14f8a4("In what era do you live in?");
    }
    if (_0x671c17[3] > 23 || _0x671c17[3] < 0) {
      _0x14f8a4("Your hours don't seem valid");
    }
    if (_0x671c17[4] > 59 || _0x671c17[3] < 0) {
      _0x14f8a4("Your minutes don't seem valid");
    }
    if (_0x671c17[5] > 59 || _0x671c17[3] < 0) {
      _0x14f8a4("Your seconds don't seem valid");
    }
    yr = _0x671c17[2] - 1970;
    yearToMS = yr * 365 * 24 * 60 * 60 * 1000;
    yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
    monthToMS = 0;
    for (let _0x324a1d = 1; _0x324a1d < _0x671c17[1]; _0x324a1d++) {
      monthToMS += _0x3f3965[_0x324a1d];
    }
    if (_0x671c17[2] % 4 == 0) {
      monthToMS += 86400000;
    }
    dayToMS = _0x671c17[0] * 24 * 60 * 60 * 1000;
    hourToMS = _0x671c17[3] * 60 * 60 * 1000;
    minuteToMS = _0x671c17[4] * 60 * 1000;
    secondToMS = _0x671c17[5] * 1000;
    oneDayToMS = 86400000;
    timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
    _0x14f8a4(timeMs);
  });
  _0x2b1aae.loader("====== " + (Date.now() - global.client.timeStart) + "ms ======");
  const _0x590538 = async () => {
    if (!_0x177a2f.existsSync(_0x1e4725)) {
      _0x177a2f.writeFileSync(_0x1e4725, JSON.stringify({}, null, 4));
    }
    var _0x59d33c = JSON.parse(_0x177a2f.readFileSync(_0x1e4725));
    var _0x5c893c = _0x3fab8b().tz("Asia/Kolkata").format("DD/MM/YYYU_HH:mm:ss");
    _0x5c893c = _0x5c893c.split('_');
    _0x5c893c = [..._0x5c893c[0].split('/'), ..._0x5c893c[1].split(':')];
    let _0x1d148b = [];
    let _0x214238 = await _0x17b96b(_0x5c893c);
    const _0x33c347 = _0x2b20ed => new Promise(async _0x45b2f6 => {
      let _0x2084f5 = await _0x17b96b(_0x2b20ed.split('_'));
      if (_0x2084f5 < _0x214238) {
        if (_0x214238 - _0x2084f5 < 600000) {
          _0x59d33c[boxID][_0x2b20ed].TID = boxID;
          _0x1d148b.push(_0x59d33c[boxID][_0x2b20ed]);
          delete _0x59d33c[boxID][_0x2b20ed];
        } else {
          delete _0x59d33c[boxID][_0x2b20ed];
        }
        _0x177a2f.writeFileSync(_0x1e4725, JSON.stringify(_0x59d33c, null, 4));
      }
      ;
      _0x45b2f6();
    });
    await new Promise(async _0x3bce37 => {
      for (boxID in _0x59d33c) {
        for (e of Object.keys(_0x59d33c[boxID])) await _0x33c347(e);
      }
      _0x3bce37();
    });
    for (el of _0x1d148b) {
      try {
        var _0x276830 = (await _0x1fcf7f.getInfo(el.TID)).participantIDs;
        _0x276830.splice(_0x276830.indexOf(_0xe7425.getCurrentUserID()), 1);
        var _0x4c3ac8 = el.REASON || "MỌI NGƯỜI ƠI";
        var _0x1c0532 = [];
        for (let _0x13a6fd = 0; _0x13a6fd < _0x276830.length; _0x13a6fd++) {
          if (_0x13a6fd == _0x4c3ac8.length) {
            _0x4c3ac8 += " ‍ ";
          }
          _0x1c0532.push({
            'tag': _0x4c3ac8[_0x13a6fd],
            'id': _0x276830[_0x13a6fd],
            'fromIndex': _0x13a6fd - 1
          });
        }
      } catch (_0x1567c7) {
        return console.log(_0x1567c7);
      }
      var _0x58093a = {
        'body': _0x4c3ac8,
        'mentions': _0x1c0532
      };
      if ("ATTACHMENT" in el) {
        _0x58093a.attachment = [];
        for (a of el.ATTACHMENT) {
          let _0x2408da = (await _0xb44416.get(encodeURI(a.url), {
            'responseType': "arraybuffer"
          })).data;
          _0x177a2f.writeFileSync(__dirname + ("/../Script/commands/ullash/" + a.fileName), Buffer.from(_0x2408da, "utf-8"));
          _0x58093a.attachment.push(_0x177a2f.createReadStream(__dirname + ("/../Script/commands/ullash/" + a.fileName)));
        }
      }
      console.log(_0x58093a);
      if ("BOX" in el) {
        await _0xe7425.setTitle(el.BOX, el.TID);
      }
      _0xe7425.sendMessage(_0x58093a, el.TID, () => "ATTACHMENT" in el ? el.ATTACHMENT.forEach(_0x5aaaf8 => _0x177a2f.unlinkSync(__dirname + ("/../Script/commands/ullash/" + _0x5aaaf8.fileName))) : '');
    }
  };
  setInterval(_0x590538, 60000);
  return _0x36497f => {
    if (_0x36497f.type == "change_thread_image") {
      _0xe7425.sendMessage("» [ GROUP UPDATES ] " + _0x36497f.snippet, _0x36497f.threadID);
    }
    let _0x453ac5 = JSON.parse(_0x177a2f.readFileSync(__dirname + "/../Script/commands/ullash/approvedThreads.json"));
    let _0x52ed9c = global.config.ADMINBOT;
    if (!_0x453ac5.includes(_0x36497f.threadID) && !_0x52ed9c.includes(_0x36497f.senderID)) {
      const _0x1e5a57 = global.data.threadData.get(parseInt(_0x36497f.threadID)) || {};
      const _0xbd7906 = _0x1e5a57.hasOwnProperty("PREFIX") ? _0x1e5a57.PREFIX : global.config.PREFIX;
      if (_0x36497f.body && _0x36497f.body == _0xbd7906 + "request") {
        _0x52ed9c.forEach(_0x27fe9c => {
          _0xe7425.sendMessage("» ID: " + _0x36497f.threadID + "\n» Requested approval! ", _0x27fe9c);
        });
        return _0xe7425.sendMessage("Sent a request to the admin bot(s) !", _0x36497f.threadID);
      }
      if (_0x36497f.body && _0x36497f.body.startsWith(_0xbd7906)) {
        return _0xe7425.sendMessage("•┄┅═══❁🌺❁═══┅┄•\n\n 𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐩𝐩𝐫𝐨𝐯𝐞d. 𝐖𝐡𝐨 𝐢𝐬 𝐦𝐲 𝐛𝐨𝐬𝐬 𝐟𝐨𝐫 𝐚𝐩𝐩𝐫𝐨𝐯𝐞d? " + _0xbd7906 + "𝐠𝐢𝐯𝐞 𝐫𝐞𝐪𝐮𝐢𝐫𝐞d\n\nYOUR-BBY\n \n𝐨𝐰𝐧𝐞𝐫 : TOHIDUL\n\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 : https://www.facebook.com/100092006324917\n\n\n𝐈𝐟 𝐧𝐨𝐭 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐭𝐡𝐞𝐧 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐚dd 𝐠𝐫𝐨𝐮𝐩 𝐚d𝐦𝐢𝐧 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩😇\n\n\n𝐓𝐚𝐥𝐤 𝐭𝐨 𝐦𝐲 𝐛𝐨𝐬𝐬 𝐟𝐨𝐫 𝐚𝐧𝐲 𝐡𝐞𝐥𝐩\n\n- 𝐖𝐡𝐚𝐭'𝐬 𝐮𝐩 : https://wa.me+8801762812062\n\n•┄┅════❁🌺❁════┅┄•", _0x36497f.threadID);
      }
    }
    ;
    switch (_0x36497f.type) {
      case "message":
      case "message_reply":
      case "message_unsend":
        _0x48fe89({
          'event': _0x36497f
        });
        _0xfd318({
          'event': _0x36497f
        });
        _0x576046({
          'event': _0x36497f
        });
        _0x453c63({
          'event': _0x36497f
        });
        break;
      case "event":
        _0x2f97c6({
          'event': _0x36497f
        });
        break;
      case "message_reaction":
        _0x1b985f({
          'event': _0x36497f
        });
        break;
      default:
        break;
    }
  };
};
