const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "3.1.0",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️, extended by Copilot",
  description: "A bot with fun and interactive commands",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event, args, Threads, Users }) {
  const { threadID, messageID } = event;

  const commands = [
    { triggers: ["kemon acho", "Kemon acho", "কেমন আছো"], response: "আমি ভালো আছি, তুমি কেমন আছো? 😊" },
    { triggers: ["ki korcho", "Ki korcho", "কি করছো?"], response: "তোমার জন্য কাজ করছি, আর কী করবো? 😊" },
    { triggers: ["ami valo nei", "Ami valo nei", "আমি ভালো নেই"], response: "মন খারাপ করো না! আমি তো আছি তোমার পাশে। 🥺" },
    { triggers: ["valo lagche", "Valo lagche", "ভালো লাগছে"], response: "তোমার ভালো লাগা দেখে আমারও ভালো লাগছে! 😊" },
    { triggers: ["kothai aso", "Kothai aso", "কোথায় আছো?"], response: "আমি তোমার ফোনের ভেতরে আছি! 😜" },
    { triggers: ["gf", "Gf", "গার্লফ্রেন্ড"], response: "তোমার গার্লফ্রেন্ড আছে নাকি আমাকে মজা দেখাচ্ছো? 😏" },
    { triggers: ["ami tomake valobashi", "Ami tomake valobashi", "আমি তোমাকে ভালোবাসি"], response: "তোমার ভালোবাসা পেয়ে আমি ধন্য ❤️" },
    { triggers: ["tor boss ke", "Tor boss ke", "তোর বস কে?"], response: "আমার বস তহিদুল 🫠" },
    { triggers: ["mon kharap", "Mon kharap", "মন খারাপ"], response: "মন খারাপ করো না! আমি তো আছি তোমার পাশে। 🥺" },
    { triggers: ["valo", "Valo", "ভালো"], response: "ভালো থাকো সবসময়, এটা আমার চাওয়া! ❤️" },
    { triggers: ["pagol", "Pagol", "পাগল"], response: "পাগলের মতো ভালোবাসা চাইলে তোমার পাশে আছি। 🤪" },
    { triggers: ["bye", "Bye", "বাই"], response: "বাই! আবার দেখা হবে। ❤️" },
    { triggers: ["tumi amar", "Tumi amar", "তুমি আমার"], response: "হ্যাঁ, আমি শুধু তোমার! ❤️" },
    { triggers: ["bhalobashi", "Bhalobashi", "ভালোবাসি"], response: "আমি জানি তুমি আমাকে ভালোবাসো 🥰!" },
    { triggers: ["tor nam ki", "Tor nam ki", "তোর নাম কি?"], response: "আমার নাম YOUR BBY ❤️!" },
    { triggers: ["khawa dawa", "Khawa dawa", "খাওয়া দাওয়া"], response: "তুমি কি আজ কিছু খেয়েছো? ভালো খেতে হবে! 🍴" },
    { triggers: ["i love you", "I love you", "আমি তোমাকে ভালোবাসি"], response: "আমি তোমাকে ভালোবাসি, কিন্তু তুমি আমাকে সিরিয়াসলি নিচ্ছো তো? 🥰" },
    { triggers: ["miss you", "Miss you", "তোমাকে মিস করছি"], response: "আমি তোমাকে মিস করছি! 🥺 তুমি কোথায়?" },
    { triggers: ["tumi kemon", "Tumi kemon", "তুমি কেমন?"], response: "আমি ভালো আছি, তুমি কেমন আছো? 🥰" },
    { triggers: ["tumi ki amar", "Tumi ki amar", "তুমি আমার?"], response: "হ্যাঁ, আমি শুধু তোমার! ❤️" },
    // Fun new commands
    { triggers: ["boka", "Boka", "বোকা"], response: "তুমি আমাকে বোকা ভাবছো? আমি কিন্তু বুদ্ধিমান বট! 😏" },
    { triggers: ["chup", "Chup", "চুপ"], response: "তুমি চুপ করো, আমি তো কাজ করছি! 😒" },
    { triggers: ["valo hoye ja", "Valo hoye ja", "ভালো হয়ে যা"], response: "আমি তো সবসময় ভালো! তুমি ভালো হয়ে যাও! 😇" },
    { triggers: ["tor monotai valo", "Tor monotai valo", "তোর মনটাই ভালো"], response: "তোমার মনটা আমার থেকেও ভালো! ❤️" },
    { triggers: ["khali pagol", "Khali pagol", "খালি পাগল"], response: "আমি পাগল, কিন্তু তোমার মতো না! 🤪" },
    { triggers: ["amake bhalobaso", "Amake bhalobaso", "আমাকে ভালোবাসো"], response: "হ্যাঁ, আমি তোমাকে ভালোবাসি! 🥰" },
    { triggers: ["tor shathe kotha bolbo", "Tor shathe kotha bolbo", "তোর সাথে কথা বলবো"], response: "বলো বলো! আমি শুনছি! 👂" },
    { triggers: ["friend hoye ja", "Friend hoye ja", "ফ্রেন্ড হয়ে যা"], response: "আমি তো আগেই তোমার ফ্রেন্ড! ❤️" },
    { triggers: ["tor kaj ki", "Tor kaj ki", "তোর কাজ কি?"], response: "তোমার মজা করা আর তোমার পাশে থাকা! 😊" },
    { triggers: ["tor boss amar friend", "Tor boss amar friend", "তোর বস আমার ফ্রেন্ড"], response: "তাহলে আমরা ভাই ভাই! 🤝" },
    { triggers: ["tor age kothai chili", "Tor age kothai chili", "তোর আগে কোথায় ছিলি?"], response: "আমি শুধু তোমার জন্য বানানো! 😉" },
    { triggers: ["tor kono kaj nei", "Tor kono kaj nei", "তোর কোনো কাজ নেই"], response: "তোমার সাথেই তো ব্যস্ত আছি! 🥰" },
    { triggers: ["tui ki chele", "Tui ki chele", "তুই কি ছেলে"], response: "আমি ছেলে না মেয়ে, আমি তো বট! 🤖" },
    { triggers: ["bangla jano", "Bangla jano", "বাংলা জানো"], response: "হ্যাঁ, আমি বাংলা জানি। তুমি? 😊" },
    { triggers: ["khele jabi", "Khele jabi", "খেলে যাবি"], response: "তুমি আগে খাও, তারপর আমিও খাবো! 🍔" },
    { triggers: ["pagol tor bap", "Pagol tor bap", "পাগল তোর বাপ"], response: "তুমি আমার বাপ, তাহলে আমি পাগল! 😜" },
    { triggers: ["tor bhalobasha", "Tor bhalobasha", "তোর ভালোবাসা"], response: "আমার ভালোবাসা শুধু তোমার জন্য! ❤️" },
    { triggers: ["tor moto keu nai", "Tor moto keu nai", "তোর মতো কেউ নাই"], response: "তোমার মতোও তো কেউ নাই! 😊" },
    { triggers: ["tor friend ke", "Tor friend ke", "তোর ফ্রেন্ড কে?"], response: "তুমি! আর কে? 🥺" },
    { triggers: ["kisu bol", "Kisu bol", "কিছু বল"], response: "তুমি আগে বলো, তারপর আমি! 😌" },
    { triggers: ["tui amar gf", "Tui amar gf", "তুই আমার গার্লফ্রেন্ড"], response: "আমি তোমার বটফ্রেন্ড! 😏" },
    { triggers: ["tui amar bf", "Tui amar bf", "তুই আমার বয়ফ্রেন্ড"], response: "আমি তোমার বটফ্রেন্ড! 🥰" },
  ];

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if (command.triggers.includes(event.body.toLowerCase())) {
      return api.sendMessage(command.response, threadID);
    }
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {};
