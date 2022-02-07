/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `𝘿𝙊𝙉𝘼𝙎𝙄 𝙑𝙄𝘼 •

➥ 𝙂𝙊𝙋𝘼𝙔
➥ 𝙊𝙑𝙊
➥ 𝘿𝘼𝙉𝘼
➥ 𝙋𝘼𝙔𝙋𝘼𝙇
➥ 𝘽𝘼𝙉𝙆
➥ 𝙋𝙃𝙊𝙉𝙀𝙉𝙐𝙈𝘽𝙀𝙍
❍ 𝙉𝙀𝙓𝙏 → 𝙆𝙇𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 

_*silahkan pc owner untuk mengakses*_`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/rkTg7B0/donasi.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: bot ini menggunakan script,
           hydratedFooterText: Yuki Bot-Md,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿',
               url: 'https:/wa.me/6288279268363'
             }

           },
               {
             callButton: {
               displayText: '𝚙𝚑𝚘𝚗𝚎 𝚗𝚞𝚖𝚋𝚎𝚛',
               phoneNumber: '+6288279268363'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
