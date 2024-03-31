 const fs = require("fs");

module.exports.config = {

	name: "Salam",

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

	if (event.body.indexOf("Assalamualaikum")==0 || (event.body.indexOf("Asalamoalikum")==0 || (event.body.indexOf("ASALAMUALIKUM")==0 || (event.body.indexOf("Assalam o alykum")==0 || (event.body.indexOf(" السَّلَامْ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ")==0 || (event.body.indexOf("Assalam u alykum")==0 ||(event.body.indexOf("Asslam o alaikum")==0))))))) {

		var msg = {

				body: "[ وَعَلَيْكُمُ السَّلَامْ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ ]",

				attachment: fs.createReadStream(__dirname + `/noprefix/Salam.gif`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



}