 const fs = require("fs");

module.exports.config = {

	name: "Goodmorning",

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

	if (event.body.indexOf("Morning")==0 || (event.body.indexOf("GOODMORNING")==0 || (event.body.indexOf("Goodmorning")==0 || (event.body.indexOf("Good morning")==0)))) {

		var msg = {

				body: "[ 𒊹︎︎︎ 𝗛𝗮𝘃𝗘 𝗔 𝗡𝗶𝗖𝗲 𝗗𝗮𝗬 𒊹︎︎︎ ]",

				attachment: fs.createReadStream(__dirname + `/noprefix/Goodmorning.gif`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



        }