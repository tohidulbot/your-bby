const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");
module.exports.config = {
  'name': "admin",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "ullash",
  'description': "Show Owner Info",
  'commandCategory': "info",
  'usages': '',
  'cooldowns': 0x5
};
module.exports.run = async function ({
  api: _0x5c8a88,
  event: _0x14bf26
}) {
  var _0x2d0158 = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
  var _0x5878fc = () => _0x5c8a88.sendMessage({
    'body': "\n┏━━━━━━━━━━━━━━━━━━━━━┓\n┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      \n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 👤 𝐍𝐚𝐦𝐞      : T O H I D U Lッ\n┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞\n┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : S I N G L E\n┃ 🎂 𝐀𝐠𝐞       : 18+\n┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦\n┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : INTER 1ST YEAR \n┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : THAKURGAON,BANGLADESH \n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  :----------\n┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : https://t.me/NFTTOHIDUL19\n┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/profile.php?id=100092006324917\n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  " + _0x2d0158 + "\n┗━━━━━━━━━━━━━━━━━━━━━┛\n        ",
    'attachment': fs.createReadStream(__dirname + "/cache/1.png")
  }, _0x14bf26.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  return request(encodeURI("https://graph.facebook.com/100086680386976/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662")).pipe(fs.createWriteStream(__dirname + "/cache/1.png")).on("close", () => _0x5878fc());
};
