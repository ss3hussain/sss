 const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "kissv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shahbaz ahmad choudhary",
  description: "kiss the person you tag",
  commandCategory: "Love",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/a1UNVOa.gif",
"https://i.imgur.com/1TavbWu.gif",
"https://i.imgur.com/cgFkcM7.gif",
"https://i.imgur.com/8dhSyO3.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Please tag 1 person", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` love you meri jan😘 💓`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/omkiss.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/omkiss.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/omkiss.gif")).on("close",() => callback());
                                         }