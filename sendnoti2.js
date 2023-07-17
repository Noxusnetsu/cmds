const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini & mod by black",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
	const moment = require("moment-timezone");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `====== [ 𝐋𝐨̛̀𝐢 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 ] ======\n ✿━━🌸${fullTime}🌼━━✿\n📮Nội dung: ${body}\n📎𝐓𝐮̛̀: ${name} \n👥Nhóm: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `====== [ 𝐋𝐨̛̀𝐢 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 ] ======\n ✿━━🌸${fullTime}🌼━━✿\n📮Nội dung: ${body}\n📎𝐓𝐮̛̀: ${name} \n👥Nhóm:${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `==== [𝑷𝒉𝒂̉𝒏 𝒉𝒐̂̀𝒊 𝒕𝒖̛̀ 𝑨𝑫𝑴𝑰𝑵 ] ====\n✿━━🌸${fullTime}🌼━✿\n📎Nội dung: ${body}\n👤Từ: ${name} \n ━━━━━━━━━━━━\n📌𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `==== [𝑷𝒉𝒂̉𝒏 𝒉𝒐̂̀𝒊 𝒕𝒖̛̀ 𝑨𝑫𝑴𝑰𝑵 ] ====\n✿━━🌸${fullTime}🌼━━✿\n📎Nội dung: ${body}\n👤Từ: ${name} \n ━━━━━━━━━━━━\n📌𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
const moment = require("moment-timezone");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM - HH:mm");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `====== [ 𝑻𝒉𝒐̂𝒏𝒈 𝒃𝒂́𝒐 ] ======\n『⏰𝗧𝗶𝗺𝗲』: ${fullTime}\n━━━━━━━━━━━━\n『📮Nội dung』: ${args.join(" ")}\n『👲𝐓𝐮̛̀ 』 ${await Users.getNameUser(senderID)} \n ━━━━━━━━━━━━\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, ` ====== [ 𝑻𝒉𝒐̂𝒏𝒈 𝒃𝒂́𝒐 ] ======\n『⏰𝗧𝗶𝗺𝗲』: ${fullTime}\n━━━━━━━━━━━━\n『📮Nội dung』: ${args.join(" ")}\n『👲𝐓𝐮̛̀ 』 ${await Users.getNameUser(senderID)} \n━━━━━━━━━━━━\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Đã gửi tin nhắn đến ${can} nhóm , Không thể gửi tin nhắn tới ${canNot} nhóm`, threadID);
}