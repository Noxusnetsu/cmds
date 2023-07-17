/*
* Author: DC-Nam
* Message: Có lỗi hoặc thắc mắc gì LH qua fb:
• https://www.facebook.com/levy.nam.2k5
• https://www.facebook.com/duongcongnam02
*/



module.exports.config = {
    name: 'menu2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam mod by quất',
    description: 'Xem danh sách nhóm lệnh, thông tin lệnh',
    commandCategory: 'Tiện Ích',
    usages: '[...name commands|all]',
    cooldowns: 5,
    // seconds
    envConfig: {
        autoUnsend: {
            status: true,
            //
            timeOut: 120 // seconds
        },
        sendAttachments: {
            status: false,
            // bật/tắt gửi kèm tệp
            random: false,
            // tắt random ảnh thì gắn link ảnh bên dưới, bật thì vào home/modules/commands/cache/imagesMenu.json thêm link ảnh
            url: 'https://1.bp.blogspot.com/-dbi0Mj8dgG4/XnC1-STD8LI/AAAAAAAAY3U/ht2Fm6sCgXwSbdI6qck59HA8QVk4IdGzwCLcBGAsYHQ/s1600/Rung-nui-hung-vy-Diembaogi+%283%29.jpg'
        }
    }
};
const {
    autoUnsend = this.config.envConfig.autoUnsend,
    sendAttachments = this.config.envConfig.sendAttachments
} = global.config == undefined ? {}: global.config.menu == undefined ? {}: global.config.menu;
const {
    compareTwoStrings,
    findBestMatch
} = require('string-similarity');
const {
    readFileSync,
    writeFileSync,
    existsSync
} = require('fs-extra');
module.exports.onLoad = function() {
    const dir = __dirname + '/cache/';
    if (!existsSync(dir + 'imagesMenu.json')) writeFileSync(dir + 'imagesMenu.json', '[]');
};
module.exports.run = async function({
    api, event, args
}) {
    const {
        sendMessage: send,
        unsendMessage: un
    } = api;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event;
    if (!global.cmds_menu) global.cmds_menu = {};
    if (!global.cmds_menu[sid]) global.cmds_menu[sid] = {};
    const $ = global.cmds_menu[sid];
    const cmds = global.client.commands;
    if (args.length >= 1) {
        if (typeof cmds.get(args.join(' ')) == 'object') {
            const body = infoCmds(cmds.get(args.join(' ')).config);
            const msg = sendAttachments.status ? {
                body,
                attachment: await images()}: body;
            return send(msg, tid, mid);
        } else {
            if (args[0] == 'all') {
                const data = cmds.values();
                var txt = '',
                count = 0;
                for (const cmd of data) txt += `${++count} → ${cmd.config.name} : ${cmd.config.description}\n`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                send(msg, tid, (a, b) => autoUnsend.status ?setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID): '');
            } else {
                const cmdsValue = cmds.values();
                const arrayCmds= [];
                for (const cmd of cmdsValue) arrayCmds.push(cmd.config.name);
                const similarly = findBestMatch(args.join(' '), arrayCmds);
                if (similarly.bestMatch.rating >= 0) return send(`━━━━━━━━━━━━━━━━n➜ Không có lệnh "${args.join(' ')}"\n➜ Lệnh gần giống là "${similarly.bestMatch.target}"\n━━━━━━━━━━━━━━━━`, tid, mid);
                  /*for (const cmd of cmdsValue) if (compareTwoStrings(args.join(' '), cmd.config.name) >= 0.3) return send(`━━━━━━━━━━━━━━━━\n➜ Không có lệnh "${args.join(' ')}"\n➜ Lệnh gần giống là "${cmd.config.name}"\n━━━━━━━━━━━━━━━━`, tid, mid);*/
            };
        };
    } else {
      const moment = require("moment-timezone");
        const dcm = process.uptime();
  var hieu = Math.floor(dcm / (60 * 60));
  var simp = Math.floor((dcm % (60 * 60)) / 60);
  var rin = Math.floor(dcm % 60);
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
       var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY");
      var minute_out = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var hour_out = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var ss_out = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var hit = 2
        const data = commandsGroup();
        var txt = '📚====『 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧 』====📚\n',
        count = 0;
        for (const {
            commandCategory,
            commandsName
        } of data) txt += `${++count} ➜ ${commandCategory} | 𝗖𝗼́ ${commandsName.length} 𝗟𝗲̣̂𝗻𝗵\n`;
        txt += `📚===『 𝗚𝗵𝗶 𝗖𝗵𝘂́ 』===📚\n→ 𝗛𝗶𝗲̣̂𝗻 𝗰𝗼́ ${global.client.commands.size} 𝗟𝗲̣̂𝗻𝗵\n→ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝟭 đ𝗲̂́𝗻 ${data.length} Đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻\n→ ${prefix(tid)}𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵\n→ 𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${gio} \n→ 𝗧𝗶𝗺𝗲 𝗴𝗼̛̃ ${hour_out}:${parseInt(minute_out) + parseInt(hit)}:${ss_out} ${ngay}\n→ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${global.data.userName.get(event.senderID)}\n→ 𝗟𝗶𝗻𝗸:\nhttps://www.facebook.com/abdussamet.menekse.3/${event.senderID}\n→ 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗮𝗰𝗰:\n→ 𝗧𝗶𝗺𝗲 𝗯𝗼𝘁 𝗼𝗻𝗹: ${hieu} 𝗚𝗶𝗼̛̀ ${simp} 𝗣𝗵𝘂́𝘁 ${rin} 𝗚𝗶𝗮̂𝘆\n→ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀:\n [ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ] \n━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        const msg = sendAttachments.status ? {
            body: txt,
            attachment: await images()}: txt;
        send(msg, tid, (a, b) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: b.messageID,
                author: sid,
                'case': 'infoGr',
                data
            });
            if (autoUnsend.status) $.timeout_menu = setTimeout(v1 => {
                send(`🔰===『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗕𝗼𝘁 』===🔰\n━━━━━━━━━━━━━━━━\n→ Đ𝗮̃ 𝟮 𝗽𝗵𝘂́𝘁 𝘁𝗿𝗼̂𝗶 𝗾𝘂𝗮, 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶, 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗴𝗼̛̃ 𝗺𝗲𝗻𝘂..!`, tid, mid);
                un(v1);
                }, 1000*autoUnsend.timeOut, b.messageID);
        });
    };
};
module.exports.handleReply = async function({
    handleReply: $,
    api,
    event
}) {
    const {
        sendMessage: send,
        unsendMessage: un
    } = api;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid,
        args
    } = event;
    if (sid != $.author) {
        const msg = sendAttachments.status ? {
            body: `Đi ra chỗ khác chơi 🥹`,
            attachment: await images()}: `Đi ra chỗ khác chơi 🥹`;
        return send(msg, tid, mid);
    };
    switch ($.case) {
        case 'infoGr': {
          const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
       var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY");
      var minute_out = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var hour_out = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var ss_out = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var hit = 2
            var data = $.data[(+args[0])-1];
            if (data == undefined) {
              
                const txt = `${args[0]} không nằm trong số thứ tự menu`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                return send(msg, tid, mid);
            };
            clearTimeout(global.cmds_menu[sid].timeout_menu);
            un($.messageID);
            var txt = '📚====『 ' + data.commandCategory + '』====📚\n━━━━━━━━━━━━━━━━\n',
            count = 0;
            for (const name of data.commandsName) txt += `${++count} ➜ ${name}\n`;
            txt += `📚====『 𝗚𝗵𝗶 𝗖𝗵𝘂́ 』====📚\n→ 𝗛𝗶𝗲̣̂𝗻 𝗖𝗼́: ${global.client.commands.size} 𝗟𝗲̣̂𝗻𝗵\n→ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝟭 đ𝗲̂́𝗻 ${data.commandsName.length} Đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻\n→ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${data.commandCategory}\n➩ 𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${gio} \n→ 𝗧𝗶𝗺𝗲 𝗴𝗼̛̃: ${hour_out}:${parseInt(minute_out) + parseInt(hit)}:${ss_out} ${ngay}\n→ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${global.data.userName.get(event.senderID)}\n→ 𝗟𝗶𝗻𝗸:\nhttps://www.facebook.com/abdussamet.menekse.3/${event.senderID}\n━━━━━━━━━━━━━━━━`;
            const msg = sendAttachments.status ? {
                body: txt,
                attachment: await images()}: txt;
            send(msg, tid, (a, b) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: b.messageID,
                    author: sid,
                    'case': 'infoCmds',
                    data: data.commandsName
                });
                if (autoUnsend.status) global.cmds_menu[sid].timeout_gr = setTimeout(v1 => {
                    send(`🔰===『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗕𝗼𝘁 』===🔰\n━━━━━━━━━━━━━━━━\n→ Đ𝗮̃ 𝟮 𝗽𝗵𝘂́𝘁 𝘁𝗿𝗼̂𝗶 𝗾𝘂𝗮, 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶, 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗴𝗼̛̃ 𝗺𝗲𝗻𝘂..!`, tid, mid);
                    un(v1);
                    }, 1000*autoUnsend.timeOut, b.messageID);
            });
        };
            break;
        case 'infoCmds': {
            var data = global.client.commands.get($.data[(+args[0])-1]);
            if (typeof data != 'object') {
                const txt = `${args[0]} không nằm trong số thứ tự menu`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                return send(msg, tid, mid);
            };; const {
                config = {}
            } = data || {};
            clearTimeout(global.cmds_menu[sid].timeout_gr);
            un($.messageID);
            const msg = sendAttachments.status ? {
                body: `🔰===『 ${config.name} 』===🔰\n━━━━━━━━━━━━━━━━\n→ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${config.version}\n→ 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${premssionTxt(config.hasPermssion)}\n→ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${config.credits}\n→ 𝗠𝗼̂ 𝘁𝗮̉: ${config.description}\n→ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${config.commandCategory}\n→ 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴: ${config.usages}\n→ 𝗧𝗶𝗺𝗲 𝗰𝗵𝗼̛̀: ${config.cooldowns} 𝗚𝗶𝗮̂𝘆\n→ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${global.data.userName.get(event.senderID)}\n➩ Link : https://www.facebook.com/abdussamet.menekse.3/${event.senderID}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
                attachment: await images()}: infoCmds(config);
            send(msg, tid, (err, info) => {
              if(err) console.log(err)
              if (autoUnsend.status) global.cmds_menu[sid].timeout_gr = setTimeout(v1 => {
                    send(`🔰===『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗕𝗼𝘁 』===🔰\n━━━━━━━━━━━━━━━━\n→ Đ𝗮̃ 𝟮 𝗽𝗵𝘂́𝘁 𝘁𝗿𝗼̂𝗶 𝗾𝘂𝗮, 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶, 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗴𝗼̛̃ 𝗺𝗲𝗻𝘂..!`, tid, mid);
                    un(v1);
                    }, 1000*autoUnsend.timeOut, info.messageID);
            });
        };
            break;
        default:
            // code
        }
    };
    function commandsGroup() {
        const array = [],
        cmds = global.client.commands.values();
        for (const cmd of cmds) {
            const {
                name,
                commandCategory
            } = cmd.config;
            const find = array.find(i => i.commandCategory == commandCategory)
            !find ? array.push({
                commandCategory,
                commandsName: [name]
            }): find.commandsName.push(name);
        };
        array.sort(sortCompare('commandsName'));
        return array;
    };
    async function images() {
        const data = JSON.parse(readFileSync(__dirname + '/cache/imagesMenu.json'));
        const url = sendAttachments.random ? (data.length == 0 ? sendAttachments.url: data[Math.floor(Math.random()*data.length)]): sendAttachments.url;
        return (await require('axios')({
            url,
            method: 'GET',
            responseType: 'stream',
        })).data;
    };

    function infoCmds(a,event) {
        return `🔰====『 ${a.name} 』====🔰\n━━━━━━━━━━━━━━━━\n➜ Phiên bản : ${a.version}\n→ 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${premssionTxt(a.hasPermssion)}\n→ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${a.credits}\n→ 𝗠𝗼̂ 𝘁𝗮̉: ${a.description}\n→ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${a.commandCategory}\n→ 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴: ${a.usages}\n→ 𝗧𝗶𝗺𝗲 𝗰𝗵𝗼̛̀: ${a.cooldowns} 𝗚𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━`;
    };

    function premssionTxt(a) {
        return a == 0 ? 'Thành Viên': a == 1 ? 'Quản Trị Viên Nhóm': a == 2 ? 'Người Điều Hành Bot': 'Boss Final';
    };
    function prefix(a) {
        const tidData = global.data.threadData.get(a) || {};
        return tidData.PREFIX || global.config.PREFIX;
    };
    function sortCompare(k) {
        return function(a, b) {
            return (a[k].length > b[k].length ? 1: a[k].length < b[k].length ? -1: 0)*-1;
        };
    };