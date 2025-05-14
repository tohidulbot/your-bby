module.exports.config = {
  name: "prefix",
  version: "1.6.0",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "🔥 বটের প্রিফিক্স টাইপ করলে সুন্দর গ্রিটিং পাও! 🚀",
  commandCategory: "system",
  usages: "",
  cooldowns: 3
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX || "/";

  // Debug log to confirm trigger
  console.log("Checking prefix:", { body: body, prefix: prefix });

  // Trigger only if the message is exactly the prefix
  if (!body || body.trim() !== prefix) return;

  const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: true });
  const message = `
🌟✨══════【 𝐓𝐎𝐇𝐈-𝐁𝐎𝐓 】══════✨🌟
║
║ 🌟 **Assalamu Alaikum!** 🌟
║ 💬 **Kemon asen?** Let’s vibe! 😎🎵
║ ⏰ **Time**: ${currentTime} (Midnight vibes! 🌙✨)
║ 🔧 **Bot er Prefix**: ${prefix} (Command me now! 🚀)
║ 🎨 **Made by**: ✨ ŤØĤƗĐɄŁ ✨
║
🌟✨══════【 𝐓𝐎𝐇𝐈-𝐁𝐎𝐓 】══════✨🌟
💥 **Pro Tip**: Type ${prefix}help for more! 🔥🎉
  `;

  return api.sendMessage(message, threadID, messageID);
};

module.exports.run = async function ({ api, event }) {
  return; // Do nothing to avoid duplicate messages
};
