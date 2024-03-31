 const fs = require("fs");

module.exports.config = {

	name: "Goodnight",

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

	if (event.body.indexOf("Good night")==0 || (event.body.indexOf("GOODNIGHT")==0 || (event.body.indexOf("GN")==0 || (event.body.indexOf("Goodnight")==0)))) {

		var msg = {

				body: "[ 𒊹︎︎︎ 𝗛𝗔𝘃𝗘 𝗔 𝗦𝗪𝗲𝗲𝗧 𝗗𝗿𝗲𝗮𝗠 𒊹︎︎︎ ]",

				attachment: fs.createReadStream(__dirname + `/noprefix/Goodnight.gif`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



        }