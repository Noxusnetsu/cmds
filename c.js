module.exports.config = {
	name: "tt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SenProject",
	description: "check tương tác",
	commandCategory: "box chat",
	usages: "checktt",
	cooldowns: 15,
	dependencies: {
		"fs-extra": ""
	}
}

const path = __dirname + '/data/Total-Message/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


 const getRankName = count => {
    return count > 40000 ? 'Ông Nội ∞⭐'
     :count > 34000 ? 'Chiến Tướng ⭐⭐⭐⭐'
      :count > 31000 ? 'Chiến Tướng ⭐⭐⭐'
       :count > 28000 ? 'Chiến Tướng ⭐⭐'
        :count > 25001 ? 'Chiến Tướng ⭐'
         :count > 25000 ? 'Cao Thủ 50⭐'
          :count > 22000 ? 'Cao Thủ 40⭐'
           :count > 18500 ? 'Cao Thủ 30⭐'
            :count > 14940 ? 'Cao Thủ 20⭐'
             :count > 7940 ? 'Cao Thủ 10⭐'
              :count > 4440 ? 'Cao Thủ ⭐⭐⭐'
               :count > 3940 ? 'Cao Thủ ⭐⭐'
                :count > 3480 ? 'Cao Thủ ⭐'
                 :count > 2940 ? 'Tinh Anh V ⭐⭐⭐'
                  :count > 2840 ? 'Tinh Anh V ⭐⭐'
                   :count > 2740 ? 'Tinh Anh V ⭐'
                    :count > 2640 ? 'Tinh Anh IV ⭐⭐⭐'
                     :count > 2540 ? 'Tinh Anh IV ⭐⭐'
                      :count > 2440 ? 'Tinh Anh IV ⭐'
                       :count > 2340 ? 'Tinh Anh III ⭐⭐⭐'
                        :count > 2240 ? 'Tinh Anh III ⭐⭐'
                         :count > 2140 ? 'Tinh Anh III ⭐'
                          :count > 2040 ? 'Tinh Anh II⭐⭐⭐'
                           :count > 1940 ? 'Tinh Anh II ⭐⭐'
                            :count > 1840 ? 'Tinh Anh II ⭐'
                             :count > 1740 ? 'Tinh Anh I ⭐⭐⭐'
                              :count > 1640 ? 'Tinh Anh I ⭐⭐'
                               :count > 1540 ? 'Tinh Anh I ⭐'
                                :count > 1440 ? 'Kim Cương V ⭐⭐⭐'
                                 :count > 1390 ? 'Kim Cương V ⭐⭐'
                                  :count > 1340 ? 'Kim Cương V ⭐'
                                   :count > 1290 ? 'Kim Cương IV ⭐⭐⭐'
                                    :count > 1240 ? 'Kim Cương IV ⭐⭐'
                                     :count > 1190 ? 'Kim Cương IV ⭐'
                                      :count > 1140 ? 'Kim Cương III ⭐⭐⭐'
                                       :count > 1090 ? 'Kim Cương III ⭐⭐'
                                        :count > 1040 ? 'Kim Cương III ⭐'
                                         :count > 990 ? 'Kim Cương II ⭐⭐⭐'
                                          :count > 940 ? 'Kim Cương II ⭐⭐'
                                           :count > 890 ? 'Kim Cương II ⭐'
                                            :count > 850 ? 'Kim Cương I ⭐⭐⭐'
                                             :count > 810 ? 'Kim Cương I ⭐⭐'
                                              :count > 670 ? 'Kim Cương I ⭐'
                                               :count > 630 ? 'Bạch Kim III ⭐⭐⭐'
                                                :count > 600 ? 'Bạch Kim III ⭐⭐'
                                                 :count > 570 ? ' Bạch Kim III ⭐'
                                                  :count > 540 ? 'Bạch Kim II ⭐⭐⭐'
                                                    : count > 510 ? 'Bạch Kim II ⭐⭐'
     : count > 480 ? 'Bạch Kim II ⭐'
     : count > 450? 'Bạch Kim I ⭐⭐⭐'
       : count > 420 ? 'Bạch Kim I ⭐⭐'
        : count > 390 ? 'Bạch Kim I ⭐'
       : count > 360 ? 'Vàng III ⭐⭐⭐'
       : count > 340 ? 'Vàng III ⭐⭐'
        : count > 320 ? 'Vàng III ⭐'
        : count > 300 ? 'Vàng II ⭐⭐⭐'
        : count > 280 ? 'Vàng II ⭐⭐'
        : count > 260 ? 'Vàng II ⭐'
        : count > 240 ? ' Vàng I ⭐⭐⭐'
        : count > 220 ? 'Vàng I ⭐⭐'
        : count > 200 ? 'Vàng I ⭐'
        : count > 180 ? 'Đồng III ⭐⭐⭐'
        : count > 160 ?  'Đồng III ⭐⭐'
        : count > 140 ? 'Đồng III ⭐'
        : count > 120 ? 'Đồng II ⭐⭐⭐'
       : count > 100 ? 'Đồng II ⭐⭐'
       : count > 80 ? 'Đồng II ⭐'
       : count > 60 ? 'Đồng I ⭐⭐⭐'
       : count > 40 ? 'Đồng I ⭐⭐'            
       : count > 20 ? 'Đồng I ⭐'
       : 'Đồng I'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '===CHECKTT===';
        for (const user of storage) {
            msg += `\n${count++}. ${user.name} - ${user.count}`;
        }
    } else if (query == 'rank') {
        msg += 'Lên được rank cao nhất là tài'
    } else if (!query) {
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `${userID == senderID ? '💠Bạn' : storage[rankUser].name} đứng thứ ${rankUser + 1}\n💌Số tin nhắn: ${storage[rankUser].count}\n🔰Rank ${getRankName(storage[rankUser].count)}`;
    }
    api.sendMessage(msg, threadID);
    return;
}
