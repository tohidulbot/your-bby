module.exports.config = {
  name: "/n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Developed by your bot team",
  description: "Displays a stylish welcome message when the prefix is used",
  commandCategory: "poster",
  usages: "/",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const botName = global.config.BOTNAME || "YOUR-BOT";
  const prefix = global.config.PREFIX || "/";

  const message = `
┏━━━━━━━━━━━━━━━┓
🌟 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐀𝐥𝐚𝐢𝐤𝐮𝐦 🌟
┗━━━━━━━━━━━━━━━┛

✨ কেমন আছেন? আশা করি ভালো আছেন! 😊  
আপনার গ্রুপে *${botName}* ব্যবহারের জন্য ধন্যবাদ।  
আমাদের বট সবসময় আপনার সেবায় নিয়োজিত থাকবে ইনশাআল্লাহ। 🕋

📜 *সকল কমান্ড দেখতে টাইপ করুন:*  
👉 ${prefix}help 👈  

➤ আপনার দিনটি হোক আনন্দময় এবং বরকতময়। 🥰  
➤ কোনো সহায়তা লাগলে আমাদের কমান্ড ব্যবহার করুন।

┏━━━━━━━━━━━━━━━┓
   ❤️ ${botName} ❤️  
┗━━━━━━━━━━━━━━━┛
  `;

  return api.sendMessage(message, event.threadID);
};
