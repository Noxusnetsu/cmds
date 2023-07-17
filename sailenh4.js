module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Thanh Mài",
  description: "ramdom ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? " 𝗧𝗼̂́𝘁 🔵":
  xuly > 10 && xuly < 100 ? " 𝗢̂̉𝗻 Đ𝗶̣𝗻𝗵 🍀" : "𝗗𝗲𝗹𝝰𝝲 🔴";
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'

	const res = await axios.get(`https://api-1.blackbotloapi.repl.co/text/thinh`);
var cadao = res.data.data;
	let attachment = []
  let length = [1];
for (let i = 0; i < length[Math.random()*length.length<<0]; i++)attachment.push((await require('axios').get((await require('axios').get('https://api-1.blackbotloapi.repl.co/images/anime')).data.url, {
    responseType: 'stream',
  })).data);
		
  api.sendMessage({
                                                body: `💓== [🔰 𝑴𝒆𝒈𝒖𝒎𝒚𝒏𝒕🔰 ] ==💓 \n━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${timeNow}\n ⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${vtoan} 𝗴𝗶𝗮̂𝘆 💓\n🧸 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu} 💓 \n◆━━━◆『 ${icon} 』◆━━━◆ \n📈 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗼̛̉ 𝗺𝘂̛́𝗰: ${trinhtrang} \n 🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n⚙️𝗖𝗣𝗨: ${os.cpus().length}\n━━━[ 𝖱𝖾𝖺𝖼𝗍𝗂𝗈𝗇 ]━━━\n[😆] Info Admin\n[👎] Các Lệnh Thường Dùng\n[😢] Info Bot\n[❤] Info Box \n[👍] Xem Api Bot`, attachment,},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
	var so = ["1","2","3","4","6"]
      var stt = so[Math.floor(Math.random() * so.length)]
      var img = []
      for(i=0;i<stt;i++){
        var mk = await axios.get(`https://docs-api.blackbotloapi.repl.co/images/anime `)
        var pth = mk.data.data
        var stream  = (await axios.get(pth,{responseType: "stream"})).data
        img.push(stream)
      }
	if (event.reaction == "😂") {
return api.sendMessage({
body: `no hope:))`,
attachment: img},event.threadID, event.messageID);
}
else if (event.reaction == "👎") {
	const pre= config.PREFIX
return api.sendMessage({
body: `=== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ===
🐰 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐰
━━━[ BOX ]━━━━
🌸  ${pre}menu: Để xem tất cả lệnh bot có
🌸  ${pre}help: để được hướng dẫn các lệnh
💞  ${pre}checktt: Để xem số tin nhắn của bạn(liên box)
🌷  ${pre}box info: Để xem thông tin box
💕 ${pre}check: Để check một số thứ
💝 ${pre}setname + tên: đổi biệt danh cho bạn
━━━[ GAME ]━━━━
🍇 ${pre}tx + tài/xỉu + số tiền: may rủi
🍐 ${pre}money: xem số tiền hiện có
🍌 ${pre}ghep: ghép đôi với người ngẫu nhiên
━━━━━━━━━━━━
`,
attachment: img
},event.threadID, event.messageID);
}
else if (event.reaction == "😢") {
	const admin = config.ADMINBOT

    const ndh = config.NDH

          const namebot = config.BOTNAME

          const { commands } = global.client;

          const PREFIX = config.PREFIX

          const axios = require('axios');

 
return api.sendMessage({
body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====

━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓 `,
attachment: img
},event.threadID, event.messageID);
	}
	else if (event.reaction == "👍") {
return api.sendMessage({
body: `🖥 𝗪𝗲𝗯 𝗮𝗽𝗶 Shaodw: blackbotloapi.repl.co `,
attachment: img
},event.threadID, event.messageID);
}
	else if (event.reaction == "❤") {
		const axios = global.nodemodule["axios"];

const fs = global.nodemodule["fs-extra"];

const { threadID, messageID, userID } = event;

  const moment = require("moment-timezone");

   const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

  async function streamURL(url, mime='jpg') {

    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,

    downloader = require('image-downloader'),

    fse = require('fs-extra');

    await downloader.image({

        url, dest

    });

    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);

    return fse.createReadStream(dest);

};

          let threadInfo = await api.getThreadInfo(event.threadID);

            let img = threadInfo.imageSrc;

            var gendernam = [];

            var gendernu = [];

            var nope = [];

                for (let z in threadInfo.userInfo) {

      var gioitinhone = threadInfo.userInfo[z].gender;

      var nName = threadInfo.userInfo[z].name;

      if (gioitinhone == "MALE") {

        gendernam.push(z + gioitinhone)

      } else if (gioitinhone == "FEMALE") {

        gendernu.push(gioitinhone)

      } else {

        nope.push(nName)

      }

    }; 

                         var nam = gendernam.length;

             var nu = gendernu.length;

             var kxd = nope.length;

         let threadName = threadInfo.threadName;

            let qtv = threadInfo.adminIDs.length;

            let sl = threadInfo.messageCount;

             let icon = threadInfo.emoji;

                      let color = threadInfo.color;

             let sex = threadInfo.approvalMode;

       var pd = sex == false ? "tắt" : sex == true ? "bật" : "\n";

 

                  var i = 1;

                       var listad_msg = '';

  var adminIDs = threadInfo.adminIDs;

	for (let get of adminIDs) {

    const infoUsers = await Users.getInfo(get.id);

    listad_msg += `• ${i++}. 𝗧𝗲̂𝗻: ${infoUsers.name}\n`

} 
return api.sendMessage({
body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${event.threadID}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.participantIDs.length}\n 🧑 𝗡𝗮𝗺: ${nam}\n👧 𝗡𝘂̛̃ : ${nu}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n📚 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${listad_msg}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${sl}\n 📔 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${timeNow}\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 `,
attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
}

}


 