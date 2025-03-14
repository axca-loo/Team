module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61561619394932") {
		var aid = ["61561619394932"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["🪓_বাল-পাকনারে ডাক দিস না, বাল-পাকনা এখন আকাম-কুকাম করতে বেস্ত আছে__😑🪓"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
