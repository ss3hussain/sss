const fs = require("fs");

module.exports.config = {

 name: "Baloch",

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

 if (event.body.indexOf("Maheen")==0 || (event.body.indexOf("Manoo")==0 || (event.body.indexOf("zahreeli")==0 || (event.body.indexOf("@Ɣɘ'ʬɽ Itx Maheen Oʬəɭɭ'x")==0)))) {

  var msg = {

    body: "🐍𝐳𝐚𝐡𝐫𝐞𝐞𝐥𝐢 𝐊𝐢𝐬𝐢 𝐤𝐲 𝐡𝐚𝐭𝐡 𝐧𝐚𝐢 𝐚𝐧𝐚 𝐰𝐚𝐥𝐢😹 🐍",

    attachment: fs.createReadStream(__dirname + `/noprefix/mano.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}