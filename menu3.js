module.exports.config = {
	name: "menu3",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Hướng dẫn cho người mới",
	usages: "[all/-a] [số trang]",
	commandCategory: "Dành cho người dùng",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "𝐇𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́ 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧";
	else if (num > data.length || num <= 0) msg = "𝐒𝐨̂́ 𝐛𝐚̣𝐧 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\n𝐓𝐞̂𝐧 𝐥𝐞̣̂𝐧𝐡: ${dataAfter}`;
			msg += `\n𝐌𝐨̂ 𝐭𝐚̉: ${command_config.description}`;
			msg += `\n𝐂𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command_config.cooldowns || 5}s`;
			msg += `\n𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${(command_config.hasPermssion == 0) ? "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠" : (command_config.hasPermssion == 1) ? "𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦" : "𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐛𝐨𝐭"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n» 𝐌𝐨𝐝𝐮𝐥𝐞 𝐜𝐨𝐝𝐞 𝐛𝐲 ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `» ${dataAfter.group.toUpperCase()} «\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n    𝐑𝐞𝐩𝐥𝐲 \n╰──────╯ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐥𝐞̣̂𝐧𝐡 𝐯𝐚̀ 𝐜𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/D8svfLV.gif", "https://i.imgur.com/o2vVlZx.gif", "https://i.imgur.com/ZYzoBVT.gif", "https://i.imgur.com/tHlf5Lb.gif", "https://i.imgur.com/ODP0rco.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/PfioSJP.gif", "https://i.imgur.com/D8svfLV.gif", "https://i.imgur.com/o2vVlZx.gif", "https://i.imgur.com/ZYzoBVT.gif", "https://i.imgur.com/tHlf5Lb.gif", "https://i.imgur.com/ODP0rco.gif"]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "╔══════════════════════╗     \n          » 𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐥𝐞̣̂𝐧𝐡 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́ «\n╚══════════════════════╝ \n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 70);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝐬𝐨̂́";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝐒𝐨̂́ 𝐛𝐚̣𝐧 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 100) - 100 : 0;
			bonus = index_start;
			index_end = (index_start + 100 > all_commands.length) ? all_commands.length : index_start + 100;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n𝐓𝐫𝐚𝐧𝐠 ${page_num_input || 1}/${page_num_total}`;
			msg += `\n𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐭𝐫𝐚𝐧𝐠 𝐤𝐡𝐚́𝐜, 𝐝𝐮̀𝐧𝐠: ${prefix}𝐦𝐞𝐧𝐮 [𝐚𝐥𝐥/-𝐚] [𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠]`;
      msg += `\n𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 ${prefix}𝐡𝐞𝐥𝐩 𝐚𝐥𝐥 𝐱𝐞𝐦 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐥𝐞̣̂𝐧𝐡`
			msg += "\n╭──────╮\n     𝐑𝐞𝐩𝐥𝐲 \n╰──────╯𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐥𝐞̣̂𝐧𝐡 𝐯𝐚̀ 𝐜𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝐬𝐨̂́";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝐒𝐨̂́ 𝐛𝐚̣𝐧 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. » ${commandGroup.group.toUpperCase()} `);
		msg += `\n\n𝐓𝐫𝐚𝐧𝐠【${page_num_input || 1}/${page_num_total}】`;
		msg += `\n𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐭𝐫𝐚𝐧𝐠 𝐤𝐡𝐚́𝐜, 𝐝𝐮̀𝐧𝐠: ${prefix}𝐦𝐞𝐧𝐮 [𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠]`;
    msg += `\n𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 ${prefix}𝐦𝐞𝐧𝐮 𝐚𝐥𝐥 𝐱𝐞𝐦 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐥𝐞̣̂𝐧𝐡`
		msg += `\n╭──────╮\n       𝐑𝐞𝐩𝐥𝐲 \n╰──────╯ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ đ𝐞̂̉ 𝐱𝐞𝐦 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐭𝐡𝐞𝐨 𝐩𝐡𝐚̂𝐧 𝐥𝐨𝐚̣𝐢`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}