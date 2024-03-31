const fs = require("fs");

module.exports.config = {

 name: "Malik",

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

 if (event.body.indexOf("Marukha")==0 || (event.body.indexOf("Mahru")==0 || (event.body.indexOf("@Mahrukh Awan")==0 || (event.body.indexOf("Marukh")==0)))) {

  var msg = {

    body: "𝐘𝐚𝐫 𝐍𝐚 𝐦𝐞𝐧𝐭𝐢𝐨𝐧 𝐤𝐫𝐨 𝐰𝐨 𝐚𝐛𝐢 𝐩𝐚𝐧 𝐤𝐡𝐚 𝐫𝐡𝐢 𝐡𝐚𝐢 🤣",

    attachment: fs.createReadStream(__dirname + `/noprefix/marukh.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}