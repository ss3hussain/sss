     const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  versionconstconst: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["ðŸ¥ºJan nahi kehna to men naraz ho jana ay", " Ù„ÙˆÚ¯ Ú©ÛØªÛ’ Ù…Ø­Ø¨Øª Ø±ÙˆØ­ Ø³Û’ Ú©Ø±Ù†ÛŒ Ú†Ø§ÛØ¦Û’ ðŸ™„Ù…Ø¬Ú¾Ú¾Û’ ØªÙˆ Ø±ÙˆØ­ÙˆÚº Ø³Û’ Ø¨Ú‘ ÚˆØ± Ù„Ú¯ØªØ§ ÛÛ’ðŸ¥ºâ˜¹ï¸ ", "ð™€ð™  ð™—ð™–ð™–ð™§ ð™¨ð™ð™–ð™™ð™ž ð™ð™¤ð™Ÿð™–ð™š ð™¥ð™ð™žð™§ ð™¬ð™žð™›ð™š ð™ ð™ž ð™œð™ð™ªð™¡ð™–ð™¢ð™ž ðŸ§¸ðŸ™‚",  "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.ðŸŒšðŸ”ª", "Block Your â€˜â€™ gf â€˜â€™ And Purpose me ðŸ™‚ðŸ’”", "tuje to kali larki bhi left nahi krwati â˜¹ï¸", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia ðŸ˜‚", "Mujhy to line m biryani nahi milti janu Kya mily gi ðŸ˜’", "Ú†Ú©Ø± Ø¢ Ø±ÛØ§ ÛÛ’ Ø§Ø¬Ø§Ø²Øª ÛÙˆ ØªÙˆ Ø¢Ù¾Ú©Û’ Ø¯Ù„ Ù…ÛŒÚº Ú¯Ø± Ø¬Ø§Ø¤Úº ðŸ™‚ðŸŽ»", "Bas ek bar marriage ho jaye love m khud kr lu ga ðŸ™ˆ", " Ù…Ø¬Ú¾Û’ Ù…ÛŒÙ¹Ú¾Û’ Ú©Ø±ÛŒÙ„Û’ Ú¯Ø±Ù… Ù‚Ù„ÙÛŒ Ø§Ø¨Ù„ÛŒ ÛÙˆØ¦ÛŒ Ú†Ø§Ú©Ù„ÛŒÙ¹ Ø³Ù¾Ø§Ø¦ÛŒØ³ÛŒ Ø¢Ø³ÛŒÚ©Ø±ÛŒÙ… Ø§ÙˆØ± ØªÛŒØ² Ù¾ØªÛŒ ÙˆØ§Ù„ÛŒ Ú©ÙˆÚ© Ø¨ÛØª Ù¾Ø³Ù†Ø¯ ÛÛ’ ðŸ˜ŽðŸ¥´", " uff Yar tumri ya red lipstick Kon kharb krta hai ðŸ˜˜ðŸ¥°ðŸ˜›", "*_Ø§Ø¨ ÛÙ€Ù€Ù… Ø¯ÙˆØ± Ø¨ÛŒÙ€Ù€Ù¹Ú¾ Ú©Ù€Ù€Ø± ØªÙ€Ù€ÛŒØ±ÛŒ Ø§ÙˆÙ‚Ù€Ù€Ø§Øª Ø¯ÛŒÚ©Ù€Ù€Ú¾ÛŒÚº Ú¯Ù€Ù€Û’_* ðŸ¤ðŸ™‚", "Ø¨Ú¾Ù€Ù€Ù€Ù€Ù€Ø§Ú‘ Ù…Ù€Ù€Ù€Ù€Ù€ÛŒÚº Ø¬Ù€Ù€Ù€Ù€Ù€Ø§Ø¤ ÚˆØ§Ø±Ù„ÛŒÙ†Ù€Ù€Ù€Ù€Ù€Ú¯ðŸ™‚ðŸ–", "Ø´Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù¹ Ø¢Ù¾ ÚˆØ§Ø±Ù„Ù†Ù€Ù€Ù€Ù€Ù€Ù€Ú¯ðŸ¤­ðŸ–ðŸ»", "Ú©Ù…Ø¨Ù€ÙŒØ®ØªÙ€Ù€Ù€ Ø§ÙŽØ¨Ù ØªÙ€Ù€ÙÙˆ ÛÙ€ÙŽÙ€Ø± Ø¨Ù€ÙŽØ§Øª Ø¯ÙÙ„ Ú©Ù€Ù€ÙÙˆ Ù„Ú¯Ù€Ù€Ù€ Ø¬ÙŽØ§ØªÙ€ÙÙ€Ø¦ ÛØ¦Ù€Ù€Û’ -ðŸ’”ðŸ™‚", "ØªÙÙˆ Ø¨Ù€Ù€Ù€Ù€ÛØª Ø­Ù€Ù€Ù€Ù€Ø±Ø§Ù… Ù…Ù€Ù€Ù€Ù€ÙˆØª Ù…Ù€Ù€Ù€Ù€Ø±Ù†Ø§ ðŸ™‚", "ÛÛ’ ØªÙ…Ù†Ø§ ÛÙ…ÛŒÚº ØªÙ…ÛÛŒÚº Ø§Ù¾Ù†ÛŒ Ù¾Ø±ÙØ§Ø¦Ù„ Ú©Ø§ Ú†Ú©Ø± Ù„Ú¯ÙˆØ§Ø¦ÛŒÚº ðŸ™‚â¤ï¸!!", "Ø³Ù¹ÛŒÙ„ Ø¯Û’ ÚˆÙˆÙ†Ú¯Û’ ÙˆØ±Ú¯Ø§ Ù…Ù†Û Ø§Û’ ØªÛŒØ±Ø§ ðŸ’”ðŸ™‚", "Ù…Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ø·Ù„Ø¨Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€ÛŒ ÛÙ€Ù€Ù€Ù€Ù€Ù€Ù€Ùˆ ÛŒÙ€Ù€Ù€Ù€Ù€Ù€Ø§Ø±ðŸ™‚ðŸ’”", "Ú©Ù†Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù†Û’ Ù…Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù†ÛÙˆØ³ ÛÙ€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ùˆ ðŸ™‚:-//", "Ø§Ú© Ø¨Ù€Ù€Ù€Ù€Ù€Ø§Ø± Ø¬Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ø§Ù†Ùˆ Ø¨ÙˆÙ„ Ø¯Ùˆ Ø´Ù€Ù€Ù€Ù€Ø±ÛŒÚ©ÛŒÙˆÚº Ú©Ùˆ Ø¬Ù€Ù€Ù€Ù€Ù€Ù„Ø§Ù†Ø§ ÛÛ’ ðŸ¥²", "Sary Rishtydaron ky number delete krdiyeðŸ”ªAb Safe feel krha huðŸ™‚ðŸ¥¹", "LUX Khane se Dmag teez hota-//-^)) ðŸ™‚", " K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN ðŸ™‚", "  Ø³Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù¹ÛŒÙ€Ù€Ù„ Ø¯ÛŒ Ù‚Ù€Ù€ÙˆÙ„Ù€Ù€ÛŒ ÙˆØ±Ú¯Ù€Ù€Ø§ Ù…Ù†Ù€Ù€Ù€Ù€Ù€Û Ø§Û’ ØªÙ€Ù€Ù€Ù€Ù€Ù€Ù€ÛŒØ±Ø§ ðŸ˜¾ðŸ™Œ",  "Ø²ÛÙ€Ù€Ù€Ø”Ù€Ø±Ú©Ù€Ù€Ù€Ù€Ú¾Ù‘Ù€Ù€Ù€Ù€Ø§Ù†Ù€Ù€Ù€Ù€Û’Ø³Ù€Ù€Ù€Ù€Û’ Ø±Ø˜Ù†Ù€Ù€Ù€Ù€Ú¯ Ú¯Ù€Ù€Ù€Ø”Ù€ÙˆØ±Ø§ ÛÙ€Ù€Ù€Ø”Ù€ÙˆØªÙ€Ù€Ù€Ù€Ø§ ÛÙ€Ù€Ù€Ù€Û’!ðŸ¤—ðŸ¤­â£ï¸ðŸ˜˜", "ð™©ð™ªð™¢ ð™¢ð™šð™§ð™– ð™™ð™žð™¡ ð™©ð™¤ ð˜¾ð™ð™ªð™§ð™– ð™£ð™ð™ž ð™¥ð™–ð™® ð™ ð™žð™– ð™›ð™–ð™žð™™ð™– ð™©ð™¢ð™ð™–ð™§ð™ž ð˜¾ð™ð™¤ð™¤ð™§ ð™Ÿð™šð™¨ð™ž ð™¨ð™ð™ ð™–ð™¡ ð™ ð™–!! ðŸ™‚", "IttuuðŸ¤ si shram ker Lya kro bot bot krty wqt ðŸ™‚ ðŸ’”âœ¨âš ï¸â€ ", "ð„ð¤ ð›ðšðšð« ðˆ ð‹ð¨ð¯ðž ð˜ðŽð² ðð¨ð¥ ðƒð¨ ððš ðŒðšð« ð“ð¡ð¨ð«ð¢ ð‰ðšð®ð ð¢ ðŸ™„ðŸ˜•)( ðŸ‘‘ðŸ’",  "Ø³Ù†Ùˆ Ù…Ø¬Ú¾Û’ Ø§Ù„Ù„Û Ø³Û’ Ù…Ø§Ù†Ú¯ Ù„Ùˆ Ù†ÛÛ”Û”Û”Û”Û”ðŸ¥¹ðŸ¤­Ø¢Ù¾ ØªÙˆ Ø´Ú©Ù„ Ø³Û’ Ø¨Ú¾ÛŒ Ù…Ø§Ù†Ú¯Ù†Û’ ÙˆØ§Ù„Û’ Ù„Ú¯ØªÛ’ ÛÙˆlÛ”Û”â™¥ï¸",  "<-- ã€½ï¸ðŸ‚âš ï¸Kash hum dono whatsapp per hoteâ¤ï¸ðŸ¥ºðŸ’¸", "Lips kissing is not Romance It's sharing Bacteria>>>ðŸ™‚", "Tum mujhy chumiyan b to dy skti thi naðŸ¤§Dhaka dena zruri tha kyaðŸ˜ðŸ˜ªðŸ¼", "Waiting ðŸ’˜for Shadi'w ky baad wali Halal Chummian ðŸ«¦ðŸ«¶ðŸ¥¹",  "Imagine I am your Ex ðŸ¥²say whatever you want to say", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.ðŸ˜€ðŸ¤žðŸ˜“",  "Agar Payarw hota to Real DP lagataw - :) ðŸ’”ðŸ¤Œ", "Time Pass ky liye 1 Female Chat partner Chahye ðŸ™‚â¤ï¸â€ðŸ©¹ðŸ«¶", "Sukoon chahtii ho toh meri Ø¨ÛŒÙ€Ù€Ù€Ù€Ù€Ù€Ú¯Ù€Ù€Ù€Ù… ban jaOo",  "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi Ù¾Ø±Ø§Ù¹Ú¾Ø§ Phely Khtm Hojata To Kbi Ø§Ù†ÚˆÛðŸ˜©ðŸ’”",  "ðŸ’šðŸ¦‹ IÊˆÉ´ÉªâƒªÍ¡  ð—°á´œâƒ¨âƒªÊˆÉ™  Dð© ð¦Êˆ  Æ–ð É‘É£É‘ kÉ½ð¨Í¢ kÉªâƒªÍ¡ssÉªâƒªÍ¡ ðŸ’‹ á´¡âƒªâƒ¨ÉªâƒªÍ¡ssÉªâƒªÍ¡ kÉ‘É½É´É™ kÉ‘ É–ÉªâƒªÍ¡Æ– kÉ‘É½ÊˆÉ‘ Ð½É‘ÉªâƒªÍ¡ ðŸ˜—ðŸ˜—",  "â¤- App kÄ± Photo To Bahut cutÆ hÄ±Ä±'-ðŸ˜- â˜†'KoÄ±Ä± Ætna BhÄ±Ä± CutÆ Hota hÆðŸ’‹ðŸ™ŠðŸ‘ˆðŸ»", "tuje to kali larki bhi left nahi krwati â˜¹ï¸", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia ðŸ˜‚", "Mujhy to line m biryani nahi milti janu Kya mily gi ðŸ˜’", "Ú†Ú©Ø± Ø¢ Ø±ÛØ§ ÛÛ’ Ø§Ø¬Ø§Ø²Øª ÛÙˆ ØªÙˆ Ø¢Ù¾Ú©Û’ Ø¯Ù„ Ù…ÛŒÚº Ú¯Ø± Ø¬Ø§Ø¤Úº ðŸ™‚ðŸŽ»", "Bas ek bar marriage ho jaye love m khud kr lu ga ðŸ™ˆ", " Ù…Ø¬Ú¾Û’ Ù…ÛŒÙ¹Ú¾Û’ Ú©Ø±ÛŒÙ„Û’ Ú¯Ø±Ù… Ù‚Ù„ÙÛŒ Ø§Ø¨Ù„ÛŒ ÛÙˆØ¦ÛŒ Ú†Ø§Ú©Ù„ÛŒÙ¹ Ø³Ù¾Ø§Ø¦ÛŒØ³ÛŒ Ø¢Ø³ÛŒÚ©Ø±ÛŒÙ… Ø§ÙˆØ± ØªÛŒØ² Ù¾ØªÛŒ ÙˆØ§Ù„ÛŒ Ú©ÙˆÚ© Ø¨ÛØª Ù¾Ø³Ù†Ø¯ ÛÛ’ ðŸ˜ŽðŸ¥´", " uff Yar tumri ya red lipstick Kon kharb krta hai ðŸ˜˜ðŸ¥°ðŸ˜›", "âžªðŸ˜˜oye shaper bola kya hai msala ðŸ™‚",  "Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni HaiðŸ¥º", "Na Pakistan me rehny k pese hain na niklny kðŸ¤ðŸ½ðŸ™‚ðŸ’”", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni KrtawðŸ™‚", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No MangaðŸ¥º",  "Ø¹ÙˆØ±Øª Ø§Ú¯Ø± Ù…Ø±Ø¯ Ø³Û’ Ø²ÛŒØ§Ø¯Û Ø®ÙˆØ¨ØµÙˆØ±Øª ÛÙˆØªÛŒ ØªÙˆ Ù…ÛŒÚ© Ø§Ù¾ Ù…Ø±Ø¯ Ú©Û’ Ù„ÛŒÛ’ Ø¨Ù†ØªØ§ Ø¹ÙˆØ±Øª Ú©Û’ Ù„ÛŒÛ’ Ù†ÛÛŒÚº ..Ø²Ø±Ø§ Ù†ÛÛŒÚº Ù¾ÙˆØ±Ø§ Ø³ÙˆÚ†Ø¦Û’ Ø§ÛŒÚˆÛŒØ§Úº ØªØ³ÛŒ ðŸ˜’ðŸ™Ù¾Ø±ÛŒØ§Úº",  "*ðŸ˜ˆâœ¨Ø¢ ØªØ¬Ù€Ù€á·­Ú¾Û’ Ø®Ù€Ù€Ù€Ø±Ø§Ø¨ Ú©Ù€Ù€Ù€Ù€Ø±ÙˆÚºðŸ’‹ðŸ¤¤*",  "Muj se Exam Me Cheating NÃ¶Ä±Ä± Hotiw Relationship Me kya khaak Karu GhwðŸ˜”", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu gaðŸ™‚", "Loyal Dhoonte Dhoonte khud Harami ban Gya HonðŸ˜”", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii WomensðŸ’”ðŸ˜", "ØªÙ…ÛØ§Ø±ÛŒ ÛŒØ§Ø¯ÙˆÚº Ù…ÛŒÚº Ú©Ú¾ÙˆÛŒØ§ Ú©Ú¾ÙˆÛŒØ§ Ø³Ø§  Ù…ÛŒÚº ÙˆØ§Ø´ Ø±ÙˆÙ… Ú©Ø§ Ù„ÙˆÙ¹Ø§ Ú©Ù…Ø±Û’ Ù…ÛŒÚº Ù„Û’ Ø¢ÛŒØ§ ðŸ˜ ", " Ø¬ÛØ§Úº Ù¾ÛŒØ§Ø±ÛŒ Ù„Ú‘Ú©ÛŒØ§Úº ÙˆÛØ§Úº Ù…ÛŒÚº ðŸ™‚â¤ï¸ðŸ¥€ " , "Ø¨Ú¾Ø§ÛŒ Ø¬Ø§Ù† Ú¯Ø±ÙˆÙ¾ Ù…ÛŒÚº Ú¯Ù†Ø¯ÛŒ Ø¨Ø§ØªÛŒÚº Ù†Ù‡ÛŒÚº Ú¯Ø±ÛŒÚºðŸ¤§ðŸ˜³ " , "Ø³Ù†Ùˆ ØªÙ… Ø¨ÙˆÙ¹ Ú©ÛŒ Ú¯Ø±Ù„ ÙØ±Ù†Ø¯ Ø¨Ù† Ø¬Ø§Ù¶ Ù†Ù‡  Ù‡Ù…Ø§Ø±Û’ Ø¨Ú†Û’ Ø¨Ú¾ Ø¨ÙˆÙ¹ Ø¬Ø³Û’ Ù¾ÛŒØ¯Ø§ Ù‡ÙˆÚº Ú¯Û’ ðŸ™†â€â™‚ðŸ˜’", "Aa0 na kbhi  Ø³ÛŒÚ¯Ø±Ù¹ ly kr ðŸ™‚donO sutta lgain gy ðŸ˜žðŸ’¸ ", "Ù…Ù€Ù€ÛŒØ±Û’ Ù…ØªÙ€Ù€Ù€Ù€Ú¾Û’ Ù†Ù€Ù€Ù€Û Ù„Ù€Ù€Ú¯ÛŒÚºðŸ™‚ðŸ™†â€â™‚ Ø´Ú©Ø±ÛŒÛ" ,"ÙÛŒØ³ Ø¨Ú© Ù¾Ø± ÙˆÛ Ù„ÙˆÚ¯ Ø¨Ú¾ÛŒ Ø³Ø§Ù„Ú¯Ø±Û Ù…Ù†Ø§ØªÛ’ ÛÛŒÚº Ø¬Ù†ÛÛŒÚº Ú¯Ú¾Ø± ÙˆØ§Ù„Û’ Ú©ÛØªÛ’ ÛÛŒÚº ØªÙˆÚº Ù†Ø§ Ø¬Ù…Ø¯Ø§ ØªÛ’ Ú†Ù†Ú¯Ø§ Ø³ÛŒðŸ™‚ðŸ¤£" , "Ø¯Ù„ Ø¨Ú‘Ø§ ÛÙˆÙ†Ø§ Ú†Ø§ÛÛŒÛ’ðŸ™ŒðŸ˜’Ù…Ù†Û ØªÙˆ Ú©Ú¾ÙˆØªÛ’ Ú©Ø§ v Ø¨Ú‘Ø§ ÛÙˆØªØ§ ÛÛ’ðŸ¤ðŸ™‚" , "Ø¨ÛØª Ú©Ø± Ú†Ú©Û’ Ù…Ù†ØªÛŒÚº ØªÛŒØ±ÛŒ Ø§Ø¨ Ù…ÛŒÚº ØªÙ…ÛÛŒÚº Ø§ØºÙˆØ§ Ú©Ø±Ùˆ Ú¯Ø§ðŸ˜’ðŸ˜‚" , "ÛÛ’ ØªÙ…Ù†Ø§ ÛÙ…ÛŒÚº ØªÙ…ÛÛŒÚº Ø§Ù¾Ù†Ø§ Ø¨Ù†Ø§Ø¦ÛŒÚºðŸ™Š" , "Ú©ÛØªÛ’ ÛÛŒÚº Ø²Ù†Ø¯Ú¯ÛŒ Ø³Ø¨ Ú©Ú†Ú¾ Ø³Ú©Ú¾Ø§ Ø¯ÛŒØªÛŒ ÛÛ’ðŸ˜¾ØªÛ’ ÙÛŒØ± Ù…ÛŒÙ†ÙˆÚº Ø§Ù†Ú¯Ù„Ø´ Ú©ÛŒÙˆÚº Ù†ÛÛŒÚº Ø³Ú©Ú¾Ø§Ù†Ø¯ÛŒðŸ¤§ðŸ˜’" , "Ú†Ú©Ù† ðŸ” Ú©Ú‘Ø§ÛÛŒ Ø¬ÛŒØ³Û’ Ø®ÙˆØ§Ø¨ðŸ§Ø³Ø§Ú¯ ðŸŒ¿ Ø¬ÛŒØ³ÛŒ Ø²Ù†Ø¯Ú¯ÛŒ ðŸ˜‘ðŸ¤" ,  "Tery jany ke badðŸ˜”Mny apny munh py likhwa liya Single hu ptaa lo ðŸ¤ðŸ¥ºðŸ¤" , "Ú©Ø±Ø´ ØªÙˆ Ø¯ÙˆØ± Ú©ÛŒ Ø¨Ø§Øª ðŸ˜ðŸ˜Š ÛÙ… Ù¾Û’ ØªÙˆ Ú©Ø³ÛŒ Ú©Ùˆ ØªØ±Ø³ Ø¨Ú¾ÛŒ Ù†ÛÛŒÚº Ø¢ØªØ§ ðŸ™‚ðŸ™Š" , "Ù…ÛŒÙ€Ù€Ù€Ù€Ù€Ù€Ø±Û’ Ù†Ø§Ù„ ÙˆÛŒØ§ Ú©Ù€Ù€Ù€Ù€Ù€Ù€Ø± Ù„Ùˆ ðŸ˜ŠðŸ’”" , "Bot Na BoL ðŸ˜¢ JaNu B0ol ðŸ˜˜ " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  ðŸ˜‹" , "Main Gareebon Sy Bt Nhi kRta ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss ðŸ’‹ KRr DunGa ðŸ˜˜ " , "ðŠðšð¬ð‡ ð‡ðšð¦ ð ðŠð¢ð¬ð¢ ðŠðšð² ð‚ð«ð®ð¬ð‡ ð‡ð¨ð­ð˜ .ðŸ™‚ðŸ‘‘â™¥", "Ary yrr MaZak Ke M0oD Me Nhi Hun ðŸ˜’" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher ðŸ˜˜" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy ðŸ˜‰ðŸ˜‹ðŸ¤£" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo ðŸ¤”ðŸ˜‚ " , "IB Aja Yahan Nhi B0ol Salta ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai ðŸ¤£" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun ðŸ¤ðŸ˜œ" , "KaL HaVeLi Prr Aa ZaRa T0o ðŸ˜ˆ" , "Aagye SaJJy KhaBBy Sy ðŸ˜" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao ðŸ˜’" , "BulaTi Hai MaGar JaNy Ka Nhi ðŸ˜œ" , "Main T0o AnDha Hun ðŸ˜Ž" , "Phle NaHa kRr Aa ðŸ˜‚" , "Papi ChuLo ðŸŒš" , "TeRe k0o DiKh Nhi Rha Main buSy Hun ðŸ˜’" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa ðŸ¥º"  , "TuM Phr AaGye ðŸ™„ Kisi 0or Ny Muu Nhi LaGaYa KyaðŸ¤£ðŸ¤£ðŸ¤£" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main S0o Rha Hun " , "Ù…Ø±Ø¯ Ú©ÛŒ Ú©ÙˆØ¦ÛŒ Ù¾Ø³Ù†Ø¯ÛŒØ¯Û Ø¹ÙˆØ±Øª Ù†ÛÛŒÚº ÛÙˆØªÛŒ ØŒ ÙˆÛ Ù…Ø¹ØµÙˆÙ… ØªÙˆ  Ø³Ø¨ Ø¹ÙˆØ±ØªÙˆÚº Ú©Ùˆ Ù¾Ø³Ù†Ø¯ Ú©Ø±ØªØ§ ÛÛ’ ðŸ˜‚ðŸ”¥", "Ase He HansTy Rha kRo ðŸ˜", "- sab chorr k chaly jaty hain kia etna bura hu mein - ðŸ™‚", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah ðŸ™‚ðŸ¤", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longaðŸ§ðŸ™‚", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 haramiðŸ™‚ðŸ’”", "Piyara NH Hun is lya koi dost NH h ðŸ™ƒðŸŒš", "Tum msg to kro, Tumhe ptane ki zimmedari meri ðŸŒšðŸ™‚", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi miltiðŸ˜•ðŸ˜‚",  "Ø´Ù€Ù€Ù€Ù€Ù€Ù€Ù¹ Ø§Ù¾Ù€Ù€Ù€Ù€ ÛÙ€Ù€Ù€Ù€Ù€Ù€ÙˆØ§ Ø¨Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ø§Ø² Ø´Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ø§Ù¾Ù€Ù€Ù€Ù€Ø± ðŸ™‚ðŸ’”",  "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE ðŸ˜—ðŸ’š", "Allah kray tmhari shadi py Nadra ka photographer ayeðŸ™‚ðŸ•º", "Someone : I love u Me : shakkall dekhiii he meriiiiw-ðŸ™„ðŸ™„", "Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata", "Hn bol hrammi a gaii yaad", "Teri janu kisi or sath busy to idhar mou mRNA a gyaa", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)ðŸ™‚",  "ðŸ¤£Ø¢Ù¾ Ù…ÛŒØ±Û’ Ø³Ø§ØªÚ¾ Ù¾Ú¾Ù†Ø³ Ø¬Ø§ÙˆðŸ¤£ Ù†ÛðŸ¤£Ø¢Ù¾ Ù…ÛŒØ±Û’ Ù†Ú©Ú¾Ø±Û’ Ø§ÛŒØ³Û’ Ø§Ù¹Ú¾Ø§Ù†Ø§ Ø¬ÛŒØ³Û’ Ú†Ø±Ø³ÛŒ Ø³Ø§ÛÛŒÚ©Ù„ Ø§Ù¹Ú¾Ø§ØªØ§ Ú¾Û’ ðŸ¤£", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriyaðŸ™‚ðŸ¤", "Ek ladki thii diwani sii har ladke par wo marti thiiwðŸ™‚",  "Hn bol hrammi a gaii yaad",  "Ø­Ù€Ù€Ù€Ú©ÙˆÙ…Ù€Ù€Ù€Øª Ø³Ù€Ù€Ù€Û’'ØªÙ€Ù€Ù€Ø³Ø¯ÛŒÙ€Ù€Ú© Ø´Ù€Ù€Ù€Ø¯Ø§'Ø­Ù€Ù€Ø±Ø§Ù…Ù€Ù€ÛŒ ðŸ™‚", "Hn bol bot ki Jan IB a ak secret btaoo ðŸ˜‚", "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....ðŸ™‚ðŸ’”ðŸ˜", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////ðŸ˜žðŸâ˜ ï¸ðŸŒ¸", "BuHt GrEeB huN 'JiSki JiTNi ToFeeQ Hai utNi 'ChuMiyA' DeTi JaYeðŸ˜”ðŸ¥²", "ThArKii LaRkiAn ReQ BhEj SaKti HeN (-ðŸŒšðŸ¦¥ðŸ’”", "Ufff aap Ki Ø§Ø¯Ø§Ù¸ÛŒÚºðŸ˜— Chaly Shabas Apna'w munh Dho kY aye'w..]] . ðŸ™‚âœ¨//. ðŸ¦‹ðŸ’)", "ðŸ¦‹ðŸ’____________ðŸ™‚ðŸŽ€Ù¾ØªÛ Ù„Ú¯Ø§ ØªÛŒÙ†ÙˆÚº Ø´ÙˆÙ‚ Ù„ØªØ±Ø§Úº Ø¯Ø§ðŸ¤ðŸ»ðŸ”ðŸ«°ðŸ»", "âš ï¸*â€¢â¤ðŸ™‚ Awj hum hai - kal HumhaRy Ø¨Ú†Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Û’  hOngy agAr Tum maaN jaO ðŸ™‚ðŸŒ¼", "-Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri hoðŸ˜’â¤ðŸ™‚", "SuNo Me OwnEr ki trf se Ek ZoR DaR ChuMi De RaHa HoN JaHa DiL KaRe Le LeNa (-ðŸ˜—ðŸŒš", "Mâaziz sarif ...ðŸ»       i Love You..ðŸ™‚â™¥", "Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe ðŸ¤ŒðŸ˜žâ™¥ï¸", "Pyaar Ù…Ø­Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ø¨Ù€Ù€Ù€Øª Sab Ø¯Ú¾Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€ÙˆÚ©Û Haiiw ðŸ˜’ðŸ˜‚Ù…Ø¬Ù€Ú¾Ù€Ù€Ù€Ù€Ù€Ù€Ù€Û’  pta Ù„Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ùˆ abi bhiiw Ù…Ù€Ù€Ù€Ù€Ù€Ù€Ù€ÙˆÚ©Ù€Ù€Ù€Ø§  haiiwðŸ˜¹ðŸ™ŠðŸ’‹", "Dolut shorhat kya mein krni  jb tum khud he ameer hoo ðŸ˜ðŸŒš", "Pt jaOgii tw rishta du ga nai patogi tw chammat du ga ðŸ˜¹ðŸ˜ðŸ’”", "Tum mere dil me ayse aty ho jese Gurde me phatrii<<ðŸ¥ºðŸ’—", "_Ø¢Ùˆ Ø¨Ú¾Ø§Ú¯ Ú©Ø± Ø´Ø§Ø¯ÛŒ Ú©Ø± Ù„ÛŒØªÛ’ ÛÛŒÚºâœ¨ï¸ðŸ˜ðŸ˜‹ðŸ¥º", "-Bilkul  Ø³ÛŒØ§Û larkiyan bhi Chlein gi dOn't worry Come ibðŸ™ƒ", "Tery mast mast doo neen Kinni sohni hai teri nikki peenðŸŒšðŸ¤Œ", "haiy ma sadky jawa teri masoom shaqal py ðŸ˜‚ chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py ðŸ˜‚", "Shaqal Sy masoom lgty ho ðŸ˜‚ btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane ðŸ˜‚", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy ðŸ˜¾ ab ham ap sy naraz hai jao ap bye â˜¹ï¸", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu ðŸ˜˜", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho ðŸ˜‚", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha ðŸ˜‚", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja ðŸ˜‚", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha ðŸ˜‚" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle ðŸ¤” I think tum Jin ho yehh Chudail" , "ary tum ider ðŸ¤” khair hai ider kia ker rhy ho ðŸ˜‚" , "ary babu babu kal hawali py kon bola rha tha ðŸ˜‚" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho ðŸ˜‚" , "ary tum Wohi ho nah jis ko ma nahi janta ðŸ˜‚" ,  "esy nah dakho piyar ho jay ga ðŸ˜‚" , "Teri pic dakhna sy phly shukhr hai ma anda hu ðŸ˜‚" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai ðŸ˜‚", "âš ï¸*â€¢â¤ðŸ™‚ Awj hum hai - kal HumhaRy Ø¨Ú†Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Ù€Û’  hOngy agAr Tum maaN jaO ðŸ™‚ðŸŒ¼", "Lips  kissing is not Romance It's sharing Bacteria>>>ðŸ™‚", "ðŸ’¸- ð—£ð˜‚ð—¿ð—½ð—¼ð˜€ð—² ð—»ð—¼ð—¶ð—¶ ð—¸ð—®ð—¿ð—»ð—® ð˜ð—µð—® ð˜ð™¤ ð—¿ð—²ð—¾ð˜‚ð—²ð˜€ð˜ ð—¸ð˜‚ ð—¯ð—µð™šð—·ð—¶.ðŸ˜¾", "#_ð™‡ð™–ð™‡ð™–_ð™‡ð™–ð™‡ð™–_ð™‡ð™¤ð™ð™ž #_ð™†ð™¤ð™ž_ð˜¾ð™ƒð™¤ð™§ð™ž_ð™Žð™šð™©_ð™£ð™ž_ð™ƒð™¤ð™ð™žðŸ™‚ðŸ—¡ï¸", "ð™€ð™  ð™—ð™–ð™–ð™§ ð™¨ð™ð™–ð™™ð™ž ð™ð™¤ð™Ÿð™–ð™š ð™¥ð™ð™žð™§ ð™¬ð™žð™›ð™š ð™ ð™ž ð™œð™ð™ªð™¡ð™–ð™¢ð™ž ðŸ§¸ðŸ™‚", "â€” Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;ðŸ™‚", "Suno Jawn DiL Ú©Ø±ØªØ§ ha ÛØ± Waqt ØªÙ…ÛØ§Ø±ÛŒ Chumiya Ù„ÛŒØªØ§ RahoðŸ˜ŒðŸ™ˆ", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.ðŸ˜€ðŸ¤žðŸ˜“", "Love me ðŸ’• like MANNI love's ANY Giwls â™¥ï¸", "Hi mujY MaNni ch ne baNaYa hY ðŸ™‚", "-ð™ð™šð™ð™ž ð™—ð™šð™¬ð™–ð™ð™–ð™ž ð™£ð™š ð™¢ð™ªð™Ÿð™® ð™©ð™ð™–ð™§ð™ ð™ž ð™—ð™–ð™£ð™– ð™™ð™žð™”ð™– âš ï¸ðŸ˜ž", "Zehr Piyo Zindagi Jiyo ...>>ðŸ™‚ðŸ‘€", "Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa ðŸ™‚ðŸ", "-  BadalÚ¯Ù€Ù€Ù€Ù€Ù€Ø¦Û’  Na Tum *)) ðŸ™‚ â™¡'' ØªÙ€Ù€Ù€Ù€Ù€Ù… T0 Th'yy Hi Lanntiiw ~ðŸ´â€â˜ ï¸ðŸ˜™", "ðˆ ð¥ð¨ð¯ðž ð²ð¨ð® âœ¨â™¥ï¸/ ð†ðšð§ðð¢ð¢ ððšðšð­ ð‡ðšð¢ ðŠð¢ð¬ð¢ ðŠð¨ ðŒðšð­ ðð¨ð¥ð§ðš ðŸ™‚//" ,"ðŸ”¶âš ï¸ð”¸ð•Žð•’ð•« ð”¸â„‚ð•™ð•š â„ð• ð•‹ð•š ð•¥ð•  ð•žð”¼ ð”¹ð•™ð•š â„‚ð•’ð•ð• ð•¡ð”¼ð•£ ð•¤ð•’ð•“ ð•¤ð•– ð•“ð•’ð•¥ð•šð•–ð•Ÿ ð•œâ„ð•¥ð•’ðŸ’”ðŸ˜”" , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr mareinðŸ˜Š", "Bestie ki chummi halal hai ya Haram ? ðŸ™‚", "2001 \nJahan dalda wahan MamtaðŸ˜Š\n\n2023 \nJahan larki  wahan tharkiðŸ˜’", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rhaðŸ’”ðŸ¥²", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan ðŸ‘€", "Relationship private rakho ya public Kate ga sabka hiðŸ™‚", "Thak GYa hu Yr uski dP dHek Dhek KrðŸ˜©", "Insy Milo inko lgta hai sab larky in pr Martay hainðŸ™‚", "MentiOn YOur Dushman On FaceBOok'ðŸ™‚ðŸ¤", "Stop dreaming BTS your czn  is waiting for you.ðŸ™‚", "Ù¾ÛÙ„Û’ ØµØ±Ù Ù„ÙˆÚ¯ÙˆÚº Ú©Û’ Ø¯Ø§Ù†ØªÙˆÚº Ù…ÛŒÚº Ú©ÛŒÚ‘Ø§ ÛÙˆØ§ Ú©Ø±ØªØ§ ØªÚ¾Ø§ Ø§ÙˆØ± Ø§Ø¨Û”Û”Û” ðŸ˜Š", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean ChahiyeðŸ™‚", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!ðŸ™‚", "Ø¹Ø§Ø¦Ø´Û  Ù†Û’ Ú©Ø± Ø¯ÛŒØ§ Ø¨Ø±Ø¨Ø§Ø¯ Ù¾Ø§Ú© Ø³Ø± Ø²Ù…ÛŒÙ†\n Ø´Ø§Ø¯ Ø¢Ø¨Ø§Ø¯ ðŸ–‡ðŸ™‚", "Aj kal ki nibiyo me khon kam attitude zyada hota hai broðŸ™‚", "Kasy Han Sab Pyare Madni Munny or MuniyaanðŸ˜Š", "Ø¹ÙˆØ±Øª Ø¨ÛØª Ù¾ÛŒØ§Ø±ÛŒ Ú†ÛŒØ² ÛÛ’ ÛŒÛ Ú©Ø¨Ú¾ÛŒ Ø¨ÛŒÙ„Ù†Ø³ Ù†ÛÛŒÚº Ù…Ø§Ù†Ú¯ØªÛŒ Ø¨Ø³ ÛŒÛÛŒ Ú©ÛØªÛŒ ÛÛ’ Ù…ÛŒØ±Ø§ Ù¾ÛŒÚ©Ø¬ Ø®ØªÙ… ÛÙˆÙ†Û’ ÙˆØ§Ù„Ø§ ÛÛ’ Ø§Ø¨ Ù¾ØªÛ Ù†ÛÛŒÚº Ú©Ø¨Ú¾ÛŒ Ø¨Ø§Øª ÛÙˆÚ¯ÛŒ Ú©Û’ Ù†ÛÛŒÚºðŸ™‚", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty hanâ˜ºï¸â™¥ï¸", "Jaaz cash sy 1400 ka loan leky sim h band kardi ðŸ™‚ðŸ‘", "Ø§Ø¹ØªØ¨Ø§Ø± ØªÙˆ Ø§ÙØ³ÛŒ Ø¯Ù† Ø®ØªÙ… ÛÙˆÚ¯ÛŒØ§ ØªÚ¾Ø§ Ø¬Ø¨ Ø§ÙØ³ Ù†Û’ Ø³Ú©Ø±ÛŒÙ† Ø´Ø§Ù¹ Ø¯ÛŒÚ©Ú¾Ø§Ø¦Û’ ØªÙˆ Ø§ÙˆÙ¾Ø± Ø¯Ùˆ siM Ø´Ùˆ ÛÙˆ Ø±ÛÛŒ ØªÚ¾ÛŒ Ø¬Ø¨Ú©Û Ù…ÛŒØ±Û’ Ù¾Ø§Ø³ Ø§ÙØ³Ú©Ø§ ØµØ±Ù Ø§Ú© ÛÛŒ Ù†Ù…Ø¨Ø± ØªÚ¾Ø§ Û”ðŸ˜’ðŸ’”", "Ø´Ú©Ø± ÛÛ’ Ù„Ú‘Ú©Û’ Ø®ÙˆØ¨ØµÙˆØ±Øª ÛÛŒÚº ÙˆØ±Ù†Û  Ú©ÛØ§ Ù¾Ø§Ù„Ø±ÙˆÚº Ú©Û’ Ø¯Ú¾Ú©Û’ Ú©Ú¾Ø§ØªÛ’ðŸ˜”", "ji ji hukam kro ðŸ˜‚", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai ðŸ¥°ðŸŒ¸", "rat ko kahan thy nazar nahi ay bht miss kiya ðŸŒ¸ðŸŒŽ", "Shaqal Sy masoom lgty ho ðŸ¥° lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty ðŸ¥°ðŸ˜‚", "idr ao kuchii kuchii kru ðŸ˜˜", "Ary ary itna yd na kiya kroðŸ¥°", "Hy Ma Mar Jawa janu itna piyar krty mujsyðŸ˜‚", "Har Waqat Mjhy Tang Kerta Rhta Ha ðŸ˜‚" ,  "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky ðŸŒ¸" , "Bot nhi Shahzada bolo sun k acha lgta ðŸŒ¸" , "Bot gulam ha apka hukam kryn ðŸŒ¸" , "Bot nahi bolo piyar sy janu bola kro na ðŸ¥°" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko ðŸ˜‚" , "Meri jan ek tm hi ho jo dil ma bs gay hoðŸ¥°ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti ðŸ˜‚" , "kesa tera steel dy doungy wrga moo ay ðŸ˜‚" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho ðŸ˜‚" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha ðŸŒ¸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki sunoðŸŒ¸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily ðŸŒ¸" , "Idr ao kesa apka chapair jesa moo lg raha ðŸ˜‚" , "Ajao jaan pizza khilau apko ðŸŒ¸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent ðŸ˜‚" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy ðŸ˜‚" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko bina tharkmar nai hi jana diaðŸ˜ŒðŸ¤§", "Mushkil Toh Hoti Hogi Naa logo se apna Do Chehry chopta howayðŸ™‚", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*â˜¹ï¸", "Parry Hat ma Londy baz nhi hu ðŸ™‚ðŸ¤", "Do Ankho Wali Larkia Bewafa hoti Hn BroðŸ™‚ðŸ’”", "ap wohi ho jo larkiyo ke inbox me Â°hey helloÂ° karta haiðŸ™‚ðŸƒ", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han TumhariðŸ™‚", "Itni Meri Age Ni Jitne Mera Masly Han YawrðŸ’”ðŸ˜", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon gaðŸ˜”ðŸ¤²", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya HaiðŸ’”â˜¹ï¸", "ð‘»ð‘¯ð‘¬ ð‘¯ð‘¬ð‘¨ð‘¹ð‘» ð‘¾ð‘¨ð‘º ð‘´ð‘¨ð‘«ð‘¬ ð‘»ð‘¶ ð‘©ð‘¬ ð‘©ð‘¹ð‘¶ð‘²ð‘¬ð‘µ ðŸ’”ðŸ¥º", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ÛÛŒÚº Link Ø¯ÛŒÙ†Ø§ðŸ™‚", "Mehnat Kro!! Kamyabi Apke Hont Chume GiðŸ™‚ðŸ™ŒðŸ»", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha ðŸ™‚ðŸ¤", "Piyarii piyarii larkiyan message karen JazakAllahðŸŒšâ™¥ï¸ðŸ™Œ", "itna single hun ky khuwab mai bhiÂ  lrki k han krny sy phly ankh khul jatiðŸ™‚", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.ðŸ™ðŸ’¸", "Ù…ÙˆÙ¹Ø± Ø³Ø§Ø¦ÛŒÚ©Ù„ Ú©Ùˆ ØªÛŒØ² Ø¨Ú¾Ú¯Ø§ Ú©Ø± Ù„Ú‘Ú©ÛŒÙˆÚº ÙˆØ§Ù„Û’ Ø±Ú©Ø´Û’ Ú©Û’ Ù¾Ø§Ø³ Ø³Û’ Ú©Ù¹ Ù…Ø§Ø± Ú©Ø± Ú¯Ø²Ø±Ù†Û’ Ø³Û’ Ù„Ú‘Ú©ÛŒØ§Úº Ø§ÛŒÙ…Ù¾Ø±ÛŒØ³ Ù†ÛÛŒÚº ÛÙˆØªÛŒ Ø¨Ù„Ú©Û Ú¯Ø§Ù„ÛŒØ§Úº Ù†Ú©Ø§Ù„ØªÛŒ ÛÛŒÚºðŸ™‚ðŸ’”", "Why you hate me..?? I am not your ex don't Hate me Please", "Ú†Ø§Ø± Ù„ÙØ¸ÙˆÚº Ú©Ø§ ÛÛ’ Ø­ÙØ³Ù† ØªÙ…ÛØ§Ø±Ø§ ðŸ¥ºÙÛŒØ´Ù„, ÙØ§Ø¤Ù†ÚˆÛŒØ´Ù†, Ú©Ø±ÛŒÙ…, Ù…Ø³Ú©Ø§Ø±Ø§ðŸ˜‚ðŸ˜‚ðŸ˜", "Wo kehti thi Ma game khel Rahi hu Or ma ludo smjhta tha", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai ðŸ˜¹ðŸ˜¹ðŸ˜¹", "BeTa TuM SingLe Hi MaR0 GaYðŸ™„ðŸ™‚", "Ù¹Ú¾Ø±Ú©ÛŒÙˆÚº Ú©ÛŒ ÙˆØ¬Û Ø³Û’ Ù„Ú‘Ú©ÛŒØ§Úº Ù…ÛŒØ±Û’ Ø¬ÛŒØ³Û’ Ø´Ø±ÛŒÙ Ø¨ÙˆÙ¹ Ù¾Ø± Ø¨Ú¾ÛŒ Ø¨Ú¾Ø±ÙˆØ³Û Ù†ÛÛŒÚº Ú©Ø±ØªÛŒðŸ¥ºðŸ˜”", "Hai tamanna hamain tumhain CHARSI bnain ðŸ™‚ðŸ¤ ", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai ðŸ˜žâœ¨ðŸ™ŒðŸ¤£", "Ù„Ú‘Ú©ÛŒÙˆÚº 14 Ø§Ú¯Ø³Øª ÙˆØ§Ù„Û’ Ø¯Ù† Ù…Ù†Û Ù¾Ø± Ø¬Ú¾Ù†ÚˆØ§ Ù†Û Ø¨Ù†ÙˆØ§Ù†Ø§ Ù…Ø¬Ú¾Û’ Ù¾Ø±Ú†Ù… Ú†ÙˆÙ…Ù†Û’ Ú©ÛŒ Ø¹Ø§Ø¯Øª ÛÛ’ðŸ¥ðŸ˜ðŸ˜µðŸ˜‚ðŸ˜‚", "Koi muje ittu sha bðŸ¤ðŸ»pyar ni krtaðŸ¥¹"," Billi ko english me kehte hen cat, kia ap kregy mujh se chat? ðŸ™‚ðŸ”ª", "Ma ApNa ghr se ho AP kaha se Ho Bhai or unki bhenyðŸ’”â˜ºï¸", "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much ðŸ™‚ðŸ¥ºä¸€ â€º ðŸ©·ðŸª½", "Piyar main dokha khany sy acha hai mery sath cips Kha loðŸ™‚", "Puri duniya loyal hai Sirf mein hi Dhokebaaz hunðŸ™‚ðŸ–¤", "Lakho milew. par Koi be na tumsa tharki milwa. ðŸ˜•â™¥ï¸", "Begair kisi waja ky mood kharab krna ak art ha or lrkiyan us ma artist hoti hanðŸ˜’ðŸ˜ðŸ˜‚", "â€ŽðŸ™ŒðŸ™‚â€Ø¯Ù„ Ú©Ø±ØªØ§ ÛÛ’Û”ØªÙ…ÛÛŒÚº Ù¾Ø±ÙˆÙ¾ÙˆØ² Ú©Ø± Ø¯ÙˆÚºÂ»ðŸ¥ºðŸ™ˆâ€Ž", "â€œ Saryâ€™w Flirty LoG Add Ho Gayeâ€™w Hai  is group me", "â€œ Ek Mere JeSa Banda Or TuMhari Life Ek Dm JhakkaS ðŸ˜", "Galiyaa deny wali larkiyaa kbhi dhoka nhi deti.", "Mgs he kar do ek bore ho raha. ðŸ™‚", "Relationship Post lagate aaoo<<", "Mein Mgs Krun ya Ap Kar rahi Ho>>ðŸ¥¹ðŸ¤ŒðŸ»", "Wo auratðŸ’ƒ he kia Jo mardaðŸ™… ka sakoon barbad na kraðŸ˜‚ðŸ˜‚ðŸ˜›", "Dil tu krta ha Tum seeda I love youðŸ˜˜ðŸ˜˜ðŸ˜˜ bola do lkn dartaðŸ¥º ho ke Tum galiya b nikltni ati hainðŸ˜‚", "Oye suno kisi ko mat Batana k tera or Mera chkr chal rhaðŸ™…ðŸ™ˆ", "Bivi etni moti b nai chahya ke kambal me jaga na MilaðŸ˜‚ðŸ˜‚   or etni patlii  be nai honi chahahya ke kambal me bivi e na MilaðŸ˜‚ðŸ˜›", "Oye janu Tum har bat Dil pa LG leti ho ðŸ˜• kbi mujh lag ke Dekho acha lgy gaðŸ˜˜ðŸ˜˜â£ï¸", " Qadr krna sekha lo acha log bar bar nai milta or Mera jesy tu bilkul nai Mila gaðŸ˜†ðŸ¤­", " Tang a giya ho lrkiayo seðŸ˜£ðŸ˜© Hyy murshad ab hum antiyan patagyðŸ˜‚ðŸ˜›", "I love you Prha lia na ab izat se reply doðŸ¤­ðŸ˜‚ðŸ˜˜", "larkiyo ko mahal Wala shadi pa na bolain tu Chaat pa khara ko k bolti k oyee dhulha nashiiii ayðŸ˜‚ðŸ˜‚ðŸ˜‚", "Suno Mera Dil araha Tum paðŸ™ˆðŸ™ˆ ana do ya roka doðŸ˜‚ðŸ¤­", " Rona to sabko ataðŸ¥º lkn Jo bulbuly niklna ka talent ðŸ˜‚ðŸ˜‚ lakriyao ke pass hai bsðŸ˜ðŸ™ˆ", "Oye churial ðŸ˜› agr Mera lia time Mila ja tu msg kr lena ðŸ¥ºðŸ˜£", "Phly istamal kren ðŸ§  Phir bakwas krenðŸ—£ï¸", "Mainey Apney AP sy zyada acha insan zindge main nahi dekha >>ðŸ¥¹ðŸ™ˆðŸ˜’", "- Apne gf ki I'd se sab ladko  ko block krne ka sapna  SAPNA  hi reh gya ðŸ™‚", "- k0ii frk n0ii phrtwh ky lrkiiw kw num h0 yw anti kwh _ ðŸ¬â£ï¸ Tum num doðŸ˜‹ðŸ‘ˆ", "ØªÙ„Ø§Ø´ Ø¨Ø±Ø§Ø¦Û’ Ø¨ÛŒÙ„Ù†Ø³ Ú©Ø±ÙˆØ§Ù†Û’ ÙˆØ§Ù„ÛŒðŸ™‚ðŸ™Œ", "Any girls ignore me whyðŸ˜«ðŸ‘ˆAb antio se dosti krni h ðŸ™‚", "Reason why u r still single>>?ðŸ™‚ðŸ¤Œ", "Nice dp Anti Mangni wangni t0h nhi hui apki ðŸ™‚", "Koi Pyari C Ladki INBOX Ajae ðŸŽâ™¥ï¸", "MOVE ON Ka Mtlb Dusri Larki Fasana Nhi Hota Dear ...ðŸ™‚", "Har larki nikammi nhi hoti ðŸ™‚ Lekn ap ho ðŸ™ˆðŸ˜‚", " khubsurt lrkiyan mujh pa line mar skti haiðŸ˜‹ðŸ˜†", "- HAR LARKA BEWAFA NHI HOTA PR MAI HUNðŸ«°ðŸ™‚", "- Sab Samny aO zra CrUsh dhOndni haiiwðŸ¥‚ðŸ™ŒðŸ¤§","> koi pouchay mera tw Kehna mera janu hx ðŸ™†ðŸ˜™", "Mam Har kisi ko psnd ajao paisa thori hu tum ðŸ˜‚ðŸ’€", "Janu hotii to apk sath Pair Dp Lgataâ€¢â—‹|>>ðŸ™‚ðŸ¤§","Mere saath relation matlb break up ka sawal hi paida nahi hota<ðŸ™‚", "Fake dp lga k attitude naw dkhya kro. ðŸ”ª", "â€” Apkii Cute Smiile Ek Diin Merii Barbaadii Ka Reason Banegii >>>ðŸ¥±", "Me bolunga ap pagal ho Apne bolna hai apky pyar me Okay..ðŸ¥ºâ¤ðŸ”ª"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss u") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("ï¸miss u moreðŸ¥°", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("ï¸ Single HaI YaaRðŸ¤§", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Bat suna") || (event.body.toLowerCase() == "Bat suno")) {
     return api.sendMessage("ï¸HaN Ji PyaRy BoloðŸ¥°", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " Asim") || (event.body.toLowerCase() == "asim")) {
     return api.sendMessage("ï¸asim buth wada wala tharki hai har lrki pa lina marta haiðŸ˜¹ðŸ˜¹ðŸ¥µðŸ¤§", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ib") || (event.body.toLowerCase() == "inbox")) {
     return api.sendMessage("ï¸ib ja rha ho to wapis me ata howay ss leta ana chat k sabko dekhnaðŸ¤£ðŸ¤§ðŸ˜¹ðŸ¥µ", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("ï¸TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "Oye")) {
     return api.sendMessage("ï¸haN Ji BoloðŸ™„", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Tania Shaikh ") || (event.body.toLowerCase() == "tania shaikh")) {
     return api.sendMessage("ï¸facebook ki sb tharki urt hai har lrki p tharkmarti hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("ï¸SaDkyâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Bot apni gf ka num dy") || (event.body.toLowerCase() == "bot apni gf ka num dy")) {
     return api.sendMessage("ï¸ab apni behn k num mangaðŸ˜„ mujhse sala sabâ¤ï¸ðŸ˜˜ðŸ˜¹ðŸ˜", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "You from") || (event.body.toLowerCase() == " Ap kdr sa ho")) {
     return api.sendMessage("ï¸ Country Pakistan ðŸ‡µðŸ‡° City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("ï¸HaN Ji ThAnkx â¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Janu kya krty ho ap") || (event.body.toLowerCase() == "janu kya krty ho ap")) {
     return api.sendMessage("ï¸baazi ki besties ko set krta ho", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@nothing") || (event.body.toLowerCase() == "@Noting")) {
     return api.sendMessage("ï¸SiRf  JaNu Haiâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@Shahbaz Ahmad Choudhary miss you") || (event.body.toLowerCase() == "@Shahbaz Ahmad Choudhary")) {
     return api.sendMessage("ï¸MaiN SaDky JaUn Miss you To", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "atif") || (event.body.toLowerCase() == "hussain")) {
     return api.sendMessage("ï¸HaaN HaaN Edr He Hai wo. kisi baji di ib cha nai aâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Shahbaz") || (event.body.toLowerCase() == "shahbaz")) {
     return api.sendMessage("ï¸ Pura world ka handsome mundaðŸ˜", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("ï¸Main ThEk Ap KaSa Hoâ¤ï¸", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("ï¸Tu Dafa HojA. SalyaðŸ¤¬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Many shadi krni ha") || (event.body.toLowerCase() == "many shadi krni ha")) {
     return api.sendMessage("ï¸Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga KonðŸ¤£", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("ï¸ Walikum Assalam â¤ï¸ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "usny mujy love you bola") || (event.body.toLowerCase() == "love you bola usny")) {
     return api.sendMessage("ï¸ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola GaðŸ¤£", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "Ya robot nhi hai")) {
     return api.sendMessage("ï¸NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay ðŸ¤£", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Chumi dy") || (event.body.toLowerCase() == "chumi dy")) {
     return api.sendMessage("ï¸Dafa Hoja Group Sa Tharkiya Na MaR EdrðŸ™„", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kiya")) {
     return api.sendMessage("ï¸To Fir Ya Kia Hai Fir ThArk nhi To ðŸ¤£", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "meri janu hai")) {
     return api.sendMessage("ï¸HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Delete kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("ï¸ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".uns")) {
     return api.sendMessage("ï¸ðŸ¤¨ðŸ¤¨ oye ja phly asy kuch bol e na kra k bad me shram ke marain del krwan beth jata ho", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("ï¸Tu Hatt BayðŸ¤¬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜¹") || (event.body.toLowerCase() == "ðŸ˜‚")) {
     return api.sendMessage("Abby Yawl Hansty H0Y bHi R0o RaHa Hai ðŸ’", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("ï¸ Walikum Assalam â¤ï¸", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("ï¸kuxh Nhi Bs Free ðŸ˜ Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("ï¸Acha Jiâ˜ºï¸", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("ï¸Kia Wo Q HaaNâ˜ºï¸", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("ï¸HaN Ji Or Sunao KiYa Kr RhY ho Aj Kalâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuch nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("ï¸acha KuJ Kr Liya Kro Naw ðŸ¤£", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "assalamualaikam") || (event.body.toLowerCase() == "Assalamualaikam")) {
     return api.sendMessage("ï¸ walaikum asslam â¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("ï¸Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Gf chor ge") || (event.body.toLowerCase() == "gf chor ge")) {
     return api.sendMessage("ï¸Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha ðŸ˜", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaHðŸ˜˜ :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty MuuðŸ˜¹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Mano khan") || (event.body.toLowerCase() == "mano khan")) {
     return api.sendMessage("ï¸mano khan tera bcho k mamu hassan Shahzad haiðŸ˜¹ðŸ˜¹", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krta :))", threadID);
   };
   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Du ga hmm hmm bhains krtii ðŸ¤¨ðŸ˜¤ :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "Good morning")) {
     return api.sendMessage("Good morning Alsee Ab Muhh bhi Dho k Aa zra ðŸ˜¤â˜¹ï¸:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Tharki bot") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Meerab") || (event.body.toLowerCase() == "meerab")) {
     return api.sendMessage("meeru Dil ki achi hai lkn hai to chochiiiðŸ˜ ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi HoiðŸ™„ðŸ˜ :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "han many") || (event.body.toLowerCase() == "Khana kha lia many")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wahðŸ¤§:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "â™¥ï¸") || (event.body.toLowerCase() == "â¤ï¸")) {
     return api.sendMessage("Sadky Jawa Dil Dy ReHy Ho piYar tu Ni kr beHty MujH SyðŸ™†ðŸ™ˆ :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaNâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("Shahbaz ahmad â™¥ï¸ Hai Naw .inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "I need gf") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@Hassan Shahzad") || (event.body.toLowerCase() == "hassan")) {
     return api.sendMessage("Hassan rabiya khan urf mano khan k bhai haiðŸ¥µðŸ¥µðŸ˜¹ðŸ˜¹ :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kroðŸ˜’ðŸ˜Šâ¤ï¸:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "ZiMran") || (event.body.toLowerCase() == "zimran")) {
     return api.sendMessage("ZiMran Mera Sala hai or group k sb se tharki bnda haiðŸ˜ðŸ˜ ZiMran saly sab thek bola na", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "ðŸ™„") || (event.body.toLowerCase() == "ðŸ˜’")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala NiðŸ˜¤ðŸ™„:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "ðŸ‘") || (event.body.toLowerCase() == "ðŸ‘Ž")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kyaðŸ™†ðŸ™„", threadID);
   };

   if ((event.body.toLowerCase() == "bot kutta") || (event.body.toLowerCase() == "bot lanti")) {
     return api.sendMessage("arry  to kutta lanti hain gali na dia kr mekoðŸ˜ ", threadID);
   };
  
   if ((event.body.toLowerCase() == "ðŸ˜‘") || (event.body.toLowerCase() == "ðŸ˜ðŸ˜")) {
     return api.sendMessage("ðŸ˜Yeh Emoji mere boss shahbaz Use Karty HN Tum Mat Kiya Karo ðŸ˜ðŸ™†:))", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤­") || (event.body.toLowerCase() == "ðŸ¤­ðŸ¤­")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRryðŸ¤¨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay ðŸ’– ðŸ¤âœ¨", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜˜") || (event.body.toLowerCase() == "ðŸ¥°")) {
     return api.sendMessage("ï¸HaYee ma Sadky TeRy is Dil walY Muhh Tyâ™¥ï¸ðŸ˜ :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "ðŸ˜¢")) {
     return api.sendMessage("ï¸Allly Ally BabY mEry Hoty Huy Q Ro ReHy HoðŸ¥ºðŸ™†ðŸ™„:)", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤”") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("ï¸Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh SeðŸ™ŠðŸ˜’ :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("ï¸good Night So jao Shabash take care â¤ï¸Allah pak Hamesha Khush rakhy apkoðŸ¥°", threadID);
   };

   if ((event.body.toLowerCase() == "Mani") || (event.body.toLowerCase() == "mani")) {
     return api.sendMessage("ï¸boss busy hai kia kam hai apkoðŸ™†:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Ganda bot") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("ï¸Tu ganda tera pura khandan Ganda ðŸ˜’ðŸ˜:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Shahbaz")) {
     return api.sendMessage("ï¸Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™‚") || (event.body.toLowerCase() == "ðŸ™ƒ")) {
     return api.sendMessage("ï¸aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APnaðŸ™‚â¤ï¸", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ‘€") || (event.body.toLowerCase() == "ðŸ¥º")) {
     return api.sendMessage("ï¸AnKho M piYar Dil ma Ø®Ù…Ø§Ø± PiYar tu ni ho Gyw ksi Sy ðŸ™†", threadID);
   };

   if ((event.body.toLowerCase() == "Bestie") || (event.body.toLowerCase() == "bestie")) {
     return api.sendMessage("ï¸ Usy q bula rahe Ho Ma bhi sath ao kyaðŸ™†ðŸ˜ :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "ðŸ˜’ðŸ˜’") || (event.body.toLowerCase() == "ðŸ™„ðŸ™„")) {
     return api.sendMessage("ï¸Asyy kiS ko DekH raHe Ho ShkaL sy Tu ThaRki lg raHy HoðŸ™†ðŸ˜‘ :)", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜Š") || (event.body.toLowerCase() == "ðŸ˜ŠðŸ˜Š")) {
     return api.sendMessage("ï¸Ally alYy BaBy Asy hi HNsty RaHa kRoðŸ™†ðŸ™Š", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ’”") || (event.body.toLowerCase() == "ðŸ’”ðŸ’”")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNuðŸ¥ºðŸ™†", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Asslamoalaikam ")) {
     return api.sendMessage("walikum Asalam â™¥ï¸", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy hoðŸ¤§", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "ðŸ¤") || (event.body.toLowerCase() == "ðŸ¤ðŸ¤")) {
     return api.sendMessage("ShaKl Sy GhAreeb LGtyHo btaO Tala Qw lgaYa Muh pyðŸ™„", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "ðŸ¤«ðŸ¤«") || (event.body.toLowerCase() == "ðŸ¤«")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,ðŸ¤ðŸ˜’", threadID);
   };

  if ((event.body.toLowerCase() == "Roki") || (event.body.toLowerCase() == "roki")) {
     return api.sendMessage("Rockstar bolya kero ðŸ¤¬ðŸ¤¬ðŸ¤¬", threadID);
   };
  
  if ((event.body.toLowerCase() == "Kesi ho hoori") || (event.body.toLowerCase() == " kesi ho hoori")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? hoori  bss Shahbaz ki haðŸ¤§", threadID);
   };
  
  if ((event.body.toLowerCase() == "ðŸ˜…") || (event.body.toLowerCase() == "ðŸ˜†")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKriaðŸ˜’ðŸ™Ž", threadID);
   };
  
  if ((event.body.toLowerCase() == "lanti") || (event.body.toLowerCase() == "begrat")) {
     return api.sendMessage("tum or tera hona bchay hoga lanti begratðŸ¤§", threadID);
   };
  
  if ((event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜š")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia Ab bs Emoji kiðŸ˜’", threadID);
   };
  
  if ((event.body.toLowerCase() == "Baazi") || (event.body.toLowerCase() == "baazi")) {
     return api.sendMessage("samunder k pani nela baazi to lanti kaminaâ¤ï¸ðŸ™ƒ", threadID);
   };
  
   if ((event.body.toLowerCase() == "ðŸ–¤") || (event.body.toLowerCase() == "ðŸ–¤ðŸ–¤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil ðŸ™‚ðŸ¤ :>>", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤£") || (event.body.toLowerCase() == "ðŸ¤£ðŸ¤£")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho GaNfo ho kYaðŸ™‚)", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜­") || (event.body.toLowerCase() == "ðŸ˜­ðŸ˜­")) {
     return api.sendMessage("KiTna GanDy LooG Hn Rula DeTy Hn KamiNyðŸ¥ºðŸƒ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¥¹") || (event.body.toLowerCase() == "ðŸ¥¹ðŸ¥¹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo ThaRki insaNðŸ™‚", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜ª") || (event.body.toLowerCase() == "ðŸ¥±")) {
     return api.sendMessage("DaFa ho Ja YaHa sy AlseeðŸ˜’ðŸ™„", threadID);
   };

   if ((event.body.toLowerCase() == "Jadugr baazi") || (event.body.toLowerCase() == "jadugr baazi")) {
     return api.sendMessage("jadugrbaaazi 70 janu k bhai jan haiðŸ¥°ðŸ˜¹ðŸ¥µðŸ˜„", threadID);
   };

   if ((event.body.toLowerCase() == "Mahi") || (event.body.toLowerCase() == "mahi")) {
     return api.sendMessage("Facebook ki sb Say Bari haseeen Larki hai mahiðŸ™†ðŸ™‚", threadID);
   };

   if ((event.body.toLowerCase() == "Amina moto") || (event.body.toLowerCase() == "amina moto")) {
     return api.sendMessage("Facebook ki sb se naram dil larki hain motoâ¤ï¸ðŸ™† ", threadID);
   };
  if ((event.body.toLowerCase() == "ðŸ˜‹") || (event.body.toLowerCase() == "ðŸ˜œ")) {
     return api.sendMessage("ï¸AnDar kR isKo wRna Kaat Du ga yE ganDi zaBanðŸ™ŽðŸ¾â€â™‚ï¸", threadID, messageID);
   };

if ((event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜¤")) {
     return api.sendMessage("ï¸ Attitude tu kHusRy dekHtY hN mEri JanðŸ˜ðŸ™ŽðŸ¾â€â™‚ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() =="ðŸ˜ ") || (event.body.toLowerCase() == "ðŸ¤¬")) {
     return api.sendMessage("ï¸CoOl COOl babY GhuSsa HaRm ha ðŸ™†ðŸ˜¶", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜¡") || (event.body.toLowerCase() == "ðŸ˜¡ðŸ˜¡")) {
     return api.sendMessage("ï¸Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz HuðŸ¥ºðŸ–¤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜•") || (event.body.toLowerCase() == "ðŸ«¤")) {
     return api.sendMessage("ï¸Tum Tu kHud Bhi TerY ho ShaKl kHak seedhi ho GiðŸ˜¬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜³") || (event.body.toLowerCase() == "ðŸ˜±")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat haðŸ˜’ðŸ™ŽðŸ¾â€â™‚ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ¤§") || (event.body.toLowerCase() == "ðŸ¤’")) {
     return api.sendMessage("ï¸Jaa So Ja lGta ha BukHar ho GyawðŸ™„", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ¤•") || (event.body.toLowerCase() == "ðŸ˜‡")) {
     return api.sendMessage("ï¸ABby Yawl ki hOya ab tEnuðŸ˜’ðŸ™„", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Hoori") || (event.body.toLowerCase() == "hoori")) {
     return api.sendMessage("ï¸ Facebook ki sb se shoni larki haðŸ˜˜ðŸ¥°", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot ao date pa chalty") || (event.body.toLowerCase() == ".bot ao date pay chalty hain")) {
     return api.sendMessage("ï¸OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait KroðŸ¥°", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == ".bot kaha se ho tum") || (event.body.toLowerCase() == ".bot u from")) {
     return api.sendMessage("ï¸ I'm from Pakistan ðŸ¥° I love My country ðŸ‡µðŸ‡°", threadID, messageID);
   };
   if ((event.body.toLowerCase() == ".sim india k log kasa hain") || (event.body.toLowerCase() == ".sim or india k log")) {
     return api.sendMessage("ï¸Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice HainðŸ¥°", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mano") || (event.body.toLowerCase() == "Mano")) {
     return api.sendMessage("ï¸MaNo ek haseeena ha jo dil pa raj krti ðŸ˜»ðŸ˜˜ðŸ˜ðŸ¤«", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "HAHA") || (event.body.toLowerCase() == "haha")) {
     return api.sendMessage("ï¸pgl hogia hai ka", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr mujy gf chiya") || (event.body.toLowerCase() == " mujy ak gf chiya")) {
     return api.sendMessage("ï¸HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun ðŸ™„", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == ".sim ak gf dund do") || (event.body.toLowerCase() == ".sim ak gf lab da")) {
     return api.sendMessage("ï¸Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Dani") || (event.body.toLowerCase() == "dani")) {
     return api.sendMessage("ï¸hoori k googlaa moooglaa haiðŸ˜˜ðŸ˜˜ðŸ˜‚", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu nraz hai kia kron") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("ï¸To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi ðŸ˜‚ðŸ˜‚", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "Ã—sim ap kia krti ho") || (event.body.toLowerCase() == "Ã—sim yr ap kia krti")) {
     return api.sendMessage("ï¸main kuxh nhi krti Bs WaLiðŸ˜‚", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "@Arooha Chaudhary") || (event.body.toLowerCase() == "arooha chaudhary")) {
     return api.sendMessage("ï¸Ruhay kitni osam hain yarðŸ’–ðŸ‘ˆâ¤ï¸", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim btao") || (event.body.toLowerCase() == "sim or btao kuxh")) {
     return api.sendMessage("ï¸Kia btaUn AbðŸ˜…", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `🫀${name}🖇️ª, ${rand}
      
      ★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛ ᗰᖇ᭄﹅ ᗰᗩᑎᑎI﹅ メꪜ  `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
