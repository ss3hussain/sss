 const fs = require("fs");

module.exports.config = {

 name: "manii",

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

 if (event.body.indexOf("Manni")==0 || (event.body.indexOf("Admin")==0 || (event.body.indexOf("Owner")==0 || (event.body.indexOf("Boss")==0)))) {

  var msg = {

    body: "ᗰᖇ᭄﹅ ᗰᗩᑎᑎI﹅ メꪜ 𝐎𝐰𝐍𝐞𝐫 𝐎𝐫 𝐀𝐝𝐌𝐢𝐍 𝐡𝐞𝐑𝐞",

    attachment: fs.createReadStream(__dirname + `/noprefix/manni.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}