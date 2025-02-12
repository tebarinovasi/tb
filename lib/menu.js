const chalk = require('chalk')
const fs = require('fs')

global.Biasa = (prefix) => {
return `▢━━「 *FITUR TEBAR-BOT* 」━━▢
 *⌬ ${prefix}lapor*
 - Anda ingin mengirimkan laporan ke Kepling atau ke pihak Kelurahan? Anda dapat mengetik ${prefix}lapor kemudian diikuti dengan laporan anda.
 *⌬ ${prefix}laporkepling*
 - Anda ingin mengirimkan laporan ke Kepling secara cepat? Anda dapat mengetik ${prefix}laporkepling kemudian diikuti dengan laporan anda.
 *⌬ ${prefix}cekcuaca* 
 - Anda ingin tahu info cuaca untuk daerah Medan? Silahkan mengetik ${prefix}infocuaca untuk mendapatkan informasi.
 *⌬ ${prefix}callcenter*
 - Untuk mengetahui nomor darurat Polisi, DAMKAR, dll.
 *⌬ ${prefix}lokkantor*
 - Informasi Lokasi Kantor Kelurahan Teladan Barat.
 *⌬ ${prefix}infosholat* 
 - Menampilkan Info Jadwal Sholat untuk Daerah Medan.
 *⌬ ${prefix}gempaterkini*
 - Menampilkan Info Gempa Terbaru dari BMKG.


 *Mohon maaf, TEBAR-BOT masih dalam pengembangan. Untuk warga yang menggunakan device IPHONE, agar dapat menggunakan menu biasa.*
`}

global.Ai = (prefix) => {
return `▢━━「 *MENU AI* 」━━▢
 *⌬ ${prefix}js* 
 *⌬ ${prefix}ai*
 *⌬ ${prefix}Ask*
 *⌬ ${prefix}Html* 
 *⌬ ${prefix}GPT4*
 *⌬ ${prefix}Bing*
 *⌬ ${prefix}Felo*
 *⌬ ${prefix}Lua*
`}

global.Islami = (prefix) => {
return `▢━━「 *MENU ISLAMI* 」━━▢
 *⌬ ${prefix}listsurah* 
 *⌬ ${prefix}alquranaudio*
 *⌬ ${prefix}kisahnabi*
 *⌬ ${prefix}jadwalSholat*
 *⌬ ${prefix}Surah*
 *⌬ ${prefix}ayatkursi*
 *⌬ ${prefix}Doaharian*
`}

global.ownerMenu = (prefix) => {
return`▢━━「 *MENU OWNER* 」━━▢
 *⌬ ${prefix}backup*
 *⌬ ${prefix}addbadword*
 *⌬ ${prefix}delbadword*
 *⌬ ${prefix}listbadword*
 *⌬ ${prefix}resetdbuser*
 *⌬ ${prefix}resethit*
 *⌬ ${prefix}setmenu*
 *⌬ ${prefix}setreply*
 *⌬ ${prefix}statustext*
 *⌬ ${prefix}statusvideo*
 *⌬ ${prefix}statusimage*
 *⌬ ${prefix}statusaudio*
 *⌬ ${prefix}upsaluran*
 *⌬ ${prefix}setimgmenu*
 *⌬ ${prefix}setvidmenu*
 *⌬ ${prefix}addtitle*
 *⌬ ${prefix}deltitle*
 *⌬ ${prefix}addlimit*
 *⌬ ${prefix}dellimit*
 *⌬ ${prefix}addpremium*
 *⌬ ${prefix}delpremium*
 *⌬ ${prefix}listpremium*
 *⌬ ${prefix}addowner*
 *⌬ ${prefix}delowner*
 *⌬ ${prefix}clearsession*
 *⌬ ${prefix}join*
 *⌬ ${prefix}getsession*
 *⌬ ${prefix}myip*
 *⌬ ${prefix}shutdown*
 *⌬ ${prefix}autoread*
 *⌬ ${prefix}unavailable*
 *⌬ ${prefix}autorecordtype*
 *⌬ ${prefix}autorecord*
 *⌬ ${prefix}autotype*
 *⌬ ${prefix}autobio*
 *⌬ ${prefix}autosticker*
 *⌬ ${prefix}safesearch*
 *⌬ ${prefix}autodownload*
 *⌬ ${prefix}autoblock*
 *⌬ ${prefix}onlygc*
 *⌬ ${prefix}onlypc*
 *⌬ ${prefix}self*
 *⌬ ${prefix}public*
 *⌬ ${prefix}setexif*
 *⌬ ${prefix}setprefix*
 *⌬ ${prefix}setautoblock*
 *⌬ ${prefix}setantiforeign*
 *⌬ ${prefix}out*
 *⌬ ${prefix}pushcontact*
 *⌬ ${prefix}savecontact*
 *⌬ ${prefix}sendcontact*
 *⌬ ${prefix}getcontact*
 *⌬ ${prefix}contacttag*
 *⌬ ${prefix}ban*
 *⌬ ${prefix}unban*
 *⌬ ${prefix}getcase*
 *⌬ ${prefix}setppbot*
 *⌬ ${prefix}deleteppbot*
 *⌬ ${prefix}setbiobot*
 *⌬ ${prefix}listpc*
 *⌬ ${prefix}listgc*
 *⌬ ${prefix}creategc*
 *⌬ ${prefix}autostatusview*
 *⌬ ${prefix}anticall*
 *⌬ ${prefix}addvideo*
 *⌬ ${prefix}delvideo*
 *⌬ ${prefix}listvideo*
 *⌬ ${prefix}addimage*
 *⌬ ${prefix}delimage*
 *⌬ ${prefix}listimage*
 *⌬ ${prefix}addsticker*
 *⌬ ${prefix}delsticker*
 *⌬ ${prefix}liststicker*
 *⌬ ${prefix}addaudio*
 *⌬ ${prefix}delaudio*
 *⌬ ${prefix}listaudio*
 *⌬ ${prefix}addlist*
 *⌬ ${prefix}dellist*
 *⌬ ${prefix}ceklist*
`}

global.groupMenu = (prefix) => {
return`▢━━「 *MENU GROUP* 」━━▢
 *⌬ ${prefix}out*
 *⌬ ${prefix}pushcontact*
 *⌬ ${prefix}savecontact*
 *⌬ ${prefix}sendcontact*
 *⌬ ${prefix}getcontact*
 *⌬ ${prefix}contacttag*
 *⌬ ${prefix}antibadword*
 *⌬ ${prefix}nsfw*
 *⌬ ${prefix}antiaudio*
 *⌬ ${prefix}antiforeign*
 *⌬ ${prefix}antisticker*
 *⌬ ${prefix}antiimage*
 *⌬ ${prefix}antivideo*
 *⌬ ${prefix}antiviewonce*
 *⌬ ${prefix}antispam*
 *⌬ ${prefix}antimedia*
 *⌬ ${prefix}antidocument*
 *⌬ ${prefix}anticontact*
 *⌬ ${prefix}antilocation*
 *⌬ ${prefix}antilocation*
 *⌬ ${prefix}antilink*
 *⌬ ${prefix}antilinkgc*
 *⌬ ${prefix}mute*
 *⌬ ${prefix}welcome*
 *⌬ ${prefix}left*
 *⌬ ${prefix}adminevent*
 *⌬ ${prefix}groupevent*
 *⌬ ${prefix}kick*
 *⌬ ${prefix}add*
 *⌬ ${prefix}promote*
 *⌬ ${prefix}demote*
 *⌬ ${prefix}setnamegc*
 *⌬ ${prefix}setppgc*
 *⌬ ${prefix}deleteppgc*
 *⌬ ${prefix}setdesk*
 *⌬ ${prefix}hidetag*
 *⌬ ${prefix}listonline*
 *⌬ ${prefix}group*
 *⌬ ${prefix}editinfo*
 *⌬ ${prefix}linkgc*
 *⌬ ${prefix}resetlink*
 *⌬ ${prefix}afk*
 *⌬ ${prefix}addlist*
 *⌬ ${prefix}dellist*
 *⌬ ${prefix}ceklist*
`}

global.searchMenu = (prefix) => {
return`▢━━「 *MENU SEARCH* 」━━▢
 *⌬ ${prefix}anime*
 *⌬ ${prefix}imdb*
 *⌬ ${prefix}bukalapak*
 *⌬ ${prefix}playstore*
 *⌬ ${prefix}umma*
 *⌬ ${prefix}happymod*
 *⌬ ${prefix}ytsearch*
 *⌬ ${prefix}tiktoksearch*
 *⌬ ${prefix}pinterest*
 *⌬ ${prefix}wallpaper*
 *⌬ ${prefix}wikipedia*
 *⌬ ${prefix}wikimedia*
 *⌬ ${prefix}ringtone*
 *⌬ ${prefix}traceanime*
 *⌬ ${prefix}weather*
 *⌬ ${prefix}presetam*
 *⌬ ${prefix}soundcloud*
 *⌬ ${prefix}lyrics*
 *⌬ ${prefix}liga*
`}

global.downloadMenu = (prefix) => {
return`▢━━「 *MENU DOWN* 」━━▢
 *⌬ ${prefix}play*
 *⌬ ${prefix}ytaudio*
 *⌬ ${prefix}ytvideo*
 *⌬ ${prefix}tiktokmp4*
 *⌬ ${prefix}tiktokmp3*
 *⌬ ${prefix}tiktokslide*
 *⌬ ${prefix}instagram*
 *⌬ ${prefix}gitclone*
 *⌬ ${prefix}gdrive*
 *⌬ ${prefix}savepin*
 *⌬ ${prefix}mediafire*
`}

global.convertMenu = (prefix) => {
return`▢━━「 *MENU CONVERT* 」━━▢
 *⌬ ${prefix}brat*
 *⌬ ${prefix}ssweb*
 *⌬ ${prefix}qc*
 *⌬ ${prefix}s*
 *⌬ ${prefix}swm*
 *⌬ ${prefix}tourl*
 *⌬ ${prefix}toimage*
 *⌬ ${prefix}remini*
 *⌬ ${prefix}fetch*
 *⌬ ${prefix}toaudio*
 *⌬ ${prefix}bass*
 *⌬ ${prefix}blown*
 *⌬ ${prefix}deep*
 *⌬ ${prefix}earrape*
 *⌬ ${prefix}fast*
 *⌬ ${prefix}fat*
 *⌬ ${prefix}nightcore*
 *⌬ ${prefix}reverse*
 *⌬ ${prefix}robot*
 *⌬ ${prefix}slow*
 *⌬ ${prefix}smooth*
 *⌬ ${prefix}squirrel*
`}

global.storeMenu = (prefix) => {
return`▢━━「 *MENU STORE* 」━━▢
 *⌬ ${prefix}list*
 *⌬ ${prefix}store*
 *⌬ ${prefix}shop*
 *⌬ ${prefix}addlist*
 *⌬ ${prefix}dellist*
 *⌬ ${prefix}ceklist*
`}

global.otherMenu = (prefix) => {
return`▢━━「 *MENU OTHERS* 」━━▢
 *⌬ ${prefix}ping*
 *⌬ ${prefix}speedtest*
 *⌬ ${prefix}otakudesu*
 *⌬ ${prefix}kusonimeinfo*
 *⌬ ${prefix}kusonimesearch*
 *⌬ ${prefix}quotesanime*
 *⌬ ${prefix}gempa*
 *⌬ ${prefix}githubstalk*
 *⌬ ${prefix}npmstalk*
 *⌬ ${prefix}mlstalk*
 *⌬ ${prefix}runtime*
 *⌬ ${prefix}donate*
 *⌬ ${prefix}script*
 *⌬ ${prefix}repository*
 *⌬ ${prefix}infobot*
 *⌬ ${prefix}owner*
 *⌬ ${prefix}getch*
 *⌬ ${prefix}getgc*
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})