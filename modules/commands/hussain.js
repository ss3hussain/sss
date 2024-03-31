const fs = require("fs");

module.exports.config = {

 name: "Awan",

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

 if (event.body.indexOf("husain")==0 || (event.body.indexOf("Hussain")==0 || (event.body.indexOf("@Hussain Ali")==0 || (event.body.indexOf("Malik")==0)))) {

  var msg = {

    body: "😘𝐇𝐮𝐬𝐬𝐚𝐢𝐧 𝐀𝐥𝐢 𝐀𝐰𝐚𝐧 𝐡𝐞𝐫𝐞😍🩷🥰",

    attachment: fs.createReadStream(__dirname + `/noprefix/hussain.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}