let fs = require('fs')

global.owner = ['6281368962120'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'KingOfBear',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'KingOfBear',
  'https://apikey-bear2.herokuapp.com': 'KingOfBear',
  'https://apikey-bear3.herokuapp.com': 'KingOfBear',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = 'KingOfBear'
leyskey = 'dappakntlll'
bearkey = 'KingOfBear'
ApiiKey = 'https://youtu.be/Sgb5BVOW66Y'
vinkey = 'vinko'

namabot = 'Xyuru Bot'
namalu = 'Aldo belum vaksin'
footer = '\n©Xyuru Bot by:aldo ngontol'
kasihcaption = `Nih Sayang`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'Xyuru Multi device'
global.author = 'Aldo Ngontol'
global.email = 'drakipul1016@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '© 𝘼𝙡𝙙𝙤 𝙗𝙚𝙡𝙪𝙢 𝙫𝙖𝙠𝙨𝙞𝙣'
global.media = 'https://pin.it/7xb00eG.jpg'

global.wait = '_*Tunggu Sebentar Sedang Di Proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
