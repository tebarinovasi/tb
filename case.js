/*
• Creadit: Rizal Dev
• Rename, Fix Fitur & Tambah Fitur 
  Dcode-al
Subscribe Chanel dcode-al

Difix Ulang oleh : FallZx Infinity 
*/
require('./lib/menu');
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');
const ytdl = require('@vreden/youtube_scraper');
const { createCanvas, registerFont } = require('canvas');
const chalk = require('chalk');
const Jimp = require('jimp');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const util = require('util');
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);

const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');

const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./lib/antispam');

const { 
	addPremiumUser, 
	checkPremiumUser, 
	expiredPremiumCheck, 
	getAllPremiumUser, 
	getPremiumExpired, 
	getPremiumPosition 
} = require('./lib/premiun');

const { 
	addResponList, 
	delResponList, 
	getDataResponList, 
	isAlreadyResponList, 
	isAlreadyResponListGroup, 
	sendResponList, 
	updateResponList 
} = require('./lib/list');

const { 
	exec, 
	execSync, 
	spawn 
} = require("child_process");

const { 
	toAudio, 
	toPTT, 
	toVideo 
} = require('./lib/converter');

const { 
	smsg, 
	await, 
	clockString, 
	delay, 
	enumGetKey, 
	fetchBuffer, 
	fetchJson, 
	format, 
	formatDate, 
	formatp, 
	generateProfilePicture, 
	getBuffer, 
	getGroupAdmins, 
	getRandom, 
	isUrl, 
	json, 
	logic, 
	msToDate, 
	parseMention, 
	runtime, 
	sleep, 
	sort, 
	toNumber 
} = require('./lib/myfunc');

const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./lib/uploader');

//《《《《《 Gambar 》》》》》》
const thumbmenu = fs.readFileSync ('./data/image/thumbnail2.jpg')
const VidMenu = fs.readFileSync('./data/video/menu.mp4');

const alightScrape = require('./scrape/alightmotion');
const BukaLapak = require('./scrape/bukalapak');
const { ffCh, ffChSkill, ffNews, ffPet, ffPetSkill } = require('./scrape/freefire');
const JavaScript = require('./scrape/Javascript.js')
const gempa = require('./scrape/bmkg');
const GDrive = require('./scrape/drive');
const Kusonime = require('./scrape/kusonime');
const lyrics = require('./scrape/lyrics');
const otakuDesu = require('./scrape/otakudesu');
const pinterest = require('./scrape/pinterest');
const PlayStore = require('./scrape/playstore');
const Liga = require('./scrape/Liga.js')
const Html = require('./scrape/Html.js')
const Felo = require('./scrape/Felo.js');
const Lua = require('./scrape/Lua.js')
const quotesAnime = require('./scrape/quotesAnime');
const remini = require('./scrape/remini');
const Surah = require('./scrape/Surah.js')
const savePin = require('./scrape/savepin');
const saveTube = require('./scrape/savetube');
const scrapeSoundCloud = require('./scrape/soundcloud');
const { tiktokSearchVideo, tiktokDl, tiktokDownloaderVideo } = require('./scrape/tiktok');
const { wallpaper, wikimedia, happymod, ringtone, umma, githubstalk, npmstalk, mlstalk } = require('./scrape/scraper');

const afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
const bad = JSON.parse(fs.readFileSync('./database/badword.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const owner = JSON.parse(fs.readFileSync('./owner.json'));
const contacts = JSON.parse(fs.readFileSync('./database/contacts.json'));

const audionye = JSON.parse(fs.readFileSync('./data/add/vn.json'));
const setiker = JSON.parse(fs.readFileSync('./data/add/sticker.json'));
const imagenye = JSON.parse(fs.readFileSync('./data/add/image.json'));
const videonye = JSON.parse(fs.readFileSync('./data/add/video.json'));

const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const userNumber = JSON.parse(fs.readFileSync('./database/user.json'));

const tebakAngka = {};
const verifyNumber = {};

try {
	let rawData = fs.readFileSync('./src/database.json');
	global.db.data = JSON.parse(rawData) || {};
} catch (err) {
	console.error('⚠️ Gagal memuat database.json, menggunakan struktur default.');
	global.db.data = {};
}

global.db.data = {
	sticker: global.db.data.sticker || {},
	database: global.db.data.database || {},
	game: global.db.data.game || {},
	others: global.db.data.others || {},
	users: global.db.data.users || {},
	chats: global.db.data.chats || {},
	settings: global.db.data.settings || {},
};

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}

module.exports = aldev = async (aldev, m, msg, chatUpdate, store) => {
	try {
		const {
			type,
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
		const body = (m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '')
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa
		const isCmd = body.startsWith(prefix)
		const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1);
		const botNumber = await aldev.decodeJid(aldev.user.id);
		const pushname = m.pushName || "No Name"
		const text = q = args.join(" ");
		const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || '';
		const qmsg = (quoted.msg || quoted);

		const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

		const isGroup = m.key.remoteJid.endsWith('@g.us');
		const groupMetadata = m.isGroup ? await aldev.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
		if (m.isGroup) {
			m.metadata = await aldev.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}

		const clientId = aldev.user.id.split(':')[0];
		const senderbot = m.key.fromMe ? aldev.user.id.split(':')[0] + "@s.whatsapp.net" || aldev.user.id : m.key.participant || m.key.remoteJid;
		const senderId = senderbot.split('@')[0];
		const isBot = clientId.includes(senderId);

		const isAfkOn = checkAfkUser(m.sender, afk)
		const isUser = userNumber.includes(m.sender);
		const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
		const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPremium = isCreator || checkPremiumUser(m.sender, premium);
		expiredPremiumCheck(aldev, m, premium);

		const fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${m.pushName || 'Guest'}*\n🔢 *${m.sender.split('@')[0]}*`
			}
		};

		const fmen = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `📝 *Pesan Menfess Baru!* ✨`
			}
		};

		async function emote(emo) {
			aldev.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
		
		let payment = {"key":{"remoteJid":"0@s.whatsapp.net","fromMe":false},"message":{"requestPaymentMessage":{"currencyCodeIso4217":"USD","amount1000":"99999999999","requestFrom":"0@s.whatsapp.net","noteMessage":{"extendedTextMessage":{"text":`Al Developer`,"contextInfo":{"mentionedJid":[`${m.sender}`]}}},"expiryTimestamp":"0","amount":{"value":"99999999999","offset":1000,"currencyCode":"USD"}}}}
		const cap = 'LEN'
try {
pplu = await aldev.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const len = {
key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
  remoteJid: `status@broadcast`
    } : {})
},
message: {
    "contactMessage": {
  'displayName': `${pushname}`,
  'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;TEBAR-BOT,;;;\nFN: TEBAR-BOT V2\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
  'jpegThumbnail': pplu,
  thumbnail: pplu,
  sendEphemeral: true
    }   
}
  }
		async function reply(teks) {
			if (typereply === 'v1') {
				m.reply(teks);
			} else if (typereply === 'v2') {
				aldev.sendMessage(m.chat, {
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: '',
							previewType: "PHOTO",
							thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
							sourceUrl: wagc
						}
					},
					text: teks
				}, {
					quoted: m
				});
			} else if (typereply === 'v3') {
				aldev.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: '',
							thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			} else if (typereply === 'v4') {
				reply2(teks);
			}
		}
const gkotak = ['https://files.catbox.moe/k7tv3s.jpg','https://files.catbox.moe/k7tv3s.jpg','https://files.catbox.moe/k7tv3s.jpg','https://files.catbox.moe/k7tv3s.jpg','https://files.catbox.moe/k7tv3s.jpg','https://files.catbox.moe/k7tv3s.jpg']

const menu = (teks) => {
aldev.sendMessage(m.chat, { 
  text: teks, 
   contextInfo:{
    "externalAdReply": {
     "title": `TEBAR-BOT`,
     "body": ``,
     "previewType": "PHOTO",
     "thumbnailUrl": 'https://files.catbox.moe/k7tv3s.jpg',
     "sourceUrl": `https://portal.medan.go.id/`
 }}}, { quoted: len })}
 
		async function reply2(teks) {
			const newrep = {
				contextInfo: {
					forwardingScore: 1,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: "TEBAR-BOT",
						body: '',
						thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
						sourceUrl: "https://portal.medan.go.id/"
					}
				},
				text: teks
			};
			return aldev.sendMessage(m.chat, newrep, { quoted: m, });
		}

		async function sendButton(chat, judul, teks, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 1, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: aldev.decodeJid(aldev.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, { 
				quoted: m 
			})

			await aldev.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		const acak = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x);

			// Perbaikan di bagian user
			let user = db.data.users[m.sender] || {}; // Akses dengan aman
			if (typeof user !== 'object') db.data.users[m.sender] = {};
	
			let isPremium = checkPremiumUser(m.sender, premium); // Validasi isPremium
			let limitUser = isPremium ? 1000 : 100;
			let uangUser = user.vip 
				? global.uang.vip 
				: isPremium 
					? global.uang.premium 
					: global.uang.free;

			if (!('vip' in user)) user.vip = false;
			if (!('badword' in user)) user.badword = 0;
			if (!('title' in user)) user.title = '';
			if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
			if (!('nick' in user)) user.nick = aldev.getName(m.sender);
			if (!isPremium) user.premium = false;
			if (!('totalLimit' in user)) user.totalLimit = 0;
			if (!isNumber(user.limit)) user.limit = limitUser;
			if (!('uang' in user)) user.uang = uangUser;
			if (!('lastclaim' in user)) user.lastclaim = new Date().getTime();
			if (!('lastrampok' in user)) user.lastrampok = new Date().getTime();

			db.data.users[m.sender] = user;

			// Perbaikan di bagian chats
			let chats = db.data.chats[m.chat] || {}; // Fallback jika chats undefined
			if (typeof chats !== 'object') db.data.chats[m.chat] = {};

			if (!('badword' in chats)) chats.badword = false;
			if (!('antiforeignnum' in chats)) chats.antiforeignnum = false;
			if (!('antiviewonce' in chats)) chats.antiviewonce = false;
			if (!('antibot' in chats)) chats.antibot = false;
			if (!('antispam' in chats)) chats.antispam = false;
			if (!('antimedia' in chats)) chats.antimedia = false;
			if (!('antiimage' in chats)) chats.antiimage = false;
			if (!('antivideo' in chats)) chats.antivideo = false;
			if (!('antiaudio' in chats)) chats.antiaudio = false;
			if (!('antisticker' in chats)) chats.antisticker = false;
			if (!('anticontact' in chats)) chats.anticontact = false;
			if (!('antilocation' in chats)) chats.antilocation = false;
			if (!('antidocument' in chats)) chats.antidocument = false;
			if (!('antilink' in chats)) chats.antilink = false;
			if (!('antilinkgc' in chats)) chats.antilinkgc = false;
			if (!('mute' in chats)) chats.mute = false;

			db.data.chats[m.chat] = chats;

			// Perbaikan di bagian settings
			let setting = db.data.settings[botNumber] || {};
			if (typeof setting !== 'object') db.data.settings[botNumber] = {};

			if (!('totalhit' in setting)) setting.totalhit = 0;
			if (!('totalError' in setting)) setting.totalError = 0;
			if (!('online' in setting)) setting.online = false;
			if (!('safesearch' in setting)) setting.safesearch = false;
			if (!('autosticker' in setting)) setting.autosticker = false;
			if (!('autodownload' in setting)) setting.autodownload = false;
			if (!('autobio' in setting)) setting.autobio = false;
			if (!('autoread' in setting)) setting.autoread = false;
			if (!('autorecordtype' in setting)) setting.autorecordtype = false;
			if (!('autorecord' in setting)) setting.autorecord = false;
			if (!('autotype' in setting)) setting.autotype = false;
			if (!('autoblocknum' in setting)) setting.autoblocknum = false;
			if (!('onlygc' in setting)) setting.onlygc = false;
			if (!('onlypc' in setting)) setting.onlypc = false;
			if (!('watermark' in setting)) setting.watermark = { packname: global.packname, author: global.author };
			if (!('about' in setting)) setting.about = {
				bot: { nick: aldev.getName(botNumber), alias: botName },
				owner: { nick: aldev.getName(ownerNumber + '@s.whatsapp.net'), alias: ownerNumber }
			};

			db.data.settings[botNumber] = setting;

		} catch (err) {
			console.error('⚠️ Terjadi kesalahan:', err);
		}

		const react = async () => {
			const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
			for (const emoji of emojis) {
				await sleep(80);
				await aldev.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
			}
			await sleep(50);
			const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
			await aldev.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
		};

		async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await aldev.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

			for (let i = 0; i < lod.length; i++) {
				await aldev.sendMessage(m.chat, { text: lod[i], edit: key });
			}
		}

		async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
			const { default: { Image } } = await import('node-webpmux');
			const img = new Image();

			const json = {
				'sticker-pack-id': 'Natsxe',
				'sticker-pack-name': packname,
				'sticker-pack-publisher': author,
				'emojis': categories,
				'is-avatar-sticker': 1,
				...extra
			};

			let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
			let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
			let exif = Buffer.concat([exifAttr, jsonBuffer]);

			exif.writeUIntLE(jsonBuffer.length, 14, 4);

			await img.load(buffer);
			img.exif = exif;

			return await img.save(null);
		}

		function generateRandomPassword(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;

			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;
		}

		function formatBytes(bytes) {
			if (bytes === 0) return '0 Byte';

			const k = 1024;
			const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));

			return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
		}

		function formatDuration(ms) {
			let seconds = Math.floor((ms / 1000) % 60);
			let minutes = Math.floor((ms / (1000 * 60)) % 60);
			let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
			return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
		}

		if (!m.isGroup && !isCreator && db.data.settings[botNumber].onlygc) {
			if (command) {
				return
			}
		}

		if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
			if (command) {
				return
			}
		}

		if (!aldev.public) {
			if (isCreator && !m.key.fromMe) return;
		}

		if (db.data.settings[botNumber].online) {
			if (command) {
				aldev.sendPresenceUpdate('unavailable', m.chat);
			}
		}

		if (db.data.settings[botNumber].autoread) {
			aldev.readMessages([m.key]);
		}

		if (db.data.settings[botNumber].autobio) {
			aldev.updateProfileStatus(`Khalid Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}

		if (db.data.settings[botNumber].autorecordtype) {
			if (command) {
				let mix = ['composing', 'recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				aldev.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autorecord) {
			if (command) {
				let mix = ['recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				aldev.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autotype) {
			if (command) {
				let pos = ['composing'];
				aldev.sendPresenceUpdate(pos, m.chat);
			}
		}

		if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
			return aldev.updateBlockStatus(m.sender, 'block');
		}

		if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) { 
			if (isCreator || isAdmins || !isBotAdmins) return;
			aldev.sendMessage(m.chat, { text: `sorry you will be kicked because the group has activated anti-foreign numbers` }, { quoted: m });
			await sleep(2000);
			await aldev.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
		}

		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.data.users)
			for (let jid of user) {
				const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				db.data.users[jid].limit = limitUser
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		});
		
        const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
        const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
		if (m.message && !m.isNewsletter) {
		console.log(chalk.yellow.bgCyan.bold(botName), color(`⨠ Pesan`, `${randomcolor}`), color(`Dari`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(` :`, `${randomcolor}`), color(`${body}`, `white`))
		}

		if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
			let val = { ...m };
			let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message;
			delete msg[Object.keys(msg)[0]].viewOnce;
			val.message = msg;
			await aldev.sendMessage(m.chat, { forward: val }, { quoted: m });
		}

		if (db.data.chats[m.chat].antibot) {
			if (m.isBaileys && m.fromMe == false) {
				if (m.isAdmin || !isBotAdmins) {			
				} else {
					return await aldev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
		};

		if (db.data.chats[m.chat].antispam) {
			if (m.isGroup && m.message && isFiltered(m.chat)) {
				console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
				return await aldev.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		if (db.data.chats[m.chat].antimedia && isMedia) {
			if (isCreator || isAdmins || !isBotAdmins){
			} else {
				return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
			}
		}

		if (db.data.chats[m.chat].image && m.mtype) {
			if (m.mtype === "imageMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antivideo && m.mtype) {
			if (m.mtype === "videoMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antisticker && m.mtype) {
			if (m.mtype === "stickerMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antiaudio && m.mtype) {
			if (m.mtype === "audioMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antilocation && m.mtype) {
			if (m.mtype === "locationMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antidocument && m.mtype) {
			if (m.mtype === "documentMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].anticontact && m.mtype) {
			if (m.mtype === "contactMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return aldev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].badword) {
			for (let bak of bad) {
				if (budy === bak) {
					let baduser = await db.data.users[m.sender].badword;
					aldev.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.key.id,
							participant: m.key.participant
						}
					});
				}
			}
		}

		if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
			try {
				if (budy.match(`instagram.com`)) {
					await aldev.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`);
					aldev.sendMessage(m.chat, { video: { url: anu.result.media }, caption: `Auto Download ✅` }, { quoted: m });
					await aldev.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`tiktok.com`)) {
					await aldev.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`);
					aldev.sendMessage(m.chat, { video: { url: anu.result.Medium.url }, caption: `Auto Download ✅` }, { quoted: m });
					await aldev.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`facebook.com`)) {
					await aldev.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`);
					aldev.sendMessage(m.chat, { video: { url: anu.result.video_sd }, caption: `Auto Download ✅` }, { quoted: m });
					await aldev.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`youtube.com|youtu.be`)) {
					await aldev.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`);
					aldev.sendMessage(m.chat, { video: { url: anu.result.result }, caption: `` }, { quoted: m });
					await aldev.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				}
			} catch (err) {
				await aldev.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
			}
		}

		if (db.data.settings[botNumber].autosticker) {
			if (m.key.fromMe) return;
			if (m.isGroup) return;

			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await quoted.download();
				aldev.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return;
				let mediac = await quoted.download();
				aldev.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			}
		}

		if (db.data.settings[botNumber].safesearch && command && !m.key.fromMe && !isCreator) {
			if (budy.match(/colmek|coli|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean/i)) {
				reply(`🚫 Ups, kata tersebut dilarang di sini ya, kak! Mari jaga lingkungan chat ini tetap positif dan nyaman untuk semua orang. 😊`);
				return;
			}
		}

		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@6285813708397`)) {
				await aldev.sendMessage(m.chat, { 
					text: `👋 Hai kak! Sepertinya kakak lagi butuh bantuan dari *${ownerName}*, ya?\n\nOwner mungkin lagi sibuk nih, tapi tenang aja, nanti bakal dibales secepatnya! ✨ Sabar yaa~ 😊`
				}, {
					quoted: m
				});
			}
		};

		if (db.data.chats[m.chat].antilinkgc) {
			if (budy.match(`chat.whatsapp.com`)) {
				if (isAdmins) return
				if (m.key.fromMe) return
				if (isCreator) return

				await aldev.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (db.data.chats[m.chat].antilink) {
			if (budy.match('http') && budy.match('https')) {
				if (isAdmins) return
				if (m.key.fromMe) return
				if (isCreator) return

				await aldev.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (m.isGroup) {
			if (db.data.chats[m.chat].mute && !isCreator) {
				return
			}
		}

		const feature = () => {
			var mytext = fs.readFileSync("./case.js").toString();
			var numUpper = (mytext.match(/case '/g) || []).length;
			return numUpper;
		}

		for (let zeeone of audionye) {
			if (budy === zeeone) {
				let audiobuffy = fs.readFileSync(`./data/vn/${zeeone}.mp3`);
				aldev.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
			}
		}

		for (let zeeone of setiker) {
			if (budy === zeeone) {
				let stickerbuffy = fs.readFileSync(`./data/sticker/${zeeone}.webp`);
				aldev.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m });
			}
		}

		for (let zeeone of imagenye) {
			if (budy === zeeone) {
				let imagebuffy = fs.readFileSync(`./data/image/${zeeone}.jpg`);
				aldev.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
			}
		}

		for (let zeeone of videonye) {
			if (budy === zeeone) {
				let videobuffy = fs.readFileSync(`./data/video/${zeeone}.mp4`);
				aldev.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
			}
		}

		if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
			var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list);
			if (get_data_respon.isImage === false) {
				aldev.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, { quoted: m });
			} else {
				aldev.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, { quoted: m });
			}
		}

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
			let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
			let { text, mentionedJid } = hash;
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: aldev.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			});
			messages.key.fromMe = areJidsSameUser(m.sender, aldev.user.id);
			messages.key.id = m.key.id;
			messages.pushName = m.pushName;
			if (m.isGroup) messages.participant = m.sender;
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			};
			aldev.ev.emit('messages.upsert', msg);
		}

		if (m.mtype === "interactiveResponseMessage") {
			let msg = m.message[m.mtype]|| m.msg
			if (msg.nativeFlowResponseMessage&& !m.isBot) { 
				let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
				if (id) {
					let emit_msg = { 
						key : { ...m.key },
						message: { extendedTextMessage : { text : id } },
						pushName : m.pushName,
						messageTimestamp: m.messageTimestamp || 754785898978
					}
					return aldev.ev.emit("messages.upsert" , {messages : [ emit_msg ], type : "notify"})
				}
			}
		}

		if (m.message && !isUser) {
			userNumber.push(m.sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(userNumber, null, 2))
		}

		if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (checkAfkUser(ment, afk)) {
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					reply(
						`Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n` +
						`*Alasan:* ${getReason2}\n` +
						`*Udah sejak:* ${anu2.hours} Jam, ${anu2.minutes} Menit, ${anu2.seconds} Detik`
					)
				}
			}

			if (checkAfkUser(m.sender, afk)) {
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
				aldev.sendTextWithMentions(
					m.chat, 
					`Yeay! @${m.sender.split('@')[0]} udah balik dari AFK nih~ 🥳\n\n` +
					`*Alasan:* ${getReason}\n` +
					`*Selama:* ${anu.hours} Jam, ${anu.minutes} Menit, ${anu.seconds} Detik`, 
					m
				)
			}
		}

	aldev.autosholat = aldev.autosholat ? aldev.autosholat : {}
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? aldev.user.jid : m.sender
		let id = m.chat
		if (!(id in aldev.autosholat)) {
			let jadwalSholat = {
				Subuh: "04:31",
				Dzuhur: "11:45",
				Ashar: "15:06",
				Maghrib: "17:39",
				Isha: "19:09",
			}
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					if (sholat === "Subuh") {
						thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
					} else if (sholat === "Dzuhur") {
						thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
					} else if (sholat === "Ashar") {
						thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
					} else if (sholat === "Maghrib") {
						thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
					} else if (sholat === "Isha") {
						thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
					} else {
						thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
					}
					aldev.autosholat[id] = [
						aldev.sendMessage(m.chat, {
							audio: {
								url: "https://files.catbox.moe/9te8lp.mp3"
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								externalAdReply: {
									title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
									body: "untuk wilayah Semarang dan sekitarnya",
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: thumbislam,
									sourceUrl: "-"
								}
							}
						}, {
							quoted: m
						}),
						setTimeout(() => {
							delete aldev.autosholat[id]
						}, 57000)
					]
				}
			}
		}


async function JadwalSholat(city) {
    try {
      const url = `https://umrotix.com/jadwal-sholat/${encodeURIComponent(city)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const result = {};
  
      // Mendapatkan nama kota
      result.kota = $("h1.text-center")
        .first()
        .text()
        .replace("Jadwal Sholat ", "")
        .trim();
  
      // Mendapatkan jadwal sholat dan tanggal
      $("body > div > div.main-wrapper.scrollspy-action > div:nth-child(3)").each(function (a, b) {
        result.tanggal = $(b).find("> div:nth-child(2)").text();
  
        result.jadwal = {
          imsak: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)").text(),
          subuh: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)").text(),
          dzuhur: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)").text(),
          ashar: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)").text(),
          maghrib: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)").text(),
          isyak: $(b).find("> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)").text(),
        };
      });
  
      return JSON.stringify(result);
    } catch (error) {
      console.error('Error:', error);
      return "⚠️ Terjadi kesalahan saat mengambil jadwal sholat.";
    }
  }
  
		switch (command) {
		case 'liga': {
  if (!q) return reply('☘️ *Masukkan Nama Liga*');
  const liga = q.toLowerCase();
  try {
    const result = await Liga(liga);
    if (Array.isArray(result) && result.length > 0) {
let teks = '';
result.forEach((team) => {
  teks += `🏆 *Peringkat ${team.rank} : ${team.name}*\n`;
  teks += `\n📑 *Statistik :*\n*Pertandingan : ${team.match}*\n*Point : ${team.point}*\n*Menang : ${team.win}*\n*Seri : ${team.draw}*\n*Kalah : ${team.lose}*\n*Jumlah Goal : ${team.goals}*\n*GD : ${team.gd}*\n\n==============================\n\n`;
});
reply(teks);
    } else {
reply('⚠️ *Data Tidak Ditemukan!*');
    }
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
			case 'speed': case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n- *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n- *OS:* ${osInfo}\n- *IP Address:* ${nou.os.ip()}\n- *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n- *Total:* ${formatp(os.totalmem())}\n- *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n- *Total:* ${storage.totalGb} GB\n- *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n- *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n- *Model:* ${cpus[0].model.trim()}\n- *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\nTetap semangat ya kak! Mora selalu siap membantu 🥰`;
					await aldev.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							forwardingScore: 1,
							isForwarded: true,
							externalAdReply: {
								title: ucapanWaktu,
								thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, { quoted: m });
				} catch (err) {
					console.error(err);
				}
			}
			break;

			case 'addbadword': 
			case 'addbd': {
				if (!isCreator) return reply(mess.owner);
				if (!groupAdmins) return reply(mess.admin);
				if (args.length < 1) return reply(`📝 *Kirim perintah:* ${prefix}addbadword [kata kasar]\nContoh: ${prefix}addbadword asshole`);
				bad.push(q);
				fs.writeFileSync('./database/badword.json', JSON.stringify(bad));
				reply('✅ *Kata kasar berhasil ditambahkan ke daftar!*');
			}
			break;

			case 'delbadword': 
			case 'deldb': {
				if (!isCreator) return reply(mess.owner);
				if (!groupAdmins) return reply(mess.admin);
				if (args.length < 1) return reply(`📝 *Kirim perintah:* ${prefix}delbadword [kata kasar]\nContoh: ${prefix}delbadword asshole`);
				bad.splice(q);
				fs.writeFileSync('./database/badword.json', JSON.stringify(bad));
				reply('✅ *Kata kasar berhasil dihapus dari daftar!*');
			}
			break;

			case 'resetuser':
			case 'resetdbuser': {
				if (!isCreator) return reply(mess.owner);
				let totalusernya = db.data.users[0];
				reply(`Berhasil menghapus ${totalusernya} pengguna dari database.`);
				db.data.users = [];
			}
			break;

			case 'resethit':
			case 'resettotalhit': {
				if (!isCreator) return reply(mess.owner);
				global.db.data.settings[botNumber].totalhit = 0;
				reply(mess.done);
			}
			break;

			case 'setreply': {
				if (!isCreator) return reply(mess.owner);
	
				if (!text) {
					return reply(
						`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
					);
				}

				if (text.startsWith('v')) {
					typereply = text; // Set tipe reply
					return reply(mess.done); // Berikan konfirmasi sukses
				}

				// Jika input tidak valid
				return reply(
					`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
				);
			}
			break;

			case 'statustext':
			case 'upswtext':
			case 'upswteks': {
				if (!isCreator) return reply(mess.owner);
				if (!q) return reply('Teksnya mana?');
				await aldev.sendMessage('status@broadcast', { 
					text: q 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(global.db.data.users) 
				});
				reply('Sukses kirim status teks!');
			}
			break;

			case 'statusvideo':
			case 'upswvideo': {
				if (!isCreator) return reply(mess.owner); // Cek apakah pengguna adalah creator

				if (/video/.test(mime)) {
					// Unduh video dari pesan yang di-reply
					var videosw = await aldev.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
					`🎥 *Tipe Media:* ${mediaType}\n` +
					`⏰ *Waktu Dikirim:* ${sendTime}\n` +
					`👤 *Dikirim oleh:* ${sender}`;

					// Kirim video ke status WhatsApp
					await aldev.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(global.db.data.users)
					});

					await reply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				} else {
					reply('⚠️ Tolong reply ke video dulu ya, Kak! 🎥');
				}
			}
			break;

			case 'statusimg':
			case 'statusimage':
			case 'upswimg': {
				if (!isCreator) return reply(mess.owner); // Cek apakah pengguna adalah creator

				if (/image/.test(mime)) {
					// Unduh gambar dari pesan yang di-reply
					var imagesw = await aldev.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
						`🖼️ *Tipe Media:* ${mediaType}\n` +
						`⏰ *Waktu Dikirim:* ${sendTime}\n` +
						`👤 *Dikirim oleh:* ${sender}`;

					// Kirim gambar ke status WhatsApp
					await aldev.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(global.db.data.users)
					});

					await reply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				} else {
					reply('⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️');
				}
			}
			break;

			case 'statusaudio':
			case 'upswaudio': {
				if (!isCreator) return reply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await aldev.downloadAndSaveMediaMessage(quoted);
					await aldev.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(global.db.data.users)
					});
					await reply('Sukses kirim status audio!');
				} else {
					reply('Reply audio dulu, ya!');
				}
			}
			break;

			case 'upchannel': {
				if (!isCreator) return reply(mess.owner)
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Mora! ✨"
					if (/image/.test(mime)) {
						aldev.sendMessage('120363363009408737@newsletter', {
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						aldev.sendMessage('120363363009408737@newsletter', {
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						aldev.sendMessage('120363363009408737@newsletter', {
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						aldev.sendMessage('120363363009408737@newsletter', {
							text: text ? text : defaultCaption
						})
						reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... Mora gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break

			case 'upsaluran': {
				if (!isCreator) return reply(mess.owner)
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Mora! ✨"
					if (/image/.test(mime)) {
						aldev.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						aldev.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						aldev.sendMessage(saluran, {
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						aldev.sendMessage(saluran, {
							text: text ? text : defaultCaption
						})
						reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... Mora gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break

			case 'upsaluran2': {
				if (!isCreator) return reply(mess.owner)
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Mora! ✨"
					const buttons = [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About 👤"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact 📞"
							}
						}
					]
					if (/image/.test(mime)) {
						aldev.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						aldev.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/text/.test(mime) || text) {
						aldev.sendMessage(saluran, {
							text: text ? text : defaultCaption,
							footer: botName,
							buttons: buttons,
							viewOnce: true
						})
						reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... Mora gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break

			case 'setimgmenu':
			case 'sim': {
				if (!isCreator) return reply(mess.owner);
				let media = await aldev.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './data/imageMoraAI.png');
				fs.unlinkSync(media);
				reply('Gambar menu berhasil diset! 🎨');
			}
			break;

			case 'setvidmenu':
			case 'svm': 
			case 'setvgifmenu':
			case 'sgm': {
				if (!isCreator) return reply(mess.owner);
				let media = await aldev.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './data/video/vidmenu.mp4');
				fs.unlinkSync(media);
				reply('Video menu berhasil diset! 🎬');
			}
			break;

			case 'addtitle': {
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Usage: ${prefix + command} number|title`);
				nonya = text.split('|')[0];
				titlenya = text.split('|')[1];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = titlenya;
				await reply('Title berhasil ditambahkan! 🎉');
			}
			break;

			case 'deltitle': {
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Usage: ${prefix + command} number`);
				nonya = text.split(',')[0];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = '';
				await reply('Title berhasil dihapus! ✨');
			}
			break;

			case 'addlimit':
			case 'givelimit': {
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				let oo = `${usernya}@s.whatsapp.net`;
				db.data.users[oo].limit += limitnya;
				reply('Limit berhasil ditambahkan! 🎯');
			}
			break;

			case 'dellimit': {
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return reply(`Limit dia kurang dari ${limitnya}`);
				db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya;
				reply('Limit berhasil dikurangi! ✂️');
			}
			break;

			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return reply(mess.owner)
				if (!text) return reply(`Example:\n${prefix + command} @tag|time(s/m/h/d)`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await aldev.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return reply('This number is not registered on WhatsApp!')
				if (teks2) {
					addPremiumUser(nmrnya, teks2, premium);
					reply(`Success ${command} @${nmrnya.split('@')[0]} During ${teks2}`)
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium
				} else {
					reply(`Enter the time!\nExample: ${prefix + command} @tag|time`)
				}
			}
			break

			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return reply(mess.owner)
				if (!text) return reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (checkPremiumUser(nmrnya, premium)) {
					premium.splice(getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free
				} else {
					reply(`User @${nmrnya.split('@')[0]} Not Premium❗`)
				}
			}
			break

			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += ` • *Number*: @${userprem.id.split('@')[0]}\n • *Limit*: ${db.data.users[userprem.id].limit}\n • *Money*: ${db.data.users[userprem.id].uang.toLocaleString('id-ID')}\n • *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				reply(txt)
			}
			break

			case 'addowner': {
				if (!isCreator) return reply(mess.owner);
				if (!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				let ceknye = await aldev.onWhatsApp(bnnd);
				if (ceknye.length == 0) return reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				owner.push(bnnd);
				fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
				reply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
			}
			break;

			case 'delowner': {
				if (!isCreator) return reply(mess.owner);
				if (!args[0]) return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				ya = q.split("|")[0].replace(/[^0-9]/g, '');
				unp = owner.indexOf(ya);
				owner.splice(unp, 1);
				fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
				reply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
			}
			break;

			case 'listowner': {
				let teks = '┌──⭓「 *List Owner* 」\n│\n';
				for (let x of owner) {
					teks += `│⭔ ${x}\n`;
				}
				teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
				reply(teks);
			}
			break;

			case 'delsession':
			case 'clearsession': {
				if (!isCreator) return reply(mess.owner);
				fs.readdir("./session", async function(err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return reply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
						item.startsWith("m.sender-key") || item.startsWith("session-") || item.startsWith("app-state")
					);
					console.log(filteredArray.length);
					let teks = `Ditemukan ${filteredArray.length} file sampah nih\n\n`;
					if (filteredArray.length == 0) return reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`;
					});
					reply(teks);
					await sleep(2000);
					reply("Mau hapus file sampahnya... Tunggu yaa...");
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${userName}/${file}`);
					});
					await sleep(2000);
					reply("Berhasil hapus semua file sampah di folder session! 🎉");
				});
			}
			break;

			case 'join': {
				try {
					if (!isCreator) return reply(mess.owner);
					if (!text) return reply('Masukkan Link Grup yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link-nya invalid nih!');
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					aldev.groupAcceptInvite(result);
					await reply(`Sudah gabung ke grup! 🎉`);
				} catch {
					reply('Gagal gabung ke grup, coba lagi nanti!');
				}
			}
			break;

			case 'getgc':
			case 'getgcid': {
				if (!text) return reply('Enter Group Link!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return reply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await aldev.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					console.log(anu);
					let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					reply(par);
				}).catch((res) => {
					if (res.data == 406) return reply('Group Not Found❗');
					if (res.data == 410) return reply('Group URL Has Been Reset❗');
				});
			}
			break

			case 'getch':
			case 'getchid': {
				if (!text) return reply(`Ayo Kak, kirim perintah *${prefix + command}* URL saluran biar aku bantu! 😊`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return reply(`Hmm, sepertinya linknya nggak valid, Kak! Coba lagi ya! 😣`);
				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await aldev.newsletterMetadata("invite", result);
					let teks = `*Nama :* ${data.name}\n*ID :* ${data.id}\n*Status :* ${data.state}\n*Dibuat :* ${formatDate(data.creation_time)}\n*Subscribers :* ${data.subscribers}\n*Verification :* ${data.verification}\n*Reaction Codes :* ${data.reaction_codes}\n*Description :*\n${data.description}\n`;
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"Salin ID\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
					}];		
					aldev.sendButton(m.chat, button, teks, botName, m);
				} catch (error) {
					m.reply(`Aduh, sepertinya ada masalah nih, Kak! 😥 Coba cek lagi link channel-nya, ya?`);
				}
			}
			break;

			case 'getsession': {
				if (!isCreator) return reply(mess.owner);
				reply('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
				let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
				aldev.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdatabase': {
				if (!isCreator) return reply(mess.owner);
				reply('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
				let sesi = fs.readFileSync('./src/database.json');
				aldev.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'database.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdbuser': {
				if (!isCreator) return reply(mess.owner);
				reply('Tunggu sebentar yaa, aku lagi ambil file database usermu nih');
				let sesi = fs.readFileSync('./database/user.json');
				aldev.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'user.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'repo': case 'repository': {
				if (!text || !text.includes('/')) {
					return reply(`Kakak bisa pakai format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} WhiskeySockets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try {
					const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (response.status === 200) {
						const repoData = response.data
						const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*URL :* ${repoData.html_url}\n`;
						reply(formattedInfo);
					} else {
						await reply(`Unable to fetch repository information`)
					}
				} catch (error) {
					console.error(error)
					await reply(`Repository currently not available `)
				}
			}
			break

			case 'myip':
			case 'ipbot':
				if (!isCreator) return reply(mess.owner);
				var http = require('http');
				http.get({
					'host': 'api.ipify.org',
					'port': 80,
					'path': '/'
				}, function(resp) {
					resp.on('data', function(ip) {
						reply("🔎 Oii, alamat IP publik aku nih: " + ip);
					})
				});
			break;

			case 'request':
			case 'laporkepling':
			case 'reportbug': {
				if (!text) return reply(`Mohon ketik seperti contoh: ${prefix + command} selamat malam pak, izin lapor sedang terjadi tawuran di jalan sm raja didepan ramayana`);
				textt = `*| LAPORAN DARI WARGA |*`;
				teks1 = `\n\n*Nomor Pelapor* : @${m.sender.split("@")[0]}\n*Laporan* : ${text}`;
				teks2 = `\n\n*Terimakasih ${pushname}, laporan anda sudah dikirim ke pihak kelurahan, terimakasih sudah melapor...*`;
				for (let i of owner) {
					aldev.sendMessage(i + "@s.whatsapp.net", {
						text: textt + teks1,
						mentions: [m.sender],
					}, {
						quoted: m,
					});
				}
				aldev.sendMessage(m.chat, {
					text: textt + teks2 + teks1,
					mentions: [m.sender],
				}, {
					quoted: m,
				});
			}
			break;

			case 'shutdown':
				if (!isCreator) return reply(mess.owner);
				reply(`Aduh, mau restart nih, bentar ya!`);
				await sleep(3000);
				process.exit();
			break;
			
            case 'lapor': {
                if (!text) return reply(`Mohon melapor dengan format yang benar!\n\nExample : ${prefix + command} izin lapor pak sedang terjadi keributan disekitar jalan armada`)
                let getGroups = await aldev.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `\n\n*Nomor Pelapor* : @${m.sender.split("@")[0]}\n*Laporan* : ${text}\n\n`;
                    aldev.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botName,
                                thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Laporan anda telah berhasil dikirim, mohon menunggu tanggapan.`)
            }
            break;
            
			case 'autoread':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autoread = true;
					reply(`Yay! Auto-read berhasil diubah ke ${q}`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autoread = false;
					reply(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
			break;

			case 'unavailable':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].online = true;
					reply(`Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].online = false;
					reply(`Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎`);
				}
			break;

			case 'autorecordtype':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autorecordtype = true;
					reply(`Auto-record typing berhasil diubah ke ${q}!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autorecordtype = false;
					reply(`Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!`);
				}
			break;

			case 'autorecord':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autorecord = true;
					reply(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autorecord = false;
					reply(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
				}
			break;

			case 'autotype':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autotype = true;
					reply(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autotype = false;
					reply(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
				}
			break;

			case 'autobio':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autobio = true;
					reply(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autobio = false;
					reply(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
				}
			break;

			case 'autosticker':
			case 'autostickergc':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autosticker = true;
					reply(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autosticker = false;
					reply(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
				}
			break;

			case 'safesearch': {
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`🛡️ Contoh penggunaan:\n${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].safesearch = true;
					reply(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
				} else if (q === 'off') {
					db.data.settings[botNumber].safesearch = false;
					reply(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten tidak aktif untuk saat ini.`);
				} else {
					reply(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
				}
			}
			break;

			case 'autodownload':
			case 'autodl':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autodownload = true;
					reply(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autodownload = false;
					reply(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
				}
			break;

			case 'autoblock':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autoblocknum = true;
					reply(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autoblocknum = false;
					reply(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
				}
			break;

			case 'onlygroup':
			case 'onlygc':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlygc = true;
					reply(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlygc = false;
					reply(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
				}
			break;

			case 'onlyprivatechat':
			case 'onlypc':
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlypc = true;
					reply(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlypc = false;
					reply(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
				}
			break;

			case 'self':
				if (!isCreator) return reply(mess.owner);
				aldev.public = false;
				reply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;

			case 'public':
				if (!isCreator) return reply(mess.owner);
				aldev.public = true;
				reply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
			break;

			case 'setexif':
			case 'setwm':
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				reply(`Yeay! Exif berhasil diubah! 🎉\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
			break;

			case 'setprefix':
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Contoh: ${prefix + command} packname|author`);
				global.prefa = text;
				reply(`Prefix berhasil diubah menjadi ${text} ✨`);
			break;

			case 'setautoblock':
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Contoh: ${prefix + command} packname|author`);
				global.autoblocknumber = text;
				reply(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
			break;

			case 'setantiforeign':
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Contoh: ${prefix + command} packname|author`);
				global.antiforeignnumber = text;
				reply(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
			break;

			case 'leave':
			case 'out':
				if (!isCreator) return reply(mess.owner);
				if (!m.isGroup) return reply(mess.group);
				reply('Selamat tinggal, semuanya 🥺');
				await aldev.groupLeave(m.chat);
			break;

			case 'pushcontact': {
				if (!isCreator) return reply(mess.owner);
				if (!m.isGroup) return reply(mess.private);
				var name = text.split('/')[0];
				var chet = text.split('/')[1];
				if (!name) return reply(`Contoh: ${prefix + command} nama/pesan`);
				if (!chet) return reply(`Contoh: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await aldev.groupMetadata(m.chat)
				if (push.participants.length > 300) return reply('Batas member maksimal: *300*')
				await reply(mess.wait);
				for (let a of push.participants) {
					const repf = await aldev.sendMessage(a.id, { contacts: kontak })
					aldev.sendMessage(a.id, { text: chet }, { quoted: repf })
					await sleep(1000);
				}
				await reply(mess.done);
			}
			break;

			case 'getcontact': case 'getcon': {
				if (!m.isGroup) return reply(mess.group); // Hanya berlaku untuk grup
				if (!(m.isAdmin || isCreator)) return reply(mess.owner); // Hanya admin atau pemilik yang bisa
				bigpp = await aldev.sendMessage(m.chat, {
					text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
				}, {quoted: m, ephemeralExpiration: 86400});
				await sleep(1000);
				aldev.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
			}
			break;

			case 'savecontact': case 'svcontact': {
				if (!m.isGroup) return reply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return reply(mess.owner); // Hanya admin atau pemilik yang bisa
				let cmiggc = await aldev.groupMetadata(m.chat);
				let orgiggc = participants.map(a => a.id);
				vcard = '';
				noPort = 0;
				for (let a of cmiggc.participants) {
					vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
				}
				let nmfilect = './contacts.vcf';
				reply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
				require('fs').writeFileSync(nmfilect, vcard.trim());
				await sleep(2000);
				aldev.sendMessage(m.chat, {
					document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
				}, {ephemeralExpiration: 86400, quoted: m});
				require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
			}
			break;

			case 'sendcontact': case 'sencontact': {
				if (!m.isGroup) return reply(mess.group); // Hanya untuk grup
				if (!m.mentionedJid[0]) return reply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
				let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let snContact = {
					displayName: "Contact", contacts: [{
						displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				aldev.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
			}
			break;

			case 'contacttag': case 'contag': {
				if (!m.isGroup) return reply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return reply(mess.owner); // Hanya admin atau pemilik yang bisa
				if (!m.mentionedJid[0]) return reply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
				let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let sngContact = {
					displayName: "Contact", contacts: [{
						displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				aldev.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
			}
			break;

			case 'sendlocation': case 'sendloc': {
				let latitude = -6.175110;	// Latitude (contoh Jakarta)
				let longitude = 106.865039; // Longitude (contoh Jakarta)
				let caption = "Lokasi ini berada di Jakarta"; // Deskripsi opsional
				let whatsappNumber = m.chat; // Nomor penerima
				await aldev.sendMessage(whatsappNumber, {
					location: {
						degreesLatitude: latitude,
						degreesLongitude: longitude,
					},
					caption: caption // Jika ada deskripsi, bisa ditambahkan di sini
				}, {
					quoted: m
				});
			}
			break;

			case 'block': 
			case 'ban': {
				if (!isCreator) return reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await aldev.updateBlockStatus(users, 'block')
				await reply(mess.done)
			}
			break;

			case 'unblock': 
			case 'unban': {
				if (!isCreator) return reply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await aldev.updateBlockStatus(users, 'unblock')
				await reply(mess.done)
			}
			break;

			case 'getcase': {
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply('Harap masukkan nama case yang ingin dicari! 🧐');
				try {
					const getCase = (cases) => {
						const fileContent = fs.readFileSync("./case.js", "utf-8");
						const caseBlock = fileContent.split(`case '${cases}'`)[1];
						if (!caseBlock) throw new Error('Case not found');
						return `case '${cases}'` + caseBlock.split("break")[0] + "break";
					}
					reply(`${getCase(text)}`);
				} catch (err) {
					reply(`Case '${text}' tidak ditemukan! 🚫`);
				}
			}
			break;

			case 'antibadword':
			case 'antitoxic':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].badword = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].badword = false
					reply(`${commad} is disabled`)
				}
			}
			break;

			case 'react': {
				if (!isCreator) return reply(mess.owner);
				reactionMessage = {
					react: {
						text: args[0],
						key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
					}
				}
				aldev.sendMessage(m.chat, reactionMessage)
			}
			break;
 
			case 'nsfw': {
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args[0] === "on") {
					if (AntiNsfw) return reply('Already activated')
					ntnsfw.push(m.chat)
					fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
					reply('Success in turning on nsfw in this group')
					var groupe = await aldev.groupMetadata(m.chat)
					var members = groupe['participants']
					var mems = []
					members.map(async adm => {
						mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					aldev.sendMessage(m.chat, {text: `*「 ⚠️Warning⚠️ 」*\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
				} else if (args[0] === "off") {
					if (!AntiNsfw) return reply('Already deactivated')
					let off = ntnsfw.indexOf(m.chat)
					ntnsfw.splice(off, 1)
					fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
					reply('Success in turning off nsfw in this group')
				} else {
					await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
				}
			}
			break;

			case 'antiaudio':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiaudio = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiaudio = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antiforeign':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiforeignnum = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiforeignnum = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antisticker':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antisticker = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antisticker = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antiimage':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiimage = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiimage = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antivideo':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antivideo = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antivideo = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'readviewonce': {
				if (!m.quoted) return reply(`Reply to view once message`)
				if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`This is not a view once message`)
				let msg = m.quoted.message
				let type = Object.keys(msg)[0]
				let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				if (/video/.test(type)) {
					return aldev.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
				} else if (/image/.test(type)) {
					return aldev.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
				}
			}
			break;

			case 'antiviewonce':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antiviewonce = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antiviewonce = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antibot':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antibot = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antibot = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antispam':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antispam = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antispam = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antimedia':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antimedia = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antimedia = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antidocument':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antidocument = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antidocument = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'anticontact':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].anticontact = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].anticontact = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antilocation':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilocation = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilocation = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antilink': {
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilink = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilink = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'antilinkgc': {
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antilinkgc = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antilinkgc = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'mute': {
				if (!m.isGroup) return reply(mess.group)
				if (!isAdmins && !isCreator) return reply(mess.admin)
				if (!isBotAdmins) return reply(mess.botAdmin)
				if (text === 'on') {
					if (db.data.chats[m.chat].mute) return reply('*Sudah Aktif Sebelumnya*')
					db.data.chats[m.chat].mute = true
					reply('*Mute Activated !*')
				} else if (text === 'off') {
					db.data.chats[m.chat].mute = false
					reply('*Mute Disabled !*')
				} else {
					reply('on/off?')
				}
			}
			break

			case 'welcome':
			case 'left': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					welcome = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					welcome = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'adminevent': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					adminevent = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					adminevent = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'groupevent': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					groupevent = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					groupevent = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'kick':
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await aldev.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
				reply(mess.done)
			break;

			case 'wanumber': 
			case 'nowa': 
			case 'searchno': 
			case 'searchnumber':{
				if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
				var inputnumber = text.split(" ")[0]
				reply(`Searching for WhatsApp account in given range...`)
				function countInstances(string, word) {
					return string.split(word).length - 1
				}
				var number0 = inputnumber.split('x')[0]
				var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
				var random_length = countInstances(inputnumber, 'x')
				var randomxx
				if (random_length == 1) {
					randomxx = 10
				} else if (random_length == 2) {
					randomxx = 100
				} else if (random_length == 3) {
					randomxx = 1000
				}
				var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
				var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
				var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
				for (let i = 0; i < randomxx; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var status1 = nu[Math.floor(Math.random() * nu.length)]
					var status2 = nu[Math.floor(Math.random() * nu.length)]
					var status3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var random21
					if (random_length == 1) {
						random21 = `${status1}`
						} else if (random_length == 2) {
						random21 = `${status1}${status2}`
					} else if (random_length == 3) {
						random21 = `${status1}${status2}${status3}`
					} else if (random_length == 4) {
						random21 = `${status1}${status2}${status3}${dom4}`
					}
					var anu = await aldev.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
					var anuu = anu.length !== 0 ? anu : false
					try {
						try {
							var anu1 = await aldev.fetchStatus(anu[0].jid)
						} catch {
							var anu1 = '401'
						}
						if (anu1 == '401' || anu1.status.length == 0) {
							nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
						} else {
							text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
						}
					} catch {
						nowhatsapp += `${number0}${i}${number1}\n`
					}
				}
				reply(`${text66}${nobio}${nowhatsapp}`)
			}
			break;

			case 'add': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);

				if (!text && !m.quoted) {
					reply(`Example: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await aldev.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await aldev.groupInviteCode(m.chat);
						
									if (i.status == 408) return reply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return reply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return reply('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return reply('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await aldev.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
							
										await aldev.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => reply('Gagal kirim undangan! 😔'));
									} else {
										reply(mess.done);
									}
								}
							});
					} catch (e) {
						reply('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break;

			case 'promote':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await aldev.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
				reply(mess.done)
			break;

			case 'demote':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await aldev.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
				reply(mess.done)
			break;

			case 'setnamegc':
			case 'setsubject':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!text) return reply('Text ?')
				await aldev.groupUpdateSubject(m.chat, text)
				reply(mess.done)
			break;

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
				if (!m.isGroup) return reply(mess.OnlyGrup)
				if (!isAdmins) return reply(mess.GrupAdmin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await aldev.downloadAndSaveMediaMessage(quoted)
				await aldev.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				reply(mess.done)
			}
			break

			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				await aldev.removeProfilePicture(m.chat)
			}
			break;

			case 'setppbot': {
				if (!isCreator) return reply(mess.OnlyOwner)
				if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await aldev.downloadAndSaveMediaMessage(quoted)
				await aldev.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				reply(mess.done)
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return reply(mess.owner);
				await aldev.removeProfilePicture(aldev.user.id)
				reply(mess.done)
			}
			break;

			case 'setbiobot':{
				if (!isCreator) return reply(mess.owner);
				if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Mora AI`)
				await aldev.updateProfileStatus(text)
				reply(mess.done)
			}
			break;

			case 'setdesc':
			case 'setdesk':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!text) return reply('Text ?')
				await aldev.groupUpdateDescription(m.chat, text)
				reply(mess.done)
			break;

			case 'hidetag':
			case 'h':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				aldev.sendMessage(m.chat, {
					text: q ? q : '',
					mentions: participants.map(a => a.id)
				})
			break;

			case 'listpc': {
				if (!isCreator) return reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName
					teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
				}
				aldev.sendTextMentions(m.chat, teks, m)
			}
			break

			case 'listgc': {
				if (!isCreator) return reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = await aldev.groupMetadata(i)
					teks += `*Name :* ${metadata.subject}\n*Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n*ID :* ${metadata.id}\n*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				aldev.sendTextMentions(m.chat, teks, m)
			}
			break

			case 'listonline': case 'liston': {
				if (!m.isGroup) return reply(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await aldev.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => reply('*Data tidak ditemukan! ☹️*'))
			}
			break

			case 'creategc': {
				if (!isCreator) return reply(mess.owner);
				if (!text) {
					return reply(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
				}
				await emote('⏱️');
				let cret = await aldev.groupCreate(text, []);
				let response = await aldev.groupInviteCode(cret.id);
				let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
				await emote('✅');
				aldev.sendMessage(m.chat, {
					text: caption,
					contextInfo: {
						forwardingScore: 1,
						isForwarded: true,
						externalAdReply: {
							showAdAttribution: true,
							title: cret.subject,
							body: `Undangan chat grup`,
							thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
							sourceUrl: `https://chat.whatsapp.com/${response}`,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
			}
			break;

			case 'group':
			case 'grup': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (args[0] === 'close') {
					await aldev.groupSettingUpdate(m.chat, 'announcement')
						.then(() => reply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => reply(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await aldev.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => reply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => reply(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					reply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Buka grup\n- *${prefix + command} close* → Tutup grup`);
				}
			}
			break;

			case 'editinfo': {
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (args[0] === 'open') {
					await aldev.groupSettingUpdate(m.chat, 'unlocked')
						.then(() => reply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
						.catch((err) => reply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
				} else if (args[0] === 'close') {
					await aldev.groupSettingUpdate(m.chat, 'locked')
						.then(() => reply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
						.catch((err) => reply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
				} else {
					reply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Izinkan anggota mengedit info grup\n- *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
				}
			}
			break;

			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'gclink':
			case 'grouplink':
			case 'gruplink':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				let response = await aldev.groupInviteCode(m.chat)
				aldev.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
					detectLink: true
				})
			break;

			case 'revoke':
			case 'resetlink':
				if (!m.isGroup) return reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin);
				if (!isBotAdmins) return reply(mess.botAdmin);
				await aldev.groupRevokeInvite(m.chat)
				.then(res => {
					reply(`Reset Success`)
				})
			break;

			case 'speedtest': case 'speed': {
				if (!isCreator) return reply(mess.owner);
				let cp = require('child_process');
				let { promisify } = require('util');
				let exec = promisify(cp.exec).bind(cp);
				let o
					try {
						o = await exec('python3 speed.py');
					} catch (e) {
						o = e
					} finally {
						let { stdout, stderr } = o
						if (stdout.trim()) reply(stdout);
						if (stderr.trim()) reply(stderr);
					}
				}
			break
			case 'owner':
			case 'creator': {
			  const kontak = {
			   displayName: 'Ayang ❤️',
			     vcard: `BEGIN:VCARD
			      VERSION:3.0
			      N:;;;;
			      FN:${global.ownerName}
			      item1.TEL;waid=${global.ownerNumber}:${global.ownerNumber}
			      item1.X-ABLabel:${global.ownerName}
			      URL;Email Owner:Coba
			      item2.ADR:;;🇮🇩 Indonesia;;
			      item3.EMAIL;type=INTERNET:cona
			      item3.X-ABLabel:Email Developer
			      ORG:Cinta Keluarga
			      END:VCARD`
			   };
		  const text = `Itu Nomor Ayang Ku`;
		  const kontakMessage = await aldev.sendMessage(m.chat, { contacts: { contacts: [kontak] } }, { quoted: m });
		  await aldev.sendMessage(m.chat, { text }, { quoted: kontakMessage });
			}
			break
			case 'brat': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
			async function BratGenerator(teks) {
  let width = 512;
  let height = 512;
  let margin = 20;
  let wordSpacing = 50; 
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  let fontSize = 280;
  let lineHeightMultiplier = 1.3;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';
registerFont('./lib/arialnarrow.ttf', { family: 'Narrow' });
  let words = teks.split(' ');
  let lines = [];
  let rebuildLines = () => {
    lines = [];
    let currentLine = '';
    for (let word of words) {
let testLine = currentLine ? `${currentLine} ${word}` : word;
let lineWidth =
  ctx.measureText(testLine).width + (currentLine.split(' ').length - 1) * wordSpacing;
if (lineWidth < width - 2 * margin) {
  currentLine = testLine;
} else {
  lines.push(currentLine);
  currentLine = word;
}
    }
    if (currentLine) {
lines.push(currentLine);
    }
  };
  ctx.font = `${fontSize}px Narrow`;
  rebuildLines();
  while (lines.length * fontSize * lineHeightMultiplier > height - 2 * margin) {
    fontSize -= 2;
    ctx.font = `${fontSize}px Narrow`;
    rebuildLines();
  }
    let lineHeight = fontSize * lineHeightMultiplier;
  let y = margin;
  for (let line of lines) {
    let wordsInLine = line.split(' ');
    let x = margin;
    for (let word of wordsInLine) {
ctx.fillText(word, x, y);
x += ctx.measureText(word).width + wordSpacing;
    }
    y += lineHeight;
  }
  let buffer = canvas.toBuffer('image/png');
  let image = await Jimp.read(buffer);
  image.blur(3);
  let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
return aldev.sendImageAsSticker(m.chat, blurredBuffer, m, { packname: "Creator", author: "TEBAR-BOT" })
}

			if (!text) return m.reply(`Masukkan teks untuk stiker.\n\nContoh:\n.brat Atmin Ganteng`);
			if (global.db.data.users[m.sender].limit < 5)
			return reply('⚠️ *Limit Kamu Habis*');
			return BratGenerator(text)
			}
			break

case 'js':
case 'javascript': {
  if (!q) return reply(`☘️ *Mau Buat Apa Dengan JavaSript?*`);
  if (q.length > 500) return reply(`☘️ *Maksimal 500 Karakter*`);
  
  reply('☕ *One Moment, Please*');

  try {
    const result = await JavaScript(q);
    if (!result) {
return reply("⚠️ *Tidak Ada Respons Dari AI.*");
    }
    await reply(`📑 TEBAR-BOT ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ᴊᴀᴠᴀsᴄʀɪᴘᴛ\n\n${result}`);
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break


			case 'ssweb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply('Masukkan URL untuk di-screenshot!');
				await emote('⏱️');
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return reply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await aldev.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					reply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'qc':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply('Input teksnya!')
				const sender = m.sender
				const username = await aldev.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await aldev.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => './data/vn/avatar_contact.png')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await aldev.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 's': case 'sticker': case 'stiker': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!quoted) return reply(`Kirim/Balas Gambar/Video dengan caption ${prefix + command}\nDurasi video maksimal 9 detik!`);
				if (!mime) return reply('Mime type tidak dikenali!');
				if (/image/.test(mime)) {
					try {
						let media = await quoted.download();
						const mediaPath = './data/image/media_image.jpg';
						const outputPath = './data/sticker/cropped_image.webp';
						fs.writeFileSync(mediaPath, media);
						if (!fs.existsSync(mediaPath)) {
							return reply('File gambar gagal disimpan!');
						}
						ffmpeg(mediaPath)
						.outputOptions([
							'-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512'
						])
						.outputFormat('webp')
						.output(outputPath)
						.on('end', () => {
							aldev.sendMessage(m.chat, { sticker: fs.readFileSync(outputPath), packname: botName, author: ownerName }, { quoted: m })
							fs.unlinkSync(mediaPath);
							fs.unlinkSync(outputPath);
						})
						.on('error', (err) => {
							console.error('Error saat membuat stiker gambar:', err);
							reply('Terjadi kesalahan saat membuat stiker gambar. 😞');
							fs.unlinkSync(mediaPath);
						})
						.run();
					} catch (err) {
						console.error('Error download gambar:', err);
						reply('Gagal mendownload gambar! 😞');
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) {
						return reply('Durasi video maksimal 9 detik untuk stiker!');
					}
					try {
						let media = await quoted.download();
						const mediaPath = './data/video/media_video.mp4';
						const outputPath = './data/sticker/cropped_video.webp';
						fs.writeFileSync(mediaPath, media);
						if (!fs.existsSync(mediaPath)) {
							return reply('File video gagal disimpan!');
						}
						ffmpeg(mediaPath)
						.outputOptions([
							'-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512'
						])
						.outputFormat('webp')
						.output(outputPath)
						.on('end', () => {
							aldev.sendMessage(m.chat, { sticker: fs.readFileSync(outputPath), packname: botName, author: ownerName }, { quoted: m })
							fs.unlinkSync(mediaPath);
							fs.unlinkSync(outputPath);
						})
						.on('error', (err) => {
							console.error('Error saat membuat stiker video:', err);
							reply('Terjadi kesalahan saat membuat stiker video. 😞');
							fs.unlinkSync(mediaPath);
						})
						.run();
					} catch (err) {
						console.error('Error download video:', err);
						reply('Gagal mendownload video! 😞');
					}
				} else {
					reply(`Kirim atau balas gambar/video dengan caption ${prefix + command}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'swm': case 'steal': case 'stickerwm': case 'take':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!q) return reply(`Where is the text?`)
				await emote('⏱️');
				const pcknm = q.split("|")[0]
				const atnm = q.split("|")[1]
				if (m.quoted.isAnimated === true) {
					aldev.downloadAndSaveMediaMessage(quoted, "gifee")
					aldev.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
				} else if (/image/.test(mime)) {
					let media = await aldev.downloadAndSaveMediaMessage(quoted)
					let encmedia = await aldev.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
					let media = await aldev.downloadAndSaveMediaMessage(quoted)
					let encmedia = await aldev.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else {
					reply(`Photo/Video?`)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'smeme': 
			case 'stickmeme': 
			case 'stikmeme': 
			case 'stickermeme': 
			case 'stikermeme': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!quoted) return reply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
				if (!mime) return reply(`⚠️ Tolong reply gambar dengan caption: ${prefix + command} text1|text2`);
					await emote('⏱️');
					const atas = text.split('|')[0] || '-';
					const bawah = text.split('|')[1] || '-';
					try {
						if (/image/.test(mime) && !/webp/.test(mime)) {
							const media = await aldev.downloadAndSaveMediaMessage(quoted);
							if (!media) return reply(`❌ Gagal mengunduh gambar. Coba lagi ya Kak!`);
							const upload = await fileIO(media);
							if (!upload || !upload.url) return reply(`❌ Gagal mengunggah gambar. Coba lagi nanti ya!`);
							const smemeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${upload.url}`;
							const smeme = await getBuffer(smemeUrl);
							if (!smeme) return reply(`❌ Gagal membuat stiker meme. Coba lagi ya!`);
							await aldev.sendImageAsSticker(m.chat, smeme, m, { packname: botName, author: ownerName });
						} else {
						reply(`⚠️ Kirim/reply gambar dengan caption: ${prefix + command} text1|text2`);
					}
				} catch (error) {
					console.error(error);
					await reply(`❌ Halo Developer! Sepertinya ada kesalahan nih... Tolong diperiksa ya~ 🥺✨\n\n*Error:* ${error.message}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tourl': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!mime) return reply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
				await emote('⏱️');
				try {
					let media = await aldev.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						reply(caption);
					} else if (!/image/.test(mime)) {
						let response = await pomfCDN(media);
						reply(response);
					} else {
						reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toimage': 
			case 'toimg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!quoted) return reply('Reply Image')
				if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
				await emote('⏱️');
				let media = await aldev.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					aldev.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'remini':
			case 'hdr':
			case 'hd':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				aldev.enhancer = aldev.enhancer ? aldev.enhancer : {};
				if (m.sender in aldev.enhancer) return reply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Media tidak support!`)
				aldev.enhancer[m.sender] = true;
				try {
					await emote('⏱️');
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					await reply('Gambar berhasil ditingkatkan kualitasnya! ✅');
					aldev.sendMessage(m.chat, {image: proses, caption: mess.done}, {quoted: m})
				} catch (err) {
					console.log(err);
					reply('Terjadi kesalahan pada server.');
				}
				delete aldev.enhancer[m.sender];
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'fetch': case 'get': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text.startsWith('http')) return reply(`No Query?\n\nExample : ${prefix + command} https://google.com`)
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await reply(text)
					} else {
						reply(util.format(res.data))
					}
				} catch (e) {
					reply(util.format(e))
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'toaudio': 
			case 'tomp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				if (!quoted) return reply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				try {
					await emote('⏱️');
					let media = await quoted.download();
					let audioBuffer = await toAudio(media, 'mp4');
					await aldev.sendMessage(m.chat, { 
						audio: audioBuffer, 
						mimetype: 'audio/mpeg'
					}, { quoted: m });
						reply(`✅ Berhasil mengonversi ke MP3! 🎵`);
				} catch (err) {
					console.error('❌ Error:', err);
					reply(`❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bass': 
			case 'blown': 
			case 'deep': 
			case 'earrape': 
			case 'fast': 
			case 'fat': 
			case 'nightcore': 
			case 'reverse': 
			case 'robot': 
			case 'slow': 
			case 'smooth': 
			case 'squirrel': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				try {
					let set
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await reply(mess.wait);
						let media = await aldev.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return reply(err)
							let buff = fs.readFileSync(ran)
							aldev.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						})
					} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
				} catch (e) {
					reply(e)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'listbadword':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of bad) {
					teks += `│⭔ ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
				reply(teks)
			}
			break;
			
case 'cekcuaca':{
				let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=medan&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`);
				let textw = ""
				textw += `*🗺Cuaca saat ini di Medan*\n\n`
				textw += `*Cuaca:* ${wdata.data.weather[0].main}\n`
				textw += `*Deskripsi:* ${wdata.data.weather[0].description}\n`
				textw += `*Suhu Rata-rata:* ${wdata.data.main.temp}\n`
				textw += `*Tekanan Udara:* ${wdata.data.main.pressure}\n`
				textw += `*Kelembapan:* ${wdata.data.main.humidity}\n`
				textw += `*Kecepatan Angin:* ${wdata.data.wind.speed}\n`
				textw += `*Latitude:* ${wdata.data.coord.lat}\n`
				textw += `*Longitude:* ${wdata.data.coord.lon}\n`
				aldev.sendMessage(m.chat, {text: textw}, {quoted: m})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'afk': {
				if (!m.isGroup) return reply(mess.OnlyGrup); // Cek apakah perintah dijalankan di grup

				if (isAfkOn) return; // Cek apakah pengguna sudah dalam mode AFK

				// Tentukan alasan AFK
				let reason = text ? text : 'Nggak ada alasan yang disebutkan~ 🤭';

				// Tambahkan pengguna ke daftar AFK
				addAfkUser(m.sender, Date.now(), reason, afk);

				// Kirim pesan konfirmasi dengan mention
				aldev.sendTextWithMentions(
					m.chat,
					`🌙 *AFK Mode Aktif!* 🌙\n` + 
					`👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n` + 
					`💬 *Alasan:* ${reason}\n\n` + 
					`Jangan lupa balik lagi ya~ 😊✨`,
					m
				);
			}
			break;

			case 'delete': 
			case 'd':{
				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				if (!m.quoted.fromMe && !isAdmins) return reply('Maaf Kak, hanya Admin yang bisa menghapus pesan orang lain! 😅')
				try {
					await m.quoted.delete();
					reply('Pesan berhasil dihapus! ✅');
				} catch (err) {
					console.log(err);
					reply('Ups, ada masalah saat menghapus pesan! Coba lagi ya! 😣');
				}
			}
			break;

			case 'autoswview':
			case 'autostatusview':{
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					autoswview = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					autoswview = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'anticall': {
				if (!isCreator) return reply(mess.owner);
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					anticall = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					anticall = false
					reply(`${command} is disabled`)
				}
			}
			break;

			case 'addvideo':{
				if (!isCreator) return
				if (args.length < 1) return reply('Whats the video name?')
				if (videonye.includes(q)) return reply("The name is already in use")
				let delb = await aldev.downloadAndSaveMediaMessage(quoted)
				videonye.push(q)
				await fsx.copy(delb, `./data/video/${q}.mp4`)
				fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(delb)
				reply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
			}
			break

			case 'delvideo':{
				if (!isCreator) return
				if (args.length < 1) return reply('Enter the video name')
				if (!videonye.includes(q)) return reply("The name does not exist in the database")
				let wanu = videonye.indexOf(q)
				videonye.splice(wanu, 1)
				fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(`./data/video/${q}.mp4`)
				reply(`Success deleting video ${q}`)
			}
			break

			case 'listvideo':{
				let teks = '┌──⭓「 *Video List* 」\n│\n'
				for (let i of videonye) {
					teks += `│ • ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${videonye.length}*`
				reply(teks)
			}
			break

			case 'addmsg': {
				if (!isCreator) return reply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');
				if (!m.quoted) return reply('Reply dulu ke pesan yang mau disimpan di database ya, Kak! 📝');
				if (!text) return reply(`Contohnya gini, Kak: ${prefix + command} nama`);	
				let msgs = db.data;
				if (text.toLowerCase() in msgs) return reply(`Yah, '${text}' udah ada di daftar pesan nih, Kak! 😅`);	
				msgs[text.toLowerCase()] = quoted.fakeObj;
				reply('Pesan berhasil disimpan di database! 🎉');
			}
			break;

			case 'getmsg': {
				if (!isCreator) return reply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');
				if (!text) return reply(`Contohnya gini, Kak: ${prefix + command} namafile\n\nBuat liat daftar pesan, ketik ${prefix}listmsg 📋`);	
				let msgs = db.data;
				if (!(text.toLowerCase() in msgs)) return reply(`Hmm, '${text}' gak ada di daftar pesan, Kak... 🤔`);	
				aldev.copyNForward(m.chat, msgs[text.toLowerCase()], true);
			}
			break;

			case 'listmsg': {
				if (!isCreator) return reply('Eits, cuma kakak pembuat yang bisa pake perintah ini! 😝');	
				let msgs = JSON.parse(fs.readFileSync('./src/database.json'));
				let seplit = Object.entries(db.data).map(([nama, isi]) => ({ nama, ...isi }));
				let teks = '📚 *DAFTAR PESAN DI DATABASE* 📚\n\n';
				if (seplit.length === 0) return reply('Wah, database-nya kosong nih, Kak... 😅');	
				for (let i of seplit) {
					let tipePesan = i.message ? getContentType(i.message).replace(/Message/i, '') : 'Tidak Diketahui';
					teks += `- *Nama:* ${i.nama}\n- *Tipe:* ${tipePesan}\n────────────────────────\n\n`;
				}	
				reply(teks);
			}
			break;

			case 'delmsg': case 'deletemsg': {
				if (!isCreator) return reply('Ups, cuma kakak pembuat yang bisa hapus pesan! 🚫');	
				let msgs = db.data;
				if (!(text.toLowerCase() in msgs)) return reply(`Hmm, '${text}' gak ada di daftar pesan, Kak... 🤔`);
				delete msgs[text.toLowerCase()];
				reply('Pesan berhasil dihapus dari database! ✅');
			}
			break;

			case 'addimage':{
				if (!isCreator) return
				if (args.length < 1) return reply('Whats the image name?')
				if (imagenye.includes(q)) return reply("The name is already in use")
				let delb = await aldev.downloadAndSaveMediaMessage(quoted)
				imagenye.push(q)
				await fsx.copy(delb, `./data/image${q}.jpg`)
				fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(delb)
				reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
			}
			break

			case 'delimage':{
				if (!isCreator) return
				if (args.length < 1) return reply('Enter the image name')
				if (!imagenye.includes(q)) return reply("The name does not exist in the database")
				let wanu = imagenye.indexOf(q)
				imagenye.splice(wanu, 1)
				fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(`./data/image${q}.jpg`)
				reply(`Success deleting image ${q}`)
			}
			break

			case 'listimage':{
				let teks = '┌──⭓「 *Image List* 」\n│\n'
				for (let i of imagenye) {
					teks += `│ • ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenye.length}*`
				reply(teks)
			}
			break

			case 'addsticker':{
				if (!isCreator) return
				if (args.length < 1) return reply('Whats the sticker name?')
				if (setiker.includes(q)) return reply("The name is already in use")
				let delb = await aldev.downloadAndSaveMediaMessage(quoted)
				setiker.push(q)
				await fsx.copy(delb, `./data/sticker/${q}.webp`)
				fs.writeFileSync('./database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(delb)
				reply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
			}
			break

			case 'delsticker':{
				if (!isCreator) return
				if (args.length < 1) return reply('Enter the sticker name')
				if (!setiker.includes(q)) return reply("The name does not exist in the database")
				let wanu = setiker.indexOf(q)
				setiker.splice(wanu, 1)
				fs.writeFileSync('./database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(`./data/sticker/${q}.webp`)
				reply(`Success deleting sticker ${q}`)
			}
			break

			case 'liststicker':{
				let teks = '┌──⭓「 *Sticker List* 」\n│\n'
				for (let i of setiker) {
					teks += `│ • ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${setiker.length}*`
				reply(teks)
			}
			break

			case 'addvn':{
				if (!isCreator) return
				if (args.length < 1) return reply('Whats the audio name?')
				if (audionye.includes(q)) return reply("The name is already in use")
				let delb = await aldev.downloadAndSaveMediaMessage(quoted)
				audionye.push(q)
				await fsx.copy(delb, `./data/vn/${q}.mp3`)
				fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
				fs.unlinkSync(delb)
				reply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
			}
			break

			case 'delvn':{
				if (!isCreator) return
				if (args.length < 1) return reply('Enter the vn name')
				if (!audionye.includes(q)) return reply("The name does not exist in the database")
				let wanu = audionye.indexOf(q)
				audionye.splice(wanu, 1)
				fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
				fs.unlinkSync(`./data/image${q}.mp3`)
				reply(`Success deleting vn ${q}`)
			}
			break

			case 'listvn':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of audionye) {
					teks += `│ • ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${audionye.length}*`
				reply(teks)
			}
			break

			case 'q': case 'quoted': {
				if (!m.quoted) return reply('Reply the message!')
				const anu = await m.getQuotedObj()
				if (!anu) return reply('Format Not Available!')
				if (!anu.quoted) return reply('The Message You Reply Does Not Contain a Reply')
				await aldev.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break

			case 'yts': 
			case 'ytsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`Example : ${prefix + command} story wa anime`)
				let search = await yts(text)
				let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
				let no = 1
				for (let i of search.all) {
					teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n─────────────────\n\n`
				}
				aldev.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: m })
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'lirik': 
			case 'lyrics': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\nContoh: *${prefix + command} Someone Like You*`);
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return reply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await reply(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					reply(lyricsResponse);
				} catch (error) {
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
			
			case 'play': 
			case 'ytplay': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
				try {		
					let search = await yts(`${text}`);
					if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
		
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;

					aldev.sendMessage(m.chat,{
						image: { url: image },
						caption: caption,
						footer: `${global.footer}`,
						buttons: [
							{
								buttonId: `${prefix}ytmp3 ${url}`,
								buttonText: {
									displayText: "YouTube Music"
								}
							},
							{
								buttonId: `${prefix}ytmp4 ${url}`,
								buttonText: {
									displayText: "YouTube Video"
								}
							}
						],
						viewOnce: true,
					}, {
						quoted: m
					});
				} catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

case 'ytmp3':{
if (!text) return m.reply('*Example:* .ytmp3 https://www.youtube.com/watch?v=xxxxxxx');
if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
    try {
        const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio/?url=${text}`);

        if (!response.data || !response.data.metadata) {
            return m.reply('Gagal ambil data dari link YouTube itu, coba deh link-nya bener. 😕');
        }
        const { metadata, downloads } = response.data;
        const thumbnailUrl = metadata.thumbnail.url;
        await aldev.sendMessage(m.chat, {
                    audio: { url: downloads.url },
                    mimetype: "audio/mpeg",
                     contextInfo: {
                         externalAdReply: {
                            title: metadata.title,
                             body: `Author : ${metadata.author}`,
                             thumbnailUrl: thumbnailUrl,
                             sourceUrl: null,
                             mediaType: 1,
                             renderLargerThumbnail: false,
                            },
                        },
                    }, { quoted: m });
    } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
	}
}
db.data.users[m.sender].limit -= 1;
break

case "ytmp4": {
if (!text) return m.reply('*Example:* .ytmp4 https://www.youtube.com/watch?v=xxxxxxx');
if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
    try {
        const response = await axios.get(`https://ytdl.axeel.my.id/api/download/video/?url=${text}`);
        if (!response.data || !response.data.metadata) {
            return m.reply('Gagal ambil data dari link YouTube itu, coba deh link-nya bener. 😕');
        }
        const { metadata, downloads } = response.data;
        const videoUrl = downloads.url;
        const thumbnailUrl = metadata.thumbnail.url;
        await aldev.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `🎬 *Video*: ${metadata.title}`,
        }, { quoted: m });
    } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
	}
}
db.data.users[m.sender].limit -= 1;
break

			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
case "tt": case "tiktok": {
if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
if (!text) return m.reply("Link nya mana?")
if (!text.startsWith("https://")) return m.reply("Link nya mana?")
await tiktokDl(q).then(async (result) => {
await aldev.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: aldev.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Ini Bree Geser Aja"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await aldev.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await aldev.sendMessage(m.chat, {
video: {url: urlVid.url}, 
mimetype: 'video/mp4', 
caption: `*Sudah Bree*`
}, {quoted: m}) 
}
}).catch(e => console.log(e))
await aldev.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
db.data.users[m.sender].limit -= 1;
break
case 'felo': {
  if (!q) return reply(`☘️ *Mau Cari Apa Di Felo?**`);
  if (q.length > 1000) return reply(`☘️ *Maksimal 1000 Karakter*`);
  reply('☕ *One Moment, Please*')
  try {

    const LenFelo = await Felo(q);
    if (LenFelo.error) {
reply("⚠ *Terjadi Kesalahan*");
return;
    }

    let answer = LenFelo.answer || "Tidak ada jawaban yang ditemukan.";
    let sources = LenFelo.source.length > 0
? `📑 *Sumber Yang Saya Gunakan*:\n${LenFelo.source
    .filter(src => src.link)
    .slice(0, 5)
    .map((src, i) => `_${src.link}_`)
    .join("\n\n")}`
: "-";

    let Teks = `📑 TEBAR-BOT ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ғᴇʟᴏᴀɪ\n\n${answer}\n\n${sources}`;

    await aldev.sendMessage(m.chat, { text: Teks });
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
case 'bing': {
if (!text) throw `Example : ${prefix + command} siapa presiden Indonesia?`;
    try {
      let response = await fetch('https://api.botcahx.eu.org/api/search/bing-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            apikey: botcahx
          })
        })
        .then(res => res.json());

      await reply(response.message);
    } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
	}
}
break
case 'lua': {
  if (!q) return reply(`☘️ *Mau Buat Apa Dengan Lua?*`);
  if (q.length > 500) return reply(`☘️ *Maksimal 500 Karakter*`);
  
  reply('☕ *One Moment, Please*');

  try {
    const result = await Lua(q);
    if (!result) {
return reply("⚠️ *Tidak Ada Respons Dari AI.*");
    }
    await reply(`📑 TEBAR-BOT ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ʟᴜᴀ\n\n${result}`);
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
case 'ask': {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  let res = await (await fetch(`https://api.botcahx.eu.org/api/search/bard-ai?apikey=${global.botcahx}&text=${text}`)).json()
  await reply(res.message)
} catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break

case 'gpt4': {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  let res = await (await fetch(`https://api.botcahx.eu.org/api/search/bard-ai?apikey=${global.botcahx}&text=${text}`)).json()
  await reply(res.message)
} catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
case 'html': {
  if (!q) return reply(`☘️ *Mau Buat Apa Dengan HTML?*`);
  if (q.length > 500) return reply(`☘️ *Maksimal 500 Karakter*`);
  reply('☕ *One Moment, Please*');
  try {
    const result = await Html(q);
    if (!result) {
return reply("⚠️ *Tidak Ada Respons Dari AI.*");
    }
    await reply(`📑 TEBAR-BOT ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ʜᴛᴍʟ\n\n${result}`);
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break

			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`
				);

				try {
					let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
					let audio = anu.music_info.url;

					// Kirim informasi audio terlebih dahulu
					await aldev.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Title:* ${anu.music_info.title || '-'}\n` +
							`🎤 *Author:* ${anu.music_info.author || '-'}\n` +
							`💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source:* ${text}`
						},
						{ quoted: m }
					);

					// Kirim audio sebagai file MP3
					await aldev.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error(error);
					await reply(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` +
					`🆔 *Video ID* : ${search.videos[0].video_id}\n` +
					`👤 *Username* : ${search.videos[0].author.unique_id}\n` +
					`🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
					`⏳ *Duration* : ${search.videos[0].duration} detik\n` +
					`❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
					`💬 *Comment* : ${search.videos[0].comment_count}\n` +
					`🔄 *Share* : ${search.videos[0].share_count}\n\n` +
					`🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
						`⏳ Duration: ${i.duration} detik\n` +
						`❤️ Likes: ${i.digg_count}\n` +
						`💬 Comments: ${i.comment_count}\n` +
						`🔄 Shares: ${i.share_count}\n` +
						`🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}

					await aldev.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);

					if (search.videos.length > 1) {
						await aldev.sendMessage(
							m.chat,
							{
								text: `📚 *Daftar Video Lainnya:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Eits, kakak lupa kasih URL! 😗 Coba ketik kayak gini ya: *${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return reply(`⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return reply(`⚠️ URL yang diberikan bukan URL Alight Motion!`);
				}
				try {
					const result = await alightScrape(text);
					if (result.error) {
						return reply(result.error);
					}
					const { title, description } = result;
					await reply(`[ *PRESET ALIGHT MOTION* ]\n\nJudul: ${title}\nDeskripsi: ${description}`);
				} catch (error) {
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat mengambil data dari URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return reply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link:* ${i.url}\n`;
					}
					await aldev.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					reply('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(
					`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contohnya:*\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`
				);
				try {
					let anu = await fetchJson(`https://api.vreden.my.id/api/igdownload?url=${text}`);
					let item = 0;

					for (let item of anu.result.response.data) {
						if (item.type === 'video') {
							await aldev.sendMessage(
								m.chat,
								{
									video: { url: item.url },
									caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
								},
								{ quoted: m }
							);
						}

						if (item.type === 'image') {
							if (item === 0) {
								await aldev.sendMessage(
									m.chat,
									{
										image: { url: item.url },
										caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})\n\n${m.isGroup ? '_📥 Sisa foto akan dikirim di private chat_' : ''}`
									},
									{ quoted: m }
								);
							} else {
								await aldev.sendMessage(
									m.sender,
									{
										image: { url: item.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}

					if (anu.result.response.data.length === 0) {
						await reply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
					}

				} catch (error) {
					console.error(error);
					await reply(`❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti ya, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'git': 
			case 'gitclone':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DG/Media`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
				let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
				let [, user, repo] = args[0].match(regex1) || []
				repo = repo.replace(/.git$/, '')
				let url = `https://api.github.com/repos/${user}/${repo}/zipball`
				let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
				aldev.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
				db.data.users[m.sender].limit -= 1;
			break;

			case 'weather':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply('What location?')
				let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`);
				let textw = ""
				textw += `*🗺️Weather of${text}*\n\n`
				textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
				textw += `*Description:-* ${wdata.data.weather[0].description}\n`
				textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
				textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
				textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
				textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
				textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
				textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
				textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
				textw += `*Country:-* ${wdata.data.sys.country}\n`
				aldev.sendMessage(m.chat, {text: textw}, {quoted: m})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bukalapak': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(
					`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} iPhone 15 Case* biar Mora bisa bantu cari produknya! 🛒✨`
				);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return reply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}
					let replyText = `🛒 *Hasil Pencarian Bukalapak:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Harga:* ${item.harga}\n`;
						replyText += `⭐ *Rating:* ${item.rating}\n`;
						replyText += `📦 *Terjual:* ${item.terjual}\n`;
						replyText += `📍 *Lokasi Toko:* ${item.store.lokasi}\n`;
						replyText += `🏬 *Toko:* ${item.store.nama}\n`;
						replyText += `🛒 *Link Toko:* ${item.store.link}\n`;
						replyText += `🔗 *Link Produk:* ${item.link}\n\n`;
					});

					await aldev.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *Gambar Produk Pertama:* ${hasil[0].title}`
						},
						{ quoted: m }
					);

					await aldev.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await reply(`❌ Terjadi kesalahan saat mengambil data dari Bukalapak. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'playstore': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(
					`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} WhatsApp* biar Mora bisa bantu cari aplikasinya! 📲✨`
				);

				try {
					let hasil = await PlayStore(text);
					if (!hasil || hasil.length === 0 || hasil.message) {
						return reply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}

					let replyText = `📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.nama}*\n`;
						replyText += `👤 *Developer:* ${item.developer}\n`;
						replyText += `⭐ *Rating:* ${item.rate}\n`;
						replyText += `🔗 *Link:* ${item.link}\n`;
						replyText += `🏢 *Link Developer:* ${item.link_dev}\n\n`;
					});

					await aldev.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].img },
							caption: `🖼️ *Gambar Aplikasi Pertama:* ${hasil[0].nama}`
						},
						{ quoted: m }
					);

					await aldev.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Play Store:', error.response?.data || error.message);
					await reply(`❌ Terjadi kesalahan saat mengambil data dari Play Store. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'umma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *url artikel*`);
				try {
					const result = await umma(text);
					reply(`📖 *Artikel:* ${result.title}\n\n👤 *Penulis:* ${result.author.name}\n💬 *Caption:* ${result.caption}\n\n🔗 *Sumber:* ${text}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil artikel dari Umma, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'githubstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} MoraAI`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					reply(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil data GitHub, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'npmstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
				try {
					const npmInfo = await npmstalk(text);
					reply(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil data dari NPM, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ffchars':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let characters = await ffCh();
				let charList = characters.map((char, index) => `${index + 1}. 🎮 *${char.name}*\n💬 ${char.desc}\n🔗 Link: https://ff.garena.com/id/chars/${char.id}`).join('\n\n');
				await aldev.sendMessage(m.chat, { text: `*Daftar Karakter Free Fire:*\n\n${charList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffcharinfo':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let charId = text.split(' ')[1]; // Asumsikan ID karakter setelah kata kunci
				if (!charId) return reply('⚠️ ID karakter tidak ditemukan!');
				let charDetails = await ffChSkill(charId);
				let charInfo = charDetails.map(detail => `*Title:* ${detail.title}\n*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await aldev.sendMessage(m.chat, { text: charInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffnews':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let news = await ffNews();
				let newsList = news.map(item => `📰 *${item.title}*\n🕒 *${item.time}*\n🔗 Link: ${item.link}`).join('\n\n');
				await aldev.sendMessage(m.chat, { text: `*Berita Free Fire Terbaru:*\n\n${newsList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpets':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let pets = await ffPet();
				let petList = pets.map((pet, index) => `${index + 1}. 🐾 *${pet.name}*\n💬 ${pet.talk}\n🔗 Link: https://ff.garena.com/id/pets/${pet.id}`).join('\n\n');
				await aldev.sendMessage(m.chat, { text: `*Daftar Pet Free Fire:*\n\n${petList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpetskill':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let petId = text.split(' ')[1]; // Asumsikan ID pet setelah kata kunci
				if (!petId) return reply('⚠️ ID pet tidak ditemukan!');
				let petDetails = await ffPetSkill(petId);
				let petInfo = petDetails.map(detail => `*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await aldev.sendMessage(m.chat, { text: petInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'mlstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *gameId zoneId*\n\n🤔 *Contohnya:*\n\n${prefix + command} 12345 1`);
				const [gameId, zoneId] = text.split(' ');
				try {
					const gameDetail = await mlstalk(gameId, zoneId);
					reply(`🎮 *Game:* ${gameDetail.userName}\n🛒 *Harga:* ${gameDetail.price || '0'}\n🔗 ${gameDetail.topUpUrl || 'URL tidak ada.'}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil data dari DuniaGames, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imdb':
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`_Name a Series or movie`)
				await reply(mess.wait);
				let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
				let imdbt = ""
				console.log(fids.data)
				imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
				imdbt += "🎬Title: " + fids.data.Title + "\n"
				imdbt += "📅Year : " + fids.data.Year + "\n"
				imdbt += "⭐Rated: " + fids.data.Rated + "\n"
				imdbt += "📆Released : " + fids.data.Released + "\n"
				imdbt += "⏳Runtime: " + fids.data.Runtime + "\n"
				imdbt += "🌀Genre: " + fids.data.Genre + "\n"
				imdbt += "👨🏻‍💻Director : " + fids.data.Director + "\n"
				imdbt += "✍Writer : " + fids.data.Writer + "\n"
				imdbt += "👨Actors : " + fids.data.Actors + "\n"
				imdbt += "📃Plot : " + fids.data.Plot + "\n"
				imdbt += "🌐Language : " + fids.data.Language + "\n"
				imdbt += "🌍Country: " + fids.data.Country + "\n"
				imdbt += "🎖️Awards : " + fids.data.Awards + "\n"
				imdbt += "📦BoxOffice: " + fids.data.BoxOffice + "\n"
				imdbt += "🏙️Production : " + fids.data.Production + "\n"
				imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
				imdbt += "✅imdbVotes: " + fids.data.imdbVotes + ""
				aldev.sendMessage(m.chat, {
					image: {
						url: fids.data.Poster,
					},
					caption: imdbt,
				}, {
					quoted: m,
				})
				db.data.users[m.sender].limit -= 1;
			break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return reply('Link nggak valid')
				try {
					const res = await GDrive(text);
					if (res.error) return reply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					aldev.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'pinterest': 
			case 'pin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`Enter Query`); // Cek apakah query sudah diberikan

				anutrest = await pinterest(text); // Dapatkan hasil pencarian dari Pinterest
				let selectedImages = anutrest.slice(0, 5); // Ambil 5 gambar pertama dari hasil pencarian

				// Kirim gambar satu per satu dengan caption
				let messages = selectedImages.map(url => ({
					image: { url },
					caption: '⭔ Media Url: ' + url
				}));

				// Kirim gambar-gambar ke chat
				for (let message of messages) {
					await aldev.sendMessage(m.chat, message, { quoted: m });
				}

				reply('✅ 5 Gambar Pinterest berhasil dikirim!');
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'savepin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return reply(`Link Invalid!!`)
				try {
					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
					if (media.format === 'MP4') {
						await aldev.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await aldev.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return reply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
					reply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quoteanime':
			case 'animequote':
			case 'quotesanime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				try {
					let quotes = await quotesAnime();
					if (!quotes || quotes.length === 0) {
						return reply(`⚠️ Wah, Mora gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
					}

					let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

					await aldev.sendMessage(
						m.chat,
						{
							image: { url: randomQuote.gambar },
							caption: `🎌 *Quote Anime* 🎌\n\n` +
							`🗣️ *Karakter:* ${randomQuote.karakter || '-'}\n` +
							`📺 *Anime:* ${randomQuote.anime || '-'}\n` +
							`🎬 *Episode:* ${randomQuote.episode || '-'}\n` +
							`📅 *Diunggah:* ${randomQuote.up_at || '-'}\n\n` +
							`💬 *Quote:* "${randomQuote.quotes || '-'}"\n\n` +
							`🔗 *Sumber:* ${randomQuote.link}`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await reply(`❌ Wah, ada kesalahan waktu ambil quote anime nih, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) {
					return reply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
				}
				const malScraper = require('mal-scraper');
				await reply('⏳ *Tunggu sebentar ya, Mora lagi cari datanya...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return reply('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
				}
				let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
				await aldev.sendMessage(
					m.chat,
					{ 
						image: { url: anime.picture || 'https://files.catbox.moe/k7tv3s.jpg' }, 
						caption: animeInfo 
					},
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'checkme':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let namaTarget = args.join(" ");
				let idPengirim = `${m.sender}`;
				const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
				const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
				const tingkatBucin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeren = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
				const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
				const moralBaik = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const moralBuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKepintaran = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeberanian = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKetakutan = Array.from({ length: 100 }, (_, i) => (i + 1).toString());

				let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
				let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
				let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
				let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
				let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
				let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
				let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
				let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
				let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
				let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
				let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
				let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama:* ${pushname}\n✨ *Karakteristik:* ${sifatAcak}\n🎯 *Hobi:* ${hobiAcak}\n❤️ *Tingkat Bucin:* ${bucinAcak}%\n🌟 *Tingkat Keren:* ${kerenAcak}%\n😎 *Ketampanan:* ${tampanAcak}\n🧠 *Watak:* ${watakAcak}\n💎 *Moral Baik:* ${moralBaikAcak}%\n🔥 *Moral Buruk:* ${moralBurukAcak}%\n📊 *Kepintaran:* ${pintarAcak}%\n🛡️ *Keberanian:* ${beraniAcak}%\n👻 *Ketakutan:* ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
				try {
					ppuser = await aldev.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/k7tv3s.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				aldev.sendMessage(
					m.chat, 
					{ image: fotoProfil, caption: profil, mentions: [idPengirim] },
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mitos': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				reply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktaunik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				reply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktakucing': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				reply(randomFakta);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'joke': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				reply(randomJoke);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'suit': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return reply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				reply(hasil);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekganteng': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😎 Lumayan ganteng sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				reply(`👑 *Cek Ganteng*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!quoted) return reply(`Kirim/Balas Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return reply(`Kirim/Balas Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Waifu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi waifu idaman!' :
					'😬 Ehm, mungkin waifu-nya butuh upgrade dikit...';
				reply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekkpribadian': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const kepribadian = [
					'🧠 Cerdas dan bijaksana.',
					'❤️ Penuh kasih sayang dan perhatian.',
					'🔥 Bersemangat dan penuh energi.',
					'🎭 Misterius dan sulit ditebak.',
					'😄 Ramah dan menyenangkan.',
					'😎 Cool dan tenang dalam segala situasi.',
					'😅 Sering baperan, tapi baik hati.'
				];
				const randomKepribadian = kepribadian[Math.floor(Math.random() * kepribadian.length)];
				reply(`🪄 *Cek Kepribadian*\n\nKakak memiliki kepribadian:\n${randomKepribadian}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekmasadepan': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const masaDepan = [
					'💼 Akan jadi bos besar di perusahaan ternama!',
					'🏝️ Pensiun muda dan tinggal di pulau tropis.',
					'💖 Akan menemukan cinta sejati dalam waktu dekat.',
					'📚 Akan jadi orang yang sangat berilmu dan dihormati.',
					'💸 Kaya raya dengan bisnis sukses!',
					'🎭 Masa depan Kakak penuh misteri dan kejutan!',
					'😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
				];
				const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
				reply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotesgalau': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const quotes = [
					'💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
					'🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
					'😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
					'💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
					'🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
				];
				const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
				reply(`💔 *Quotes Galau*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'truth': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				reply(`🤔 *Truth*\n\n${randomTruth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'dare': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				reply(`😈 *Dare*\n\n${randomDare}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'addlist':
				if (!isCreator) return reply(mess.owner);
				if (!m.isGroup) return reply(mess.group);
				var args1 = text.split("@")[0]
				var args2 = text.split("@")[1]
				if (!q.includes("@")) return reply(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
				if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
				if (/image/.test(mime)) {
					media = await aldev.downloadAndSaveMediaMessage(quoted)
					mem = await fileIO(media)
					addResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
					reply(`Successfully set list message with key : *${args1}*`)
					if (fs.existsSync(media)) fs.unlinkSync(media)
				} else {
					addResponList(m.chat, args1, args2, false, '-', db_respon_list)
					reply(`Successful Add List With Key : *${args1}*`)
				}
			break;

			case 'dellist':
				if (!isCreator) return reply(mess.owner);
				if (!m.isGroup) return reply(mess.group);
				if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
				if (!q) return reply(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
				if (!isAlreadyResponList(m.chat, q, db_respon_list)) return reply(`Item list by Name *${q}* not in the database!`)
				delResponList(m.chat, q, db_respon_list)
				reply(`Successfully delete list message with key *${q}*`)
			break;

			case 'store':
			case 'shop': 
			case 'ceklist': {
				let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
				for (let x of db_respon_list) {
					teks += `│⭔ ${x.key}\n`
				}
				teks += `│\n└────────────⭓\n\n`
				reply(teks)
			}
			break;

			case 'getjoinrequest':{
				if (!m.isGroup) return reply(mess.group);
				if (!isBotAdmins) return reply(mess.botAdmin);
				if (!isAdmins && !isCreator) return reply(mess.admin);
				const response = await aldev.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					aldev.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
					replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
					replyMessage += `\n🧪 *Method:* ${request_method}`;
					replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
				});
				aldev.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break;

			case 'mega':{
				try {
					if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
					if (!text) return reply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
					const { File } = require('megajs');
					const file = File.fromURL(text);
					await file.loadAttributes();
					if (file.size >= 300000000) return reply('Error: File size is too large (Maximum Size: 300MB)');
					const downloadingMessage = `🌩️ Downloading file... Please wait.`;
					reply(downloadingMessage);
					const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
					const data = await file.downloadBuffer();
					const fileExtension = path.extname(file.name).toLowerCase();
					const mimeTypes = {
						".mp4": "video/mp4",
						".pdf": "application/pdf",
						".zip": "application/zip",
						".rar": "application/x-rar-compressed",
						".7z": "application/x-7z-compressed",
						".jpg": "image/jpeg",
						".jpeg": "image/jpeg",
						".png": "image/png",
					};
					let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
					await aldev.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
				} catch (error) {
					return reply(`Error: ${error.message}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ai':
			case 'mora':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return m.reply(`Hello, how can I help you?`)
				if (!m.isGroup) {
					try {
						await emote('⏱️');
						const data = await fetchJson(`https://api.khaliddesu.my.id/api/mora?query=${text}&username=${pushname}`);
						await emote('✅');
						aldev.sendMessage(m.chat, {
							text: data.result
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						reply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				} else {
					try {
						await emote('⏱️');
						const data = await fetchJson(`https://api.khaliddesu.my.id/api/mora?query=${text}&username=${pushname}`);
						await emote('✅');
						aldev.sendMessage(m.chat, {
							text: data.result
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						reply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wallpaper': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n${prefix + command} nature 2`);
				const [query, page] = text.split(' ');
				try {
					const wallpapers = await wallpaper(query, page || '1');
					if (wallpapers.length === 0) return reply(`⚠️ Mora gak nemu wallpaper dengan kata kunci "${query}", Kak! 🥲`);
					let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Tipe:* ${wp.type}`).join('\n\n');
					reply(`🎨 *Hasil Wallpaper untuk:* ${query}\n\n${result}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil wallpaper, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikimedia': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci*\n\n🤔 *Contohnya:*\n\n${prefix + command} sunset`);
				try {
					const results = await wikimedia(text);
					if (results.length === 0) return reply(`⚠️ Mora gak nemu gambar di Wikimedia dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(img => `🖼️ *${img.title || 'Tanpa Judul'}*\n🔗 ${img.source}`).join('\n\n');
					reply(`🌐 *Hasil Pencarian Wikimedia untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikipedia':
			case 'wiki': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`Hmm... Apa ya yang kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊`);
				try {
					const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
					const $ = cheerio.load(link.data);
					let header = $('#firstHeading').text().trim();
					let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
					if (!header || !output) {
						return reply('Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!');
					}
					reply(`📛 *Judul :* ${header}\n\n✨ *Deskripsi Singkat:* ${output}\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄`);
				} catch (err) {
					reply('Wah, ada yang error nih! Gak bisa menemukan apa yang kamu cari 😓. Coba lagi nanti ya!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'happymod': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
				try {
					const results = await happymod(text);
					if (results.length === 0) return reply(`⚠️ Mora gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating:* ${app.rating}\n🔗 ${app.link}`).join('\n\n');
					reply(`📦 *Hasil Pencarian HappyMod untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ringtone': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return reply(`⚠️ Gunakan dengan cara: ${prefix + command} *judul ringtone*\n\n🤔 *Contohnya:*\n\n${prefix + command} iPhone`);
				try {
					const results = await ringtone(text);
					if (results.length === 0) return reply(`⚠️ Mora gak nemu ringtone dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
					reply(`🔊 *Hasil Pencarian Ringtone untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					reply(`❌ Ada masalah waktu ambil ringtone, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'traceanime': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				try {
					let q = m.quoted ? m.quoted : m;
					let mime = (q.msg || q).mimetype || q.mediaType || "";
					if (!mime.startsWith('image')) {
						return reply("*Tolong kirim gambar terlebih dahulu* 📸");
					}
					let data = await aldev.downloadAndSaveMediaMessage(q);
					let images = await fileIO(data);
					let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
					console.log("API URL:", apiUrl);
					let response = await fetch(apiUrl);
					let result = await response.json();
					console.log("API Response:", result);
					if (!result || result.error || result.result.length === 0) {
						return reply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
					}
					let { anilist, from, to, similarity, video, image, episode } = result.result[0];
					let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
					let message = `✨ *Anime yang Terdeteksi:* ${animeTitle}\n`;
					if (anilist.synonyms && anilist.synonyms.length > 0) {
						message += `✨ *Sinonim:* ${anilist.synonyms.join(", ")}\n`;
					}
					message += `✨ *Tingkat Kesesuaian:* ${similarity.toFixed(2)}%\n`;
					message += `✨ *Durasi Waktu:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
					if (episode) {
						message += `✨ *Episode:* ${episode}\n`;
					}
					console.log("Informasi Anime:", {
						animeTitle,
						synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Tidak Tersedia",
						similarity,
						timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
						video,
						episode,
					});
					await aldev.sendMessage(m.chat, { video: { url: video }, caption: message }, { quoted: m });
				} catch (error) {
					console.error("Error:", error);
					reply("*Error: Tidak dapat melacak anime atau mengirim video.* 😞");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'otakudesu':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				let data = await otakuDesu.ongoing();
				let response = `「 *JADWAL ANIME* 」\n\n`
				for (let i of data) {
					response += `*💬 Judul :* ${i.title}\n`
					response += `*📺 Eps :* ${i.episode}\n`
					response += `*🔗 URL :* ${i.link}\n\n`
				}
				aldev.sendMessage(m.chat, {
					text: response,
					contextInfo: {
						isForwarded: true,
						forwardingScore: 1,
						externalAdReply: {
							showAdAttribution: true,
							title: 'Ini pemberitahuan Anime terbaru!',
							mediaType: 1,
							previewType: 1,
							body: 'Halo Kak 👋',
							thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
							renderLargerThumbnail: false,
							mediaUrl: 'https://api.khaliddesu.my.id',
							sourceUrl: 'https://api.khaliddesu.my.id'
						}
					}
				}, {
					quoted: m
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'kusonimeinfo':
			case 'animeinfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				try {
					const animeList = await Kusonime.info();
					if (animeList.length === 0) {
						return m.reply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
					}
					let response = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
					animeList.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mengambil informasi anime terbaru.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break
case 'jadwalsholat': {
  if (!q) return reply('☘️ *Masukkan Nama Kota Atau Daerah*');
  
  const city = q.toLowerCase();
  try {
    const result = await JadwalSholat(city);
    
    if (result.includes("⚠️ Terjadi kesalahan")) {
reply(result);
    } else {
const data = JSON.parse(result);
const message = `*Jadwal Sholat :* _${data.kota}_\n\n*Imsak :* _${data.jadwal.imsak}_\n*Subuh :* _${data.jadwal.subuh}_\n*Dzuhur :* _${data.jadwal.dzuhur}_\n*Ashar :* _${data.jadwal.ashar}_\n*Maghrib :* _${data.jadwal.maghrib}_\n*Isyak :* _${data.jadwal.isyak}_\n\n_${data.kota} (${data.tanggal})_\n\n*Response Generated By AL Dev*`;
reply(message);
    }
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
			case 'kisahnabi': {
				if (!text) return m.reply(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`)
				try {
					let tod = await fetchJson(`https://raw.githubusercontent.com/dcode-al/database/refs/heads/main/Islami/Kisah-nabi/${text}.json`) //perlu ganti
					const name = tod.name
					if (name === "Error") return m.reply("Ketik Nama Yang Valid")
					const ultah = tod.thn_kelahiran
					const umur = tod.usia
					const asal = tod.tmp
					const cerita = tod.description
					var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
					reply(kisah)
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			break
case 'infosholat': {
				try {
					let tod = await fetchJson(`https://api.agatz.xyz/api/jadwalsholat?kota=medan`) //perlu ganti
					const subuh = tod.data.subuh
					const ultah = tod.data.dhuhur
					const umur = tod.data.ashar
					const asal = tod.data.maghrib
					const cerita = tod.data.isya
					var hdwl = `_*JADWAL SHOLAT*_
Subuh : ${subuh}
Ashar : ${ultah}
Dzuhur : ${umur}
Maghrib : ${asal}
Isya : ${cerita}`
					reply(hdwl)
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Gagal menerima data jadwal sholat.');
				}
			}
			break
case 'gempaterkini': {
				try {
					let tod = await fetchJson(`https://api.agatz.xyz/api/gempa`) //perlu ganti
					const tgl = tod.data.tanggal
					const waktu = tod.data.waktu
					const pts = tod.data.potensi
					const mgn = tod.data.magnitude
					const kdl = tod.data.kedalaman
					const lks = tod.data.wilayah
					var gmp = `_*Info Gempa Terkini*_
Tanggal : ${tgl}
Jam : ${waktu}
Potensi : ${pts}
Kekuatan Gempa : ${mgn}
Kedalaman Gempa : ${kdl}
Lokasi Gempa : ${lks}`
					reply(gmp)
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Gagal menerima data terbaru Gempa.');
				}
			}
			break
			case 'quranaudio':
			case 'alquranaudio': {
				if (!text) return m.reply(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)
				try {
					let todi = await fetchJson(`https://raw.githubusercontent.com/dcode-al/database/refs/heads/main/Islami/quranaudio.json`)
					const tod = await todi[text - 1]
					const arti = tod.asma.translation.id
					const audio = tod.audio
					const asma = tod.asma.ar.short
					const ayat = tod.ayatCount
					const keterangan = tod.tafsir
					const nama = tod.asma.id.short
					const nomor = tod.number
					const tempat = tod.type
					var quran = `*乂 QURAN AUDIO*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
					await reply(quran)
					await aldev.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			break
			case 'surah': {
  if (!q) return m.reply('☘️ *Masukkan Nomor Surah*');
  const surahNumber = q.toLowerCase();
  try {
    const result = await Surah(surahNumber);
    if (result.ayat && result.ayat.length > 0) {
let Teks = `📑 Miko ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ᴋᴀʟᴀᴍ\n`;
result.ayat.forEach((ayat, index) => {
  Teks += `\n*Ayat ${index + 1}*\n`;
  Teks += `*Arab :* ${ayat.arab}\n`;
  Teks += `*Latin :* _${ayat.latin}_\n\n`;
  Teks += ` _${ayat.indo}_\n`;
  Teks += '\n==============================\n';
});
Teks += `\n*${result.watermark}*`;
reply(Teks);
    } else {
reply('⚠️ *Data Surah Tidak Ditemukan!*');
    }
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
}
break
case 'doaharian':{
let teks = `
Untuk memilih doa, silahkan ketik .doaharian nomor doa.
Contoh : .doaharian 2

*LIST DOA*

1.Doa Sebelum Makan
2.Doa Sesudah Makan
3.Doa Sesudah Minum
4.Doa Ketika Makan Lupa Membaca Doa
5.Doa Sebelum Tidur
6.Doa Ketika Mimpi Buruk
7.Doa Ketika Mendapat Mimpi Baik
8.Doa Bangun Tidur
9.Doa Masuk Kamar Mandi Atau Toilet
10.Doa Istinja
11.Doa Keluar Kamar Mandi Atau Toilet
12.Doa Menjelang Sholat Shubuh
13.Doa Menyambut Pagi hari
14.Doa Menyambut Sore Hari
15.Doa Ketika Bercermin
16.Doa Masuk Rumah
17.Doa Keluar Rumah / Doa Bepergian
18.Doa Memakai Pakaian
19.Doa Memakai Pakaian Baru
20.Doa Melepas Pakaian
21.Doa Memohon Ilmu Yang Bermanfaat
22.Doa Sebelum Belajar
23.Doa Sesudah Belajar
24.Doa Berpergian
25.Doa Naik Kendaraan
26.Doa Naik Kapal
27.Doa Ketika Sampai di Tempat Tujuan
28.Doa Ketika Menuju Masjid
29.Doa Masuk Masjid
30.Doa Keluar Masjid
31.Doa Akan Membaca Al-Qur'an
32.Doa Setelah Membaca Al-Qur'an
33.Doa Niat Wudhu
34.Doa Setelah Wudhu
35.Doa akan Mandi
`
if(!q) return reply(teks)

	let res = await(await fetch('https://raw.githubusercontent.com/dcode-al/database/refs/heads/main/Islami/doaharian.json')).json()
	let data = res.result.data[q] 
let toks = `
Arabic: ${data.arabic}\n
Latin: ${data.latin}\n
Arti: ${data.translation}

`
reply(toks)
}
break

			case 'listsurat': 
			case 'listsurah':{
			let surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
					reply(surah)
				}
			break
			case 'ayatkursi': {
			reply(`*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)`)
}
break

			case 'kusonimesearch':
			case 'animesearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				if (!text) return m.reply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
				try {
					const searchResults = await Kusonime.search(text);
					if (typeof searchResults === 'string') {
						return m.reply(`⚠️ ${searchResults}`);
					}
					let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
					searchResults.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gempa': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				try {
					let result = await gempa();
					let gempaData = result.data;
					let response = `「 *📢 MSG GEMPA TERBARU* 」\n\n`;
					response += `*🌍 Sumber:* ${result.source}\n`;
					response += `*📊 Magnitudo:* ${gempaData.magnitude.trim()}\n`;
					response += `*📏 Kedalaman:* ${gempaData.kedalaman.trim()}\n`;
					response += `*🗺️ Lintang & Bujur:* ${gempaData.lintang_bujur.trim()}\n`;
					response += `*🕒 Waktu:* ${gempaData.waktu.trim()}\n`;
					response += `*📍 Wilayah:* ${gempaData.wilayah.trim()}\n`;
					response += `*😱 Dirasakan:* ${gempaData.dirasakan.trim()}\n\n`;
					response += `Tetap waspada dan ikuti arahan dari pihak berwenang!`;
					if (gempaData.imagemap) {
						aldev.sendMessage(m.chat, {
							image: { url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}` },
							caption: response,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 1,
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					} else {
						aldev.sendMessage(m.chat, {
							text: response,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 1,
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					}
				} catch (error) {
					console.error(error);
					aldev.sendMessage(m.chat, {
						text: '⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa.'
					}, {
						quoted: m
					});
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'react': {
				aldev.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			
			case 'tagme': {
				aldev.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break

			case 'totalfeature':
			case 'totalfitur': 
			case 'totalcmd': 
			case 'totalcommand': 
				reply(`✨ *Total Fitur yang Tersedia di Khalid:* ${feature()} Fitur`);
			break;
			
      case 'bantuanhelp':{
			let bhlp = `Anda sedang menggunakan layanan bantuan dari Pusat Pelayanan Kelurahan Teladan Barat.\n\nUntuk memulai layanan, anda dapat mengetik *.lapor* atau *.laporkepling* kemudian di-ikuti dengan laporan anda.`
					reply(bhlp)
				}
			break
			
case 'wikidi':{
			let wikidii = `Anda sedang menggunakan layanan Wikipedia dari Pusat Pelayanan Kelurahan Teladan Barat.\n\nUntuk memulai layanan, anda dapat mengetik *.wikipedia* kemudian di-ikuti dengan topik yang ingin anda ketahui.`
					reply(wikidii)
				}
			break
			
case 'callcenter':{
			let ccet = `Anda butuh bantuan darurat?\n\nAnda dapat menghubungi nomor berikut:\nPolisi: *110*\nPemadam Kebakaran: *113*\nAmbulance: *118 dan 119*\nSAR atau BASARNAS: *115*\nJasa Marga: *14080*\nPLN: *123*\nBMKG: *196*\nKonseling Kekerasan terhadap Perempuan dan Anak: *129 atau 021-1500598*.\n\n*Nomor-nomor ini penting dalam keadaan darurat untuk menghubungi pihak berwenang atau layanan terkait dengan cepat.*`
					reply(ccet)
				}
			break
			
case 'lokkantor':{
			let lkkn = `*LOKASI KANTOR*\nJl. Sisingamangaraja Gg. Mesjid No.19, Teladan Bar., Kec. Medan Kota, Kota Medan, Sumatera Utara 20212.\nAtau anda dapat menggunakan Google Maps: https://maps.app.goo.gl/cAg2EtUJQQpFzHfG6`
					reply(lkkn)
				}
			break
			
			case 'cmd':
			case 'menu':{
				let MenuBiasa = `Hallo ${m.pushName}👋,
Saat ini anda sedang berbicara dengan TEBAR-BOT, layanan untuk Kelurahan Teladan Barat.

⌬〡 Ketik *.lapor* atau *.laporkepling* untuk mengirimkan laporan kepada pihak kelurahan.
⌬〡 Untuk fitur lebih lanjut, dapat menekan menu Fitur dibawah!
⌬〡 Bot sedang tahap pengembangan, terima kasih.\n\n${Biasa(prefix)}`
let MenuButton = `Hallo ${m.pushName}👋,
Saat ini anda sedang berbicara dengan TEBAR-BOT, layanan untuk Kelurahan Teladan Barat.

⌬〡 Ketik *.lapor* atau *.laporkepling* untuk mengirimkan laporan kepada pihak kelurahan.
⌬〡 Untuk fitur lebih lanjut, dapat menekan menu Fitur dibawah!
⌬〡 Bot sedang tahap pengembangan, terima kasih.`
let button = [{
	"name": "single_select",
	"buttonParamsJson": `{
		"title": "TEKAN DISINI",
		"sections": [{
			"title": "Selamat Datang di Pusat Pelayanan",
			"rows": [{
				"title": "Menu Bantuan",
				"description": "Jika ingin melaporkan ke pihak kelurahan, pilih menu ini.",
				"id": "${prefix}bantuanhelp"
			},
			{
				"title": "Cek Cuaca",
				"description": "Ingin tahu info cuaca untuk daerah Medan? Pilih menu ini.",
				"id": "${prefix}cekcuaca"
			},
			{
				"title": "Doa Islami Harian",
				"description": "Menampilkan doa sehari-hari.",
				"id": "${prefix}doaharian"
			},
			{
				"title": "Wikipedia",
				"description": "Untuk menambah pengetahuan umum, pilih menu ini.",
				"id": "${prefix}wikidi"
			},
			{
				"title": "Layanan Call Center Darurat",
				"description": "Untuk mengetahui nomor darurat Polisi, DAMKAR, dll.",
				"id": "${prefix}callcenter"
			},
			{
				"title": "Lokasi Kantor",
				"description": "Mengenai Info Lokasi Titik Kantor Kelurahan Teladan Barat",
				"id": "${prefix}lokkantor"
			},
			{
				"title": "Jadwal Sholat",
				"description": "Menampilkan Info Jadwal Sholat untuk Daerah Medan",
				"id": "${prefix}infosholat"
			},
			{
				"title": "Info Gempa",
				"description": "Menampilkan Info Gempa Terbaru dari BMKG",
				"id": "${prefix}gempaterkini"
			},
			{
				"title": "Menu Store",
				"description": "Menampilkan Menu Store",
				"id": "${prefix}storemenu"
			},
			{
				"title": "Menu Other",
				"description": "Menampilkan Menu Other",
				"id": "${prefix}othermenu"
			}]
		}]
	}`
}]
if (setmenu === 'Biasa') {
aldev.sendMessage(m.chat, {
/*video: fs.readFileSync('./data/video/menu.mp4')*/
image : thumbmenu,
caption: MenuBiasa,
//gifPlayback: true,
contextInfo: {
  externalAdReply: {
  showAdAttribution: true, 
  title: `LAYANAN PERMASYARAKATAN TELADAN BARAT`,
  body: "",
  thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
  sourceUrl: "https://portal.medan.go.id/",
  mediaType: 1,
  renderLargerThumbnail: false
}
  }
  }, {
quoted: m
  })
} else if (setmenu === 'Button') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
  "messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
  },
  interactiveMessage: proto.Message.InteractiveMessage.create({
   contextInfo: {
   mentionedJid: [m.sender]
    }, 
    body: proto.Message.InteractiveMessage.Body.create({
text: MenuButton,
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
     text: `${global.footer}`,
    }),
    header: proto.Message.InteractiveMessage.Header.create({
subtitle: "TEBAR-BOT",
hasMediaAttachment: true,...(await prepareWAMessageMedia({ 
     document: fs.readFileSync('./data/image/thumbnail8.jpg'),
	mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	fileLength: 10000000000,
	pageCount: 99,
	jpegThumbnail: fs.readFileSync("./data/image/thumbnail8.jpg"),
	fileName: `LAYANAN PERMASYARAKATAN TELADAN BARAT`,
}, { upload: aldev.waUploadToServer }))
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
    })
  })
    }
  }
}, { userJid: m.chat, quoted: m })
aldev.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
} else if (setmenu === 'ButtonV2') {
aldev.sendMessage(m.chat, {
  text: MenuButton,
  footer: `${global.footer}`,
  buttons: [
  {
    buttonId: '.bantuanhelp',
    buttonText: {
displayText: 'KIRIM LAPORAN'
    },
    type: 1,
  },
  {
    buttonId: '.lokkantor',
    buttonText: {
displayText: 'LOKASI KANTOR'
    },
    type: 1,
  },
  {
    buttonId: '.menusimple',
    buttonText: {
displayText: 'FITUR LAINNYA'
    },
    type: 4,
    nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
  title: 'FITUR LAINNYA',
  sections: [
    {
title: 'Selamat Datang di Pusat Pelayanan Teladan Barat',
highlight_label: '',
rows: [
  {
    header: '',
    title: 'Kirim Laporan',
    description: 'Untuk mengirimkan laporan ke pihak kelurahan.',
    id: '.lapor',
  },
  {
    header: '',
    title: 'Call Center Darurat',
    description: 'Menampilkan Nomor-nomor Darurat untuk Bantuan',
    id: '.callcenter'
  },
  {
    header: '',
    title: 'Fitur Lainnya',
    description: 'Menampilkan Semua Fitur',
    id: '.menusimple'
  },
],
    },
  ],
}),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
			}
			break
			
case 'menusimple':{
let MenuBiasa = `Hallo ${m.pushName}👋,
Saat ini anda sedang berbicara dengan TEBAR-BOT, layanan untuk Kelurahan Teladan Barat.

⌬〡 Ketik *.lapor* atau *.laporkepling* untuk mengirimkan laporan kepada pihak kelurahan.
⌬〡 Untuk fitur lebih lanjut, dapat menekan menu Fitur dibawah!
⌬〡 Bot sedang tahap pengembangan, terima kasih.\n\n${Biasa(prefix)}`
aldev.sendMessage(m.chat, {
/*video: fs.readFileSync('./data/video/menu.mp4')*/
image : thumbmenu,
caption: MenuBiasa,
//gifPlayback: true,
contextInfo: {
  externalAdReply: {
  showAdAttribution: true, 
  title: `TEBAR-BOT`,
  body: "",
  thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
  sourceUrl: "https://portal.medan.go.id/",
  mediaType: 1,
  renderLargerThumbnail: false
}
  }
  }, {
quoted: m
  })
}
break
case 'sc': case 'script': {
aldev.sendMessage(m.chat, {
image: { url: 'https://files.catbox.moe/0n655t.jpg' },
caption: '*</> SC TEBAR-BOT MD</>*\n\nSc di Chanel AL\n\n\n> Minimal Subscribe jangan cuma ambil sc terus Rename',
contextInfo: {
  externalAdReply: {
  showAdAttribution: true, 
  title: `Sc TEBAR-BOT MD`,
  body: "Subscribe",
  thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
  sourceUrl: "https://portal.medan.go.id/",
  mediaType: 1,
  renderLargerThumbnail: false
}}}, { quoted: m })
}
break
case 'menubutton':{
let MenuButton = `Hallo ${m.pushName}👋,
Saat ini anda sedang berbicara dengan TEBAR-BOT, layanan untuk Kelurahan Teladan Barat.

⌬〡 Ketik *.lapor* untuk mengirimkan laporan kepada pihak kelurahan.
⌬〡 Untuk fitur lebih lanjut, dapat menekan menu Fitur dibawah!
⌬〡 Bot sedang tahap pengembangan, terima kasih.`
let button = [{
	"name": "single_select",
	"buttonParamsJson": `{
		"title": "List Menu",
		"sections": [{
			"title": "Select Menu",
			"rows": [{
				"title": "All Menu",
				"description": "Menampilkan Semua Menu Bot TEBAR-BOT",
				"id": "${prefix}allmenu"
			},
			{
				"title": "Menu Ai",
				"description": "Menampilkan Menu Ai",
				"id": "${prefix}aimenu"
			},
			{
				"title": "Menu Islami",
				"description": "Menampilkan Menu Islami",
				"id": "${prefix}islamimenu"
			},
			{
				"title": "Menu Owner",
				"description": "Menampilkan Menu owner",
				"id": "${prefix}ownermenu"
			},
			{
				"title": "Menu Group",
				"description": "Menampilkan Menu Group",
				"id": "${prefix}groupmenu"
			},
			{
				"title": "Menu Search",
				"description": "Menampilkan Menu Search",
				"id": "${prefix}searchmenu"
			},
			{
				"title": "Menu Download",
				"description": "Menampilkan Menu Download",
				"id": "${prefix}downloadmenu"
			},
			{
				"title": "Menu Convert",
				"description": "Menampilkan Menu Convert",
				"id": "${prefix}convertmenu"
			},
			{
				"title": "Menu Store",
				"description": "Menampilkan Menu Store",
				"id": "${prefix}storemenu"
			},
			{
				"title": "Menu Other",
				"description": "Menampilkan Menu Other",
				"id": "${prefix}othermenu"
			}]
		}]
	}`
}]
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
  "messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
  },
  interactiveMessage: proto.Message.InteractiveMessage.create({
   contextInfo: {
   mentionedJid: [m.sender]
    }, 
    body: proto.Message.InteractiveMessage.Body.create({
text: MenuButton,
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
     text: `${global.footer}`,
    }),
    header: proto.Message.InteractiveMessage.Header.create({
subtitle: "TEBAR-BOT",
hasMediaAttachment: true,...(await prepareWAMessageMedia({ 
     document: fs.readFileSync('./data/image/thumbnail8.jpg'),
	mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	fileLength: 10000000000,
	pageCount: 99,
	jpegThumbnail: fs.readFileSync("./data/image/thumbnail8.jpg"),
	fileName: `LAYANAN PERMASYARAKATAN TELADAN BARAT`,
}, { upload: aldev.waUploadToServer }))
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
    })
  })
    }
  }
}, { userJid: m.chat, quoted: m })
aldev.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break
case 'setmenu':
if (!isCreator) return reply(mess.owner)
if ((args[0]) === 'Biasa'|| (args[0]) === 'Biasa' ){
setmenu = "Biasa"
reply(`Sudah Bre Udah Mode *Biasa*`)
} else if ((args[0]) === 'Button'|| (args[0]) === 'button' ){
setmenu = "Button"
reply(`Sudah Bre Udah Mode *Button*`)
} if ((args[0]) === 'ButtonV2'|| (args[0]) === 'ButtonV2' ){
setmenu = "ButtonV2"
reply(`Sudah Bre Udah Mode *ButtonV2*`)
} else if (!q) {
reply(`Example: ${prefix + command} Biasa/Button`)
} else {
reply("⚠️ *Menu Tidak Ditemukan*")
}
break 
			case 'allmenu': {
			let hehe = `Hallo ${m.pushName }👋,
Saat ini anda sedang berbicara dengan TEBAR-BOT, layanan untuk Kelurahan Teladan Barat.

⌬〡 Ketik *.lapor* untuk mengirimkan laporan kepada pihak kelurahan.
⌬〡 Untuk fitur lebih lanjut, dapat menekan menu Fitur dibawah!
⌬〡 Bot sedang tahap pengembangan, terima kasih.

${Ai(prefix)}
${storeMenu(prefix)}
${downloadMenu(prefix)}
${searchMenu(prefix)}
${otherMenu(prefix)}
${convertMenu(prefix)}
${Islami(prefix)}
${groupMenu(prefix)}`;
aldev.sendMessage(m.chat, {
video: {
url: 'https://cdn.elxyzgpt.xyz/file/Kx4MZM4c0B.mp4'
},
mimetype: 'video/mp4',
fileLength: 1000000,
caption: hehe,
gifPlayback: true,
gifAttribution: 5,
 contextInfo: {
  mentionedJid: [m.sender],
	 	forwardingScore: 9999,
    	  isForwarded: true,
		  forwardedNewsletterMessageInfo: {
	  	  newsletterJid: '120363299719848392@newsletter',
		  serverMessageId: null,
		  newsletterName: `${global.saluranName}`
		  },
externalAdReply: {
  showAdAttribution: true,
  forwardingScore: 2023,
  title: '⟡ᴍ ᴇ ɴ ᴜ - ʙ ᴏ ᴛ - ʏ ᴀ ᴇ ᴍ ɪ ᴋ ᴏ⟡',
  thumbnailUrl: 'https://files.catbox.moe/k7tv3s.jpg',
  sourceUrl: 'https://taplink.cc/aldevoloper',
  mediaType: 1,
  renderLargerThumbnail: true,
  mentionedJid: [m.sender]
  }}}, { quoted: payment })
  let bjir = 'https://files.catbox.moe/e7lzou.jpg'
    let muskk = {
  audio: { url: 'https://files.catbox.moe/kpr44c.mp3' }, 
   mimetype: 'audio/mp4',  
   ptt: true, 
   contextInfo: { 
    forwardingScore: 999,
     isForwarded: false, 
     externalAdReply: {
     title: 'ᴀʟ ᴅᴇᴠ', 
     body: 'Kenanglah aku X Perpisahan termanis',
     sourceUrl: 'https://chat.whatsapp.com/BASFqgR4PJDIKq1hwGcCzJ', 
     thumbnailUrl: 'https://files.catbox.moe/e7lzou.jpg',}} 
};
await aldev.sendMessage(m.chat, muskk, { quoted: m }) 
			}
			break

			case 'ownermenu':
			case 'ownmenu':{
			let hehe = `${ownerMenu(prefix)}`;
			menu(hehe)
			}
			break
			case 'islamimenu':
			case 'islammenu':{
			let hehe = `${Islami(prefix)}`;
			menu(hehe)
			}
			break

			case 'groupmenu':
			case 'gcmenu':{
				let hehe = `${groupMenu(prefix)}`
				menu(hehe)
			}
			break

			case 'searchmenu':
			case 'shmenu':{
				let hehe = `${searchMenu(prefix)}`
				menu(hehe)
			}
			break

			case 'downloadmenu':
			case 'downmenu':{
				let hehe = `${downloadMenu(prefix)}`
				menu(hehe)
			}
			break

			case 'convertmenu':
			case 'toolsmenu':{
				
				let hehe = `${convertMenu(prefix)}`
				menu(hehe)
			}
			break

			case 'storemenu':
			case 'stmenu':{
				
				let hehe = `${storeMenu(prefix)}`
				menu(hehe)
			}
			break
			case 'aimenu':
			case 'menuai':{
				
				let hehe = `${Ai(prefix)}`
				menu(hehe)
			}
			break
			case 'othermenu':
			case 'othmenu':{
				
				let hehe = `${otherMenu(prefix)}`
				menu(hehe)
			}
			break

			case 'menfess': 
			case 'menfes': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return reply(mess.limit);
				this.menfes = this.menfes || {};
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (session) return reply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
				if (m.isGroup) return reply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
				if (!text || !text.includes('|')) {
					return reply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
				}
				let [namaNya, nomorNya, pesanNya] = text.split('|');
				if (!nomorNya || !pesanNya) {
					return reply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
				}
				if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
					return reply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
				}
				await emote('⏱️');
				let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\nKakak bisa:\n · Ketuk *Balas* untuk *menerima menfess*.\n · Ketuk *Tolak* untuk *menolak menfess*.\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
				let videoBuffer = VidMenu;
				let id = m.sender;
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + '@s.whatsapp.net',
					state: 'WAITING'
				};
				await aldev.sendMessage(nomorNya + '@s.whatsapp.net',{
					video: videoBuffer,
					caption: pesanTemplate,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}balasmenfess`,
							buttonText: {
								displayText: "Balas"
							}
						},
						{
							buttonId: `${prefix}tolakmenfess`,
							buttonText: {
								displayText: "Tolak"
							}
						}
					],
					viewOnce: true,
				});
				reply(`Yay! Pesan ${command} berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'balasmenfess': 
			case 'balasmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return reply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return reply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				room.state = 'CHATTING';
				this.menfes[room.id] = { ...room };
					await aldev.sendMessage(otherUser, { 
					text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`, 
					mentions: [m.sender] 
				});
				aldev.sendMessage(m.chat, { 
					text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗` 
				});
			}
			break;

			case 'tolakmenfess': 
			case 'tolakmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return reply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return reply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				await aldev.sendMessage(otherUser, { 
					text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`, 
					mentions: [m.sender] 
				});
				reply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
				delete this.menfes[room.id];
			}
			break;

			case 'stopmenfess': 
			case 'stopmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return reply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
				let otherUser = session.a === m.sender ? session.b : session.a;
				await aldev.sendMessage(otherUser, { 
					text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`, 
					mentions: [m.sender] 
				});
				reply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
				delete this.menfes[session.id];
			}
			break;

			default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					return reply(bang)
				}
				try {
					reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					reply(String(e))
				}
			}

			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await reply(evaled)
				} catch (err) {
					await reply(String(err))
				}
			}

			if (budy.startsWith('$')) {
				if (!isCreator) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return reply(err)
					if (stdout) return reply(stdout)
				})
			}

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				aldev.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				try {
					this.menfes = this.menfes || {};
					let room = Object.values(this.menfes).find(room => 
						[room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
					);
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return;
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;
						let find = Object.values(this.menfes).find(menpes => 
							[menpes.a, menpes.b].includes(m.sender)
						);
						let other = find.a === m.sender ? find.b : find.a;
						if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
							await aldev.sendMessage(other, {
								text: m.text,
								mentions: [other]
							}, { 
								quoted: fmen 
							});
						}
						if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
							let media;
							try {
								media = await m.download();
							} catch (err) {
								console.error('Gagal mengunduh media:', err);
								await aldev.sendMessage(m.sender, { text: 'Gagal mengunduh media. Pastikan media masih valid dan coba lagi.' });
								return;
							}
							let options = {
								caption: m.msg?.caption || '',
								mentions: [other]
							};
							if (m.mtype === 'imageMessage') {
								await aldev.sendMessage(other, { image: media, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'videoMessage') {
								await aldev.sendMessage(other, { video: media, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'audioMessage') {
								await aldev.sendMessage(other, { audio: media, mimetype: 'audio/mpeg', ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'documentMessage') {
								await aldev.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options }, { quoted: fmen });
							} 
							else if (m.mtype === 'stickerMessage') {
								await aldev.sendMessage(other, { sticker: media }, { quoted: fmen });
							} 
							else {
								console.warn('Tipe media tidak dikenali:', m.mtype);
							}
						}
					}
				} catch (err) {
					console.error('Error di fitur Menfess:', err);
					await aldev.sendMessage(m.sender, { text: 'Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti.' });
				}
			}
		}
	} catch (err) {
		console.log(util.format(err))
		let e = String(err)
		aldev.sendMessage(`${global.ownerNumber}`+"@s.whatsapp.net", { 
			text: "[ ERROR ]" + util.format(e), 
			contextInfo: {
				forwardingScore: 1, 
				isForwarded: true
			}
		}, {
			quoted: m
		})

		if (e.includes("conflict")) return
		if (e.includes("Cannot derive from empty media key")) return
		if (e.includes("not-authorized")) return
		if (e.includes("already-exists")) return
		if (e.includes("rate-overlimit")) return
		if (e.includes("Connection Closed")) return
		if (e.includes("Timed Out")) return
		if (e.includes("Value not found")) return
		if (e.includes("Socket connection timeout")) return
	}
};
