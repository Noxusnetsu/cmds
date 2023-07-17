module.exports.config = {
    name: "pre",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "",
    commandCategory: "box chat",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    const axios = require('axios');
    const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/6PArjh2.gif", "https://i.imgur.com/sclek83.gif", "https://i.imgur.com/c7jER2a.gif", "https://i.imgur.com/PAvBbgQ.gif", "https://i.imgur.com/YgMRrJW.gif", "https://i.imgur.com/IpuGKQ9.gif", "https://i.imgur.com/oHDlwaL.gif", "https://i.imgur.com/JlRBMeS.gif", "https://i.imgur.com/zQqhgM4.gif", "https://i.imgur.com/hrJJLu3.gif",
"https://i.postimg.cc/rws0C5J1/Kyoukai-No-Kanata-GIF-Find-Share-on-GIPHY.gif","https://i.postimg.cc/4yXnKcyh/560d52dc-06c6-404a-aaaf-2b58c3278449.gif","https://i.postimg.cc/2565fYJn/Hazard-Boku-No-Hero-Academia-YFBook-Awards2018-Roaring-Sports-Festival-2.gif"]
	var path = __dirname + "/cache/hi.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const PREFIX = config.PREFIX
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Chào cậu ${name} nha♥\n🌸Prefix bot là: » ${PREFIX} «\n【⚜️──⊱ ${gio}⊰──⚜️】\n • Dùng ${PREFIX}menu để xem danh sách lệnh`, attachment: imgP}
    if (event.body.toLowerCase() == "pre"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "prefix"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "daulenh"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "dấu lệnh"){
        return api.sendMessage(msg,event.threadID,event.messageID);}             
        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
  