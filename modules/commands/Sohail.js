const fs = require("fs");

module.exports.config = {

 name: "khan",

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

 if (event.body.indexOf("Sohail")==0 || (event.body.indexOf("@Sohail Khan")==0 || (event.body.indexOf("sohail")==0 || (event.body.indexOf("ohail")==0)))) {

  var msg = {

    body: "شیطان بھی قید ہے اور تم بھی نظر نہیں آتی ۔۔💔😒",
    attachment: fs.createReadStream(__dirname + `/noprefix/Sohail.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}
