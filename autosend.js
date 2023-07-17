module.exports.config = {

    name: 'autosend',

    version: '10.02',

    hasPermssion: 2,
    credits: 'DC-Nam',

    description: 'Tự động gửi tin nhắn theo giờ đã cài!',

    commandCategory: 'Hệ thống',

    usages: '[]',

    cooldowns: 3

};

const r = a => a[Math.floor(Math.random()*a.length)],

{

    get

} = require('axios'),

config = [{

        timer: '11:35:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Giữa trưa òi, hong ngủ trưa hả? Lo ngủ đi nhaa♥']

},

{

        timer: '10:35:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Trưa òi, ăn cơm trưa đi nè♥']

},

{

        timer: '9:35:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Sáng giờ mệt rồii, uống miếng nước đi nè']

},



{

        timer: '7:30:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Tới giờ đi làm ròi, chuẩn bị xong hết chưaaaa♥']

},

{

        timer: '6:35:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Ăn sáng để tiếp năng lượng cho ngày dài nào!♥']

},

          {

    timer: '6:00:00 AM',

    message: ['[⏰]➜ {time}\n[💌]➜ Alo Alo, hiện tại đã là 6H yêu cầu mọi người dậy VSCN và chuẩn bị cho một ngày mớiii!♥']

},

{

        timer: '11:30:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ Nè! 11h30 rồi đó, không định đi ngủ hả, Megumynt đi ngủ ây♥']

},

{

        timer: '10:35:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ Trẻ con không nên thức khuya, đi ngủ điii!♥']

},

{

        timer: '9:35:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ Đi ngủ đi nào, ngoan Megumynt thương nhaaa!♥𝗴l']

},

{

        timer: '7:00:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ 7H tối rồi, lo mà ăn tối rồi còn đi chơi nữa kìa !♥']

},

{

        timer: '6:00:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ Cắm cơm nhớ bấm nút nha, nếu không đến ông nội của Megumynt cũng không độ qua kiếp nạn được đâu!😂']

},

{

        timer: '5:10:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ Đến giờ làm việc nhà rồi đoo!♥']

},

{

        timer: '1:05:00 PM',

        message: ['[⏰]➜ {time}\n[💌]➜ 1H chiều rồi, không định dậy để làm việc hay gì đó saoo!♥']

},

{

  timer: '1:00:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ hmmmmmm, tôi lên đây để xem ai chưa ngủ!♥']

},

{

  timer: '2:00:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ 2H sáng, anh gọi em không bắt máy♪!♥𝗴']

},

{

  timer: '4:00:00 AM',

        message: ['[⏰]➜ {time}\n[💌]➜ Giờ này ai còn thức thì cảm xúc vô tin nhắn để báo danh làm trùm nào!♥']
    }];


module.exports.onLoad = o => {

    //if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);

    global.autosendmessage_setinterval = setInterval(async function() {

        if (as = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {

            var msg = r(as.message);

            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://apirandom.dungkonuwu.repl.co/thinh`)).data.data)
msg = {
body: msg, attachment: (await get((await get(`https://randomlinkapi-1.lagghubk.repl.co/02`)).data.url, {

                    responseType: 'stream'

                })).data

            };

            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));

        };

    }, 1000);

};

module.exports.run = () => {};