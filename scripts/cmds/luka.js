const axios = require('axios');

const imageUrls = ["https://i.imgur.com/R9mb2d6.jpg",
"https://i.imgur.com/HmDpGbJ.jpg",
"https://i.imgur.com/8QT9gp6.jpg",
"https://i.imgur.com/gggc27P.jpg",
"https://i.imgur.com/fEUM8lM.jpg",
"https://i.imgur.com/56Sreb3.jpg",
"https://i.imgur.com/z8UA5Um.jpg",
"https://i.imgur.com/8GVBIW6.jpg",
"https://i.imgur.com/7Htu5DT.jpg",
"https://i.imgur.com/9SLPUKV.jpg",
"https://i.imgur.com/e4U5Vn4.jpg",
"https://i.imgur.com/vPbQ2Ht.jpg",
"https://i.imgur.com/yAjSU15.jpg",
"https://i.imgur.com/YLPpZez.jpg",
"https://i.imgur.com/37oxZsG.jpg",
"https://i.imgur.com/9KEdMAS.jpg",
"https://i.imgur.com/Aa1mLCK.jpg",
"https://i.imgur.com/noUwCUD.jpg",
"https://i.imgur.com/LfLGFf9.jpg",
"https://i.imgur.com/xQUyXYV.jpg",
"https://i.imgur.com/jPnWf94.jpg",
"https://i.imgur.com/iopMHOA.jpg",
"https://i.imgur.com/z5qp5tf.jpg",
"https://i.imgur.com/SRnN7T7.jpg",
"https://i.imgur.com/ThQ03aI.jpg",
"https://i.imgur.com/BfZVzDD.jpg",
"https://i.imgur.com/iXeO5nt.jpg",
"https://i.imgur.com/91qzXZo.jpg",
"https://i.imgur.com/rTDXMzw.jpg",
"https://i.imgur.com/plgVWrd.jpg",
"https://i.imgur.com/Ujdiy4M.jpg",
"https://i.imgur.com/OGsxRQC.jpg",
"https://i.imgur.com/g0JzxG5.jpg",
"https://i.imgur.com/8a2fLTJ.jpg",
"https://i.imgur.com/LRrXmx3.jpg",
"https://i.imgur.com/W8IhD4v.jpg",
"https://i.imgur.com/XlKZtTH.jpg",
"https://i.imgur.com/cuectq9.jpg",
"https://i.imgur.com/EsyfaJp.jpg",
"https://i.imgur.com/2dAnNgt.jpg",
"https://i.imgur.com/3k2gIq2.jpg",
"https://i.imgur.com/YCEtQxA.jpg",
"https://i.imgur.com/xBLLlqJ.jpg",
"https://i.imgur.com/PqMLIma.jpg",
"https://i.imgur.com/hBF2IN5.jpg",
"https://i.imgur.com/gsqbZn9.jpg",
"https://i.imgur.com/ehsuk0m.jpg",
"https://i.imgur.com/IaTBOdr.jpg",
"https://i.imgur.com/rvClvOK.jpg",
"https://i.imgur.com/noGcAGr.jpg",
"https://i.imgur.com/J6KXb93.jpg",
"https://i.imgur.com/Ru3YTVQ.jpg",
"https://i.imgur.com/flnxBSo.jpg",
"https://i.imgur.com/fyFcuy2.jpg",
"https://i.imgur.com/0ABaNW8.jpg",
"https://i.imgur.com/tFLsUrB.jpg",
"https://i.imgur.com/DwUTmUc.jpg",
"https://i.imgur.com/jt8Sq1k.jpg",
"https://i.imgur.com/fJdrgSM.jpg",
"https://i.imgur.com/gNqCvBe.jpg",
"https://i.imgur.com/qmMqH8g.jpg",
"https://i.imgur.com/zUml2RB.jpg",
"https://i.imgur.com/RJRB3qH.jpg",
"https://i.imgur.com/HZMIvcc.jpg",
"https://i.imgur.com/9q8XZHJ.jpg",
"https://i.imgur.com/F9ElhsA.jpg",
"https://i.imgur.com/uVdX2BA.jpg",
"https://i.imgur.com/dnRTvSk.jpg",
"https://i.imgur.com/CMZ9Pfc.jpg",
"https://i.imgur.com/yy4Fs7x.jpg",
"https://i.imgur.com/yWeAWA2.jpg",
"https://i.imgur.com/dXNkZA3.jpg",
"https://i.imgur.com/E9m93sQ.jpg",
"https://i.imgur.com/kTU2KZH.jpg",
"https://i.imgur.com/dAvulPk.jpg",
"https://i.imgur.com/SCU0Nhk.jpg",
"https://i.imgur.com/4nqZymL.jpg",
"https://i.imgur.com/LUfTN1s.jpg",
"https://i.imgur.com/15LMEKv.jpg",
"https://i.imgur.com/t7urpcr.jpg",
"https://i.imgur.com/tmj9zFk.jpg",
"https://i.imgur.com/Ev46eaK.jpg",
"https://i.imgur.com/tbiCrBl.jpg",
"https://i.imgur.com/wUdMFK0.jpg",
"https://i.imgur.com/KzZDRNm.jpg",
"https://i.imgur.com/5WPneSm.jpg",
"https://i.imgur.com/rzEdDnJ.jpg",
"https://i.imgur.com/o79KFAX.jpg",
"https://i.imgur.com/Q41cf5H.jpg",
"https://i.imgur.com/fJnc4iZ.jpg",
"https://i.imgur.com/NyPaQ7t.jpg",
"https://i.imgur.com/7T2L2my.jpg",
"https://i.imgur.com/4QK9Qy2.jpg",
"https://i.imgur.com/SI8d4TU.jpg",
"https://i.imgur.com/o25oZ16.jpg",
"https://i.imgur.com/U4BrgSK.jpg",
"https://i.imgur.com/i8cMBW2.jpg",
"https://i.imgur.com/cmb6ubS.jpg",
"https://i.imgur.com/Dqpui42.jpg",
"https://i.imgur.com/Y90BLzr.jpg",
"https://i.imgur.com/VjuUbba.jpg",
"https://i.imgur.com/QT7uKiy.jpg",
"https://i.imgur.com/CVQdxAX.jpg",
"https://i.imgur.com/QKQYUsx.jpg",
"https://i.imgur.com/IB29l19.jpg",
"https://i.imgur.com/k5dNPhc.jpg",
"https://i.imgur.com/haa1XJ7.jpg",
"https://i.imgur.com/AVeISTj.jpg",
"https://i.imgur.com/KDkkxVP.jpg",
"https://i.imgur.com/hLVgS6l.jpg",
"https://i.imgur.com/hXNJatS.jpg",
"https://i.imgur.com/UzXsSSp.jpg",
"https://i.imgur.com/we2iAQ7.jpg",
"https://i.imgur.com/JuqU7AS.jpg",
"https://i.imgur.com/vn3vNsi.jpg",
"https://i.imgur.com/aV4WVsq.jpg"];

const rdmtxt = [ "💪  Ne sous-estimez jamais le pouvoir des muscles.","🏋‍♀  Le travail acharné porte ses fruits, littéralement.","💀  La douleur est temporaire, la fierté est éternelle.","🔥  Un corps fort est une forteresse impénétrable.","💯  Chaque répétition vous rapproche de votre objectif.","🏃  La course, c'est comme la vie : vous n'obtenez que ce que vous y mettez.","🥇  Être fort, c'est plus qu'un physique, c'est un état d'esprit.","🤸‍♀  La flexibilité est la clé d'une force optimale.","🧠  Le cerveau est le muscle le plus puissant que vous possédez.","💪  Soyez votre propre héros, construisez votre propre légende.","📈  Progrès constant, pas de perfection.","💯  Célébrez chaque victoire, aussi petite soit-elle.","💪  La force n'est pas une question de taille, c'est une question de volonté.","🏋‍♀  Le fitness n'est pas une destination, c'est un voyage.","🧠  Soyez patient, la transformation prend du temps.","💪  Vos limites sont uniquement celles que vous vous imposez.","💀  L'échec n'est qu'une étape sur le chemin du succès.","💪  Le corps est capable de choses incroyables.","🏋‍♀  Le fitness est un voyage, pas un sprint.","🤸‍♀  Défiez-vous constamment pour devenir plus fort.","💯  La persévérance est la clé du succès.","🔥  L'énergie est contagieuse, soyez la source."," 💪  Chaque entraînement est une opportunité de grandir."," 🏋‍♀  L'exercice est un investissement dans votre santé."," 🧠  Le corps et l'esprit sont liés, travaillez-les ensemble.","💪  Soyez fier de votre force, elle est unique."," 🤸‍♀  Le fitness est un cadeau que vous vous offrez à vous-même."," 💯  Prenez soin de votre corps, c'est votre temple."," 💪  La force n'est pas une question de genre, c'est une question de détermination."," 🏋‍♀  Chaque goutte de sueur est une victoire.","  🧠  L'apprentissage est un muscle que vous pouvez développer."," 💪  Soyez votre propre inspiration, chaque jour."," 💀  La douleur est un signal, écoutez votre corps.","  🔥  Le feu de la motivation doit toujours brûler."," 💪  Soyez patient avec votre parcours, vous êtes en construction."," 🏋‍♀  Le fitness est un mode de vie, pas une mode."," 🤸‍♀  La flexibilité vous aidera à surmonter les obstacles."," 💯  Ne jamais abandonner, même quand c'est difficile."," 💪  Votre corps est une machine, entretenez-la bien."," 🧠  L'esprit est le moteur de votre corps.","  🔥  La passion est le carburant de votre réussite."," 💪  Soyez fier de votre parcours, vous êtes en train de devenir plus fort."," 🏋‍♀  Le fitness est une aventure, profitez-en."," 🤸‍♀  Le mouvement est la vie, restez actif."," 💯  La discipline est la clé de la constance."," 💪  Vous êtes capable de plus que vous ne le pensez."," 🧠  Développez votre mental pour défier votre physique.","  🔥  L'énergie est contagieuse, partagez la votre."," 💪  La force est un voyage, pas une destination."," 🏋‍♀  Le fitness est un choix, faites-en un bon."," 🤸‍♀  Le mouvement est un langage que tout le monde comprend."," 💯  La persévérance est la clé du succès."," 💪  Soyez fier de votre force, elle est unique."," 🏋‍♀  L'exercice est un investissement dans votre santé."," 🧠  Le corps et l'esprit sont liés, travaillez-les ensemble."," 💪  Soyez votre propre inspiration, chaque jour."," 💀  La douleur est un signal, écoutez votre corps" ];

let intervalId = null;  // To keep track of the interval

module.exports = {
  config: {
    name: "luka",
    version: "1.0",
    author: "aesther",
    countDown: 5,
    role: 0,
    shortDescription: "luka groove",
    longDescription: "luka groove 👌😌",
    category: "FUN",
  },

  onStart: async function ({ api, event, args }) {
    if (args[0] === 'on') {
      if (intervalId) {
        return api.sendMessage('▪〉🤳×𝘿𝙊𝙈𝙄𝙉𝘼𝙏𝙄𝙊𝙉×𝙊𝙉.', event.threadID);
      }

      const sendAndHandleMessage = async () => {
        let sentMessage;
        try {
          sentMessage = await api.sendMessage('💯 💪', event.threadID);
          
          const randomImageIndex = Math.floor(Math.random() * imageUrls.length);
          const randomImageUrl = imageUrls[randomImageIndex];
          const randomTextIndex = Math.floor(Math.random() * rdmtxt.length);
          const randomText = rdmtxt[randomTextIndex];

          const response = await axios.get(randomImageUrl, { responseType: 'stream' });

          await api.sendMessage({
            body: `▪〉🤳×𝘿𝙊𝙈𝙄𝙉𝘼𝙏𝙄𝙊𝙉×\n────────────\n𝗧𝗛𝗘 𝗥𝗨𝗟𝗘𝗦:\n💯▪️https://www.facebook.com/Lukaryota45 💬\n📑 :${randomText} ☂`,
            attachment: response.data,
          }, event.threadID);

          // Auto-unsend the message after 2 minutes (120,000 milliseconds)
          setTimeout(() => {
            if (sentMessage && sentMessage.messageID) {
              api.unsendMessage(sentMessage.messageID);
            }
          }, 120000);

        } catch (error) {
          console.error('Error fetching meme:', error.message);
          await api.sendMessage('💢', event.threadID);
        } finally {
          // Remove the loading message after 400 milliseconds if it exists
          if (sentMessage && sentMessage.messageID) {
            setTimeout(() => {
              api.unsendMessage(sentMessage.messageID);
            }, 400);
          }
        }
      };

      intervalId = setInterval(sendAndHandleMessage, 1800000);  // 30 minutes interval
      return api.sendMessage('The command has been activated.', event.threadID);

    } else if (args[0] === 'off') {
      if (!intervalId) {
        return api.sendMessage('▪〉🤳×𝘿𝙊𝙈𝙄𝙉𝘼𝙏𝙄𝙊𝙉×𝙊𝙁𝙁.', event.threadID);
      }

      clearInterval(intervalId);
      intervalId = null;
      return api.sendMessage('The command has been deactivated.', event.threadID);

    } else {
      return api.sendMessage('▪〉🤳×𝘿𝙊𝙈𝙄𝙉𝘼𝙏𝙄𝙊𝙉×\n────────────\n𝗧𝗛𝗘 𝗥𝗨𝗟𝗘𝗦:\n Turn 𝗢𝗡 or 𝗢𝗙𝗙 to activate or deactivate the command.', event.threadID);
    }
  },
};
