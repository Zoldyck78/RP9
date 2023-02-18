const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;aldo belum vaksin;;;'
                    + 'FN:xyuruu bot MD\n' // full name
                    + 'ORG:Owner xyuruu bot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281368962120:+6281368962120\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: '𝘼𝙡𝙙𝙤 𝙗𝙚𝙡𝙪𝙢 𝙫𝙖𝙠𝙨𝙞𝙣', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
