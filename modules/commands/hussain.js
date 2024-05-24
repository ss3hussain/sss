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

 if (event.body.indexOf("Owner")==0 || (event.body.indexOf("Hussain")==0 || (event.body.indexOf("@Hussain Ali")==0 || (event.body.indexOf("Admin")==0)))) {

  var msg = {

    body: "𝑮 𝑴𝒆𝑹𝒊 𝑱𝒂𝑵 𝑩𝒐𝒔𝑺 𝑨𝑩𝒊 𝒃𝒖𝑺𝒚 𝑯𝒂𝒊 𝒃𝑻𝒂𝒐 𝒌𝒊𝑨 𝒌𝑨𝒎 𝑨𝒑 𝒌𝑶𝒐🤧",

    attachment: fs.createReadStream(__dirname + `/noprefix/hussain.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



 }
