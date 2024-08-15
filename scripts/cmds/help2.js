const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 🐐 | GoatBot V2 ]"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "Aesther", // original author Kshitiz 
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `》[📑𝗟𝗜𝗦𝗧 - 𝗖𝗠𝗗𝙨]\n〓〓〓〓〓〓〓〓〓〓〓\n\n`; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += ` \n✪ ━「${category.toUpperCase()}」━`;
const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => `\n⌨︎_${item}`);
            msg += ` ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += ``;
        }
      });

      const totalCommands = commands.size;
      msg += `\n\n〓〓〓〓〓〓〓〓〓〓〓\n➪[📅] 𝗧otal 𝗖𝗠𝗗s [${totalCommands}]\n➪[🛄]𝗢𝗪𝗡𝗘𝗥 : The GODDESS Aesther\n➪[🔱] 𝗡𝗕 :  use callad in any repport`;
      msg += `\n\n/// 💬 𝗔𝗘𝗦𝗧𝗛𝗘𝗥 𝗕𝗢𝗧 ////`;
      msg += ``; // its not decoy so change it if you want 

      const helpListImages = [
        'https://i.postimg.cc/3x5YpzHj/20240814-182713.jpg', 
        'https://i.postimg.cc/zDdW8hWV/Screenshot-2567-0813-211658.png', 
        'https://i.postimg.cc/DZXK8cYp/20240814-182755.jpg', 
        'https://i.postimg.cc/RhxxfnkS/20240814-182828.jpg', 
        'https://i.postimg.cc/CMbg0m8z/FB-IMG-17236497453440241.jpg', 
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `🟢𝗡𝗔𝗠𝗘⚪\n--------------------------------------\n
 〉[ ${configCommand.name}]\n
🟢𝗜𝗡𝗙𝗢⚪\n--------------------------------------\n
   〉[𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯]:\n▶︎${longDescription}\n
   〉🔵[𝘖𝘵𝘩𝘦𝘳-𝘯𝘢𝘮𝘦𝘴]:\n▶︎${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} Other names in your group: Do not have\n
   〉🔵[𝘝𝘦𝘳𝘴𝘪𝘰𝘯]:\n▶︎${configCommand.version || "1.0"}\n
   〉🔵[𝘙𝘰𝘭𝘦]:\n▶︎${roleText}\n
   〉🔵𝘛𝘪𝘮𝘦 𝘱𝘦𝘳 𝘤𝘰𝘮𝘮𝘢𝘯𝘥:\n ▶︎${configCommand.countDown || 1}s
   〉🔵[𝘈𝘶𝘵𝘩𝘰𝘳]:\n▶︎${author}\n
🟢𝗨𝗦𝗔𝗚𝗘⚪\n--------------------------------------\n
▶︎ ${usage}\n--------------------------------------\n🟢 by-𝘼𝙀-𝙎𝙏𝙃𝙀𝙍 ⚪`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}
