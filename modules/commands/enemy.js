module.exports.config = {
  name: "Enemy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RaZa MaLiK",
  description: "random love",
  commandCategory: "roleplay",
  usages: "send message",
  cooldowns: 0,
  dependencies: {}
};

module.exports.run = async function({ api, event, Users, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if( money < 696) api.sendMessage(`𝘆𝗘𝘄 𝗗𝗡'𝗧 𝗛𝗔𝘃𝗘 𝗘𝗡𝗼𝘂𝗚𝗛 𝗠𝗼𝗡𝗲𝗬➪💔'\n𝗙𝗼𝗿 𝗠𝗮𝗞𝗶𝗡𝗚 𝗠𝗼𝗡𝗲Y\n𝗧𝗬𝗣𝗘 : .Jail\n\n  ${global.config.PREFIX}\n\n𝗖𝗿𝗲𝗮𝗧𝗲𝗗 𝗕𝗬: 𝙈𝙧 𝙈𝙖𝙉𝙞➪😎`, event.threadID, event.messageID) //thay số tiền cần trừ vào 0, xóa money = 0
        else {
        var tile = Math.floor(Math.random() * 101);
        

        //let loz = await api.getThreadInfo(event.threadID);
        var emoji = event.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];

        var namee = (await Users.getData(event.senderID)).name;
        var name = (await Users.getData(id)).name;

        var arraytag = [];
        arraytag.push({id: event.senderID, tag: namee});
        arraytag.push({id: id, tag: name}) 
        Currencies.setData(event.senderID, options = {money: money - 696})
  
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/1.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=${TOKEN}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/2.png"));
        var msg = {body: `[ 😈 𝐃𝐍'𝐓 𝐌𝐞𝐒𝐬 𝐖𝐢𝐓𝐇 𝐌𝐞 😈 ]\n[🖐️😹🍂
-Soʀʀƴ Soʀʀƴ Soʀʀƴ tʌwʌɗʌ Attɩtʋɗɘ Mɘʀɩ jʋttɩ tʜʌɭƴ ʌʛƴʌ🌍🌸🍁
😂😂]\n[ 𝐀𝐍𝐆𝐄𝐫 𝐑𝐚𝐓𝐢𝐎 ] 😈 [${tile}% ]\n`+name+" "+"💓"+" "+namee, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
        //fs.unlinkSync(__dirname + '/cache/1.png');
        //fs.unlinkSync(__dirname + '/cache/2.png');
      }
                              }