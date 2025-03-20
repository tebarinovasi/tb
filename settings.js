const fs = require('fs')
const chalk = require('chalk')

global.botName = 'TEBAR-BOT'
global.ownerNumber = '6282174337522'
global.ownerName = 'gloomyk4ll'
global.website = 'https://tebarsiapdigital.vercel.app/'
global.wagc = 'https://portal.medan.go.id/'
global.packname = 'Creator'
global.author = 'gloomyk4ll'
global.creator = '6282174337522@s.whatsapp.net'
global.premium = ['6282174337522']
global.hituet = 0
global.prefa = ['','.','/'];
global.footer = '#MEDANUNTUKSEMUA'

global.saluran = 'https://portal.medan.go.id/'
global.saluranName = 'TEBAR-BOT'
global.sessionName = 'session'

global.github = {
      Token: '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', //Token Guthub , Cara ambilnya Liat Yt
      Owner: 'dcode-al', //Nama Github
      Repo: 'database' //Nama Repository Github
}

global.botcahx = '-'

global.setmenu = 'ButtonV2' 
global.typereply = 'v3'
global.autoblocknumber = '92'
global.antiforeignnumber = '91'
global.welcome = false;
global.anticall = false;
global.autoswview = false;
global.adminevent = false;
global.groupevent = false;

global.limit = {
	free: 30,
	premium: 9999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✅✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar fitur TEBAR-BOT nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})