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
  api: _0x5b60f5,
  event: _0x1c0a73
}) {
  var _0x30be8f = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
  var _0xe7511e = () => _0x5b60f5.sendMessage({
    'body': "\n┏━━━━━━━━━━━━━━━━━━━━━┓\n┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      \n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 👤 𝐍𝐚𝐦𝐞      : T O H I D U L ッ\n┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞\n┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : S I N G L E\n┃ 🎂 𝐀𝐠𝐞       : 18+\n┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦\n┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : I N T E R 1st Y E A R\n┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : THAKURGAON,BANGLADESH\n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : -------\n┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : [𝐉𝐨𝐢𝐧 𝐍𝐨𝐰](https://t.me/NFTTOHIDUL19)\n┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/profile.php?id=100092006324917)\n┣━━━━━━━━━━━━━━━━━━━━━┫\n┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: " + _0x30be8f + "\n┗━━━━━━━━━━━━━━━━━━━━━┛\n        ",
    'attachment': fs.createReadStream(__dirname + "/Script/commands/cache/admin.png")
  }, _0x1c0a73.threadID, () => fs.unlinkSync(__dirname + "/Script/commands/cache/admin.png"));
  return request(encodeURI("https://graph.facebook.com/100092006324917/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662")).pipe(fs.createWriteStream(__dirname + "/Script/commands/cache/admin.png")).on("close", () => _0xe7511e());
};
