const fs = require("fs");

module.exports.config = {

 name: "rubab",

    version: "1.0.1",

 hasPermssion: 0,

 credits: "MR CHAND", 

 description: "no prefix",

 commandCategory: "No command marks needed",

 usages: "...",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

 var { threadID, messageID } = event;

 if (event.body.indexOf("@Rubab")==0 || (event.body.indexOf("Nawabzadi")==0 || (event.body.indexOf("Rubab")==0 || (event.body.indexOf("       نواب زادی@  ")==0)))) {

  var msg = {

    body: "ᴏʜ Yᴀʀ ᴡᴏ ʙᴀʀᴛᴀɴ Dʜᴜ ʀʜɪ ʜᴀɪ🤣🤣ʀᴜʙᴀʙ  ʀᴀɴɪ ᴀᴊᴏ ᴀᴘᴋᴏ ʙᴏʟᴀ ʀʜᴀ ʜᴀɪ",

    attachment: fs.createReadStream(__dirname + `/noprefix/rubab.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}