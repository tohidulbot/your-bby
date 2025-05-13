module.exports.config = {
  name: "approve",
  version: "1.0.3",
  hasPermssion: 2,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Approve or manage group chats using the bot!",
  commandCategory: "Admin",
  cooldowns: 5
};

const fs = require('fs');
const path = require('path');

// File paths for approved and pending threads
const dataPath = path.join(__dirname, "/ullash/approvedThreads.json");
const dataPending = path.join(__dirname, "/ullash/pendingThreads.json");

// Ensure required files exist
module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
};

// Handle replies for pending approvals
module.exports.handleReply = async function ({ event, api, handleReply }) {
  if (handleReply.author != event.senderID) return;

  const { body, threadID, messageID } = event;
  let approvedThreads = JSON.parse(fs.readFileSync(dataPath));
  let pendingThreads = JSON.parse(fs.readFileSync(dataPending));

  switch (handleReply.type) {
    case "pending":
      if (body.toUpperCase() === 'A') {
        approvedThreads.push(handleReply.threadID);
        fs.writeFileSync(dataPath, JSON.stringify(approvedThreads, null, 2));
        pendingThreads.splice(pendingThreads.indexOf(handleReply.threadID), 1);
        fs.writeFileSync(dataPending, JSON.stringify(pendingThreads, null, 2));

        api.sendMessage(`✅ Successfully approved the group:\n🔹 ${handleReply.threadID}`, threadID, messageID);
      }
      break;
  }
};

// Main function to handle commands
module.exports.run = async function ({ event, api, args, Threads, Users }) {
  const { threadID, messageID, senderID } = event;

  let approvedThreads = JSON.parse(fs.readFileSync(dataPath));
  let pendingThreads = JSON.parse(fs.readFileSync(dataPending));
  let responseMessage = "";

  switch (args[0]?.toLowerCase()) {
    case "list":
    case "l":
      responseMessage = `📜 **APPROVED GROUPS**\nTotal: ${approvedThreads.length}`;
      for (let i = 0; i < approvedThreads.length; i++) {
        let threadInfo = await api.getThreadInfo(approvedThreads[i]);
        let threadName = threadInfo.threadName || `Group ID: ${approvedThreads[i]}`;
        responseMessage += `\n${i + 1}. ${threadName} (${approvedThreads[i]})`;
      }
      api.sendMessage(responseMessage, threadID, messageID);
      break;

    case "pending":
    case "p":
      responseMessage = `⏳ **PENDING GROUPS**\nTotal: ${pendingThreads.length}`;
      for (let i = 0; i < pendingThreads.length; i++) {
        let threadInfo = await api.getThreadInfo(pendingThreads[i]);
        let threadName = threadInfo.threadName || `Group ID: ${pendingThreads[i]}`;
        responseMessage += `\n${i + 1}. ${threadName} (${pendingThreads[i]})`;
      }
      api.sendMessage(responseMessage, threadID, (err, info) => {
        if (!err) {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            type: "pending",
            threadID: threadID
          });
        }
      }, messageID);
      break;

    case "del":
    case "d":
      let groupID = args[1] || threadID;
      if (isNaN(groupID)) {
        return api.sendMessage("❌ Invalid ID. Please provide a valid group ID.", threadID, messageID);
      }
      if (!approvedThreads.includes(groupID)) {
        return api.sendMessage("❌ This group is not approved.", threadID, messageID);
      }
      approvedThreads = approvedThreads.filter(id => id !== groupID);
      fs.writeFileSync(dataPath, JSON.stringify(approvedThreads, null, 2));
      api.sendMessage(`✅ Group ${groupID} has been removed from the approved list.`, threadID, messageID);
      break;

    case "help":
    case "h":
      const prefix = global.config.PREFIX || "/";
      responseMessage = `📖 **APPROVE COMMANDS**\n\n` +
        `🔹 ${prefix}${this.config.name} l/list - View approved groups\n` +
        `🔹 ${prefix}${this.config.name} p/pending - View pending approvals\n` +
        `🔹 ${prefix}${this.config.name} d/del [ID] - Remove a group from the approved list\n` +
        `🔹 ${prefix}${this.config.name} [ID] - Approve a specific group\n\n` +
        `🔰 **Credits:** ${this.config.credits}`;
      api.sendMessage(responseMessage, threadID, messageID);
      break;

    default:
      let groupIDToApprove = args[0] || threadID;
      if (isNaN(groupIDToApprove)) {
        return api.sendMessage("❌ Invalid ID. Please provide a valid group ID.", threadID, messageID);
      }
      if (approvedThreads.includes(groupIDToApprove)) {
        return api.sendMessage("❌ This group is already approved.", threadID, messageID);
      }
      approvedThreads.push(groupIDToApprove);
      fs.writeFileSync(dataPath, JSON.stringify(approvedThreads, null, 2));
      api.sendMessage(`✅ Group ${groupIDToApprove} has been successfully approved!`, threadID, messageID);
      break;
  }
};
