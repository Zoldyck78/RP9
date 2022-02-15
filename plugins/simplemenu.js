const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
let img1 = fs.readFileSync('./src/img1.png')
let img2 = fs.readFileSync('./src/img2.png')
let user = global.DATABASE.data.users[m.sender]
let levelling = require('../lib/levelling')

let { exp, limit, level, money, role } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let math = max - xp
/*conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.fromMe ? conn.user : conn.contacts[who]
pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
          teks = `𝑲𝒊𝒏𝒈 𝑶𝒇 𝑩𝒆𝒂𝒓 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`// \n\n${kyun(runtime)}`
          run = `${kyun(runtime)}`
          var itsme = `0@s.whatsapp.net`
          var split = `teks`
          const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `${teks}\n${run}`, //Kasih namalu
                            orderTitle: `${teks}\n${run}`,
                            thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
          let d = new Date(new Date + 3600000)
          let locale = 'id'
          let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
          let week = d.toLocaleDateString(locale, { weekday: 'long' })
          let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
          let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
          let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
          let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
          let muptime = clockString(_muptime)
          let uptime = clockString(_uptime)
          let totalreg = Object.keys(global.db.data.users).length
          let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
          let jawab = `
┏━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣
┃✾ Hai, ${pushname2}!
┃
┃✾ Tersisa *${limit} Limit*
┃✾ Role *${role}*
┃✾ Level *${level}* 
┃✾ XP: *TOTAL ${exp} (${exp - min} / ${xp})* [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
┗━ꕥ
┏━ꕥ 
┃✾ Hari : *${week} ${weton}* 
┃✾ Tanggal : *${date}*
┃✾ Tanggal Islam : *${dateIslamic}*
┃✾ Jam : *${time} Wib*
┗━ꕥ
┏━ꕥ
┃✾ Uptime: *${uptime} (${muptime})*
┃✾ Database: ${rtotalreg} dari ${totalreg}
┃✾ Youtube:
┃✾ https://youtu.be/Sgb5BVOW66Y
┗━━━━━━ꕥ`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: jawab,
           locationMessage: { 
           jpegThumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Link Script',
               url: 'https://bit.ly/3HUakDk',
             }

           },
               {
             urlButton: {
               displayText: 'Joint Group King Of Bear',
              url : 'https://chat.whatsapp.com/HAZ6yFgCafUAeDbNH33IrL',
             }

           },
              {
             quickReplyButton: {
               displayText: 'Tampilkan Menu',
               id: '.allmenu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
   //conn.reply(m.chat, jawab, footer, {quoted: ftrol}

    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
