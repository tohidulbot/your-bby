const dipto = require("axios");
const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");
const pathFile = __dirname + "/cache/d1pt0.txt";
if (!fs.existsSync(pathFile)) {
  fs.writeFileSync(pathFile, "true");
}
const isEnable = fs.readFileSync(pathFile, "utf-8");
module.exports.config = {
  'name': "prefix",
  'version': "1.0.0",
  'hasPermission': 0x2,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'usePrefix': true,
  'description': "when send ,prefix then response",
  'commandCategory': "bot prefix",
  'usages': "prefix",
  'cooldowns': 0x5
};
module.exports.handleEvent = async ({
  api: _0x491349,
  event: _0x366438
}) => {
  if (isEnable == "true") {
    const _0x18c329 = _0x366438.body ? _0x366438.body.toLowerCase() : '';
    let _0x376763 = await _0x491349.getThreadInfo(_0x366438.threadID);
    let _0x7538cf = _0x376763.threadName;
    var _0x48137b = moment.tz("Asia/Dhaka").format("LLLL");
    const _0xab0d4b = "╭•┄┅════❁🌺❁════┅┄•╮\n 🥸YOUR BBY ❤️‍🩹🥵 𝐏𝐑𝐄𝐅𝐈𝐗\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : " + global.config.BOTNAME + "\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ " + global.config.PREFIX + " ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ " + client.commands.size + " ｣\n𝐓𝐈𝐌𝐄 : " + _0x48137b + "\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: " + _0x7538cf + "\n\n𝐑𝐎𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑:- <T H Ï D Û L \n\n 𝐅𝐨𝐫 𝐀𝐧𝐲 𝐊𝐢𝐧d 𝐎𝐟 𝐇𝐞𝐥𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐎𝐧 𝐦𝐚𝐬𝐬𝐚𝐠 ×✓ facebook.com/100092006324917\n";
    const _0x37a2e9 = ["https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.imgur.com/XyscN1l.jpeg", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.imgur.com/bkIo0ky.mp4", "https://i.imgur.com/Bmrwbmi.jpeg", "https://i.imgur.com/fCRFKOs.jpeg", "https://i.imgur.com/fCRFKOs.jpeg", "https://i.imgur.com/wI1Qlsz.jpeg"];
    const _0x4c78e4 = _0x37a2e9[Math.floor(Math.random() * _0x37a2e9.length)];
    const _0x495a97 = await dipto.get(_0x4c78e4, {
      'responseType': "arraybuffer"
    });
    const _0x3b650c = path.extname(_0x4c78e4);
    const _0x515116 = __dirname + ("/cache/dipto3" + _0x3b650c);
    fs.writeFileSync(_0x515116, Buffer.from(_0x495a97.data, "binary"));
    if (_0x18c329.indexOf("prefix") === 0 || _0x18c329.indexOf("Prefix") === 0) {
      _0x491349.sendMessage({
        'body': '' + _0xab0d4b,
        'attachment': fs.createReadStream(_0x515116)
      }, _0x366438.threadID, () => fs.unlinkSync(_0x515116), _0x366438.messageID);
    }
  }
};
module.exports.run = async ({
  api: _0x1b0245,
  args: _0x15f556,
  event: _0x447e8a
}) => {
  try {
    if (_0x15f556[0] == 'on') {
      fs.writeFileSync(pathFile, "true");
      _0x1b0245.sendMessage("no prefix on successfully", _0x447e8a.threadID, _0x447e8a.messageID);
    } else {
      if (_0x15f556[0] == "off") {
        fs.writeFileSync(pathFile, "false");
        _0x1b0245.sendMessage("no prefix off successfully", _0x447e8a.threadID, _0x447e8a.messageID);
      } else if (!_0x15f556[0]) {
        _0x1b0245.sendMessage("Wrong format " + this.config.name + "use off/on", _0x447e8a.threadID, _0x447e8a.messageID);
      }
    }
  } catch (_0x10ab3c) {
    console.log(_0x10ab3c);
  }
};
