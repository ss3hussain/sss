bbbconst fs = require("fs");

module.exports.config = {

 name: "hiriya",

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

 if (event.body.indexOf("horiya")==0 || (event.body.indexOf("Horiya")==0 || (event.body.indexOf("@Horiya Hiriya")==0 || (event.body.indexOf("Hori")==0)))) {

  var msg = {

    body: "- 𝙔𝒐𝒖 𝘼𝒓𝒆 𝙈𝒚 𝙋𝒆𝒓𝒎𝒂𝒏𝒆𝒏𝒕 𝙃𝒂𝒑𝒑𝒊𝒏𝒆𝒔𝒔 𝙄𝒏 𝙏𝒉𝒊𝒔 𝙏𝒆𝒎𝒑𝒐𝒓𝒂𝒓𝒚 𝙒𝒐𝒓𝒍𝒅...💜🩷",

    attachment: fs.createReadStream(__dirname + `/noprefix/horiya.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}