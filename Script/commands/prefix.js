module.exports.config = {
  name: "prefix",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎�{T} ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "🔥 বটের প্রিফিক্স টাইপ করলে এপিক গ্রিটিং পাও! 🚀",
  commandCategory: "system",
  usages: "",
  cooldowns: 3
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX || "/";

  if (!body || body.trim() !== prefix) return;

  const message = `🌟 **Assalamu Alaikum!** 🌟\n\n` +
                 `👋 **Kemon asen?** Hope you're vibing! 😎\n` +
                 `🔧 **Bot er Prefix**: ${prefix} (Use it to command me!)\n` +
                 `🎨 **Made by**: ✨ ŤØĤƗĐɄŁ ✨\n\n` +
                 `💥 Type ${prefix}help for more commands! 🚀`;

  return api.sendMessage(message, threadID, messageID);
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX || "/";

  const message = `🌟 **Assalamu Alaikum!** 🌟\n\n` +
                 `👋 **Kemon asen?** Hope you're vibing! 😎\n` +
                 `🔧 **Bot er Prefix**: ${prefix} (Use it to command me!)\n` +
                 `🎨 **Made by**: ✨ ŤØĤƗĐɄŁ ✨\n\n` +
                 `💥 Type ${prefix}help for more commands! 🚀`;

  return api.sendMessage(message, threadID, messageID);
};
