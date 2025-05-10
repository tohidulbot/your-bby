module.exports.config = {
  'name': "crush",
  'version': "7.3.1",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "Get Pair From Mention",
  'commandCategory': "png",
  'usages': "[@mention]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'jimp': ''
  }
};
module.exports.onLoad = async () => {
  const {
    resolve: _0x356b86
  } = global.nodemodule.path;
  const {
    existsSync: _0x75aaf5,
    mkdirSync: _0x212893
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x30aa3c
  } = global.utils;
  const _0x231bec = __dirname + "/cache/canvas/";
  const _0x1d4cf6 = _0x356b86(__dirname, "cache/canvas", "crush.png");
  if (!_0x75aaf5(_0x231bec + "canvas")) {
    _0x212893(_0x231bec, {
      'recursive': true
    });
  }
  if (!_0x75aaf5(_0x1d4cf6)) {
    await _0x30aa3c("https://i.imgur.com/PlVBaM1.jpg", _0x1d4cf6);
  }
};
async function makeImage({
  one: _0x121510,
  two: _0x518851
}) {
  const _0x12a161 = global.nodemodule["fs-extra"];
  const _0x5736fb = global.nodemodule.path;
  const _0x351f78 = global.nodemodule.axios;
  const _0x2092ce = global.nodemodule.jimp;
  const _0x187234 = _0x5736fb.resolve(__dirname, "cache", "canvas");
  let _0x4be0d2 = await _0x2092ce.read(_0x187234 + "/crush.png");
  let _0x30d12c = _0x187234 + ("/batman" + _0x121510 + '_' + _0x518851 + ".png");
  let _0x1eb3e4 = _0x187234 + ("/avt_" + _0x121510 + ".png");
  let _0x38c496 = _0x187234 + ("/avt_" + _0x518851 + ".png");
  let _0x11922f = (await _0x351f78.get("https://graph.facebook.com/" + _0x121510 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x12a161.writeFileSync(_0x1eb3e4, Buffer.from(_0x11922f, "utf-8"));
  let _0x58527c = (await _0x351f78.get("https://graph.facebook.com/" + _0x518851 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x12a161.writeFileSync(_0x38c496, Buffer.from(_0x58527c, "utf-8"));
  let _0x4f340a = await _0x2092ce.read(await circle(_0x1eb3e4));
  let _0x1b6c51 = await _0x2092ce.read(await circle(_0x38c496));
  _0x4be0d2.composite(_0x4f340a.resize(191, 191), 93, 111).composite(_0x1b6c51.resize(190, 190), 434, 107);
  let _0xc764cf = await _0x4be0d2.getBufferAsync("image/png");
  _0x12a161.writeFileSync(_0x30d12c, _0xc764cf);
  _0x12a161.unlinkSync(_0x1eb3e4);
  _0x12a161.unlinkSync(_0x38c496);
  return _0x30d12c;
}
async function circle(_0x4e4302) {
  const _0x422390 = require("jimp");
  _0x4e4302 = await _0x422390.read(_0x4e4302);
  _0x4e4302.circle();
  return await _0x4e4302.getBufferAsync("image/png");
}
module.exports.run = async function ({
  event: _0x4fdf85,
  api: _0x2c2d74,
  args: _0x1116f7
}) {
  const _0x2e84ae = global.nodemodule["fs-extra"];
  const {
    threadID: _0x48e858,
    messageID: _0x25e282,
    senderID: _0x3e9085
  } = _0x4fdf85;
  const _0x3a5311 = Object.keys(_0x4fdf85.mentions);
  if (!_0x3a5311[0]) {
    return _0x2c2d74.sendMessage("Mention someone you like.", _0x48e858, _0x25e282);
  } else {
    const _0x456ba6 = _0x3a5311[0];
    return makeImage({
      'one': _0x3e9085,
      'two': _0x456ba6
    }).then(_0x442538 => _0x2c2d74.sendMessage({
      'body': "✧•❁𝐂𝐫𝐮𝐬𝐡❁•✧\n\n╔═══❖••° °••❖═══╗\n\n   𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐏𝐚𝐢𝐫𝐢𝐧𝐠\n\n ꧁✨❤️❝ ℽ𝒐ϋ𝖗๒𝑏ℽ_! ❞❤️✨꧂ /n/n╚═══❖••° °••❖═══╝\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶\n\n       মিলাইয়া দিলাম 🫥 \n  যন্ত করে রাখিস,যাতে হারিয়ে নাই 🌚 🩷\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶",
      'attachment': _0x2e84ae.createReadStream(_0x442538)
    }, _0x48e858, () => _0x2e84ae.unlinkSync(_0x442538), _0x25e282));
  }
};
