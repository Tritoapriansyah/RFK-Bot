let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)).buffer(), `wangy wangy wangy`, footer, 'Next', `${usedPrefix + command}`, m, false)
}

handler.help= ['hentaipic']
handler.tags = ['hentai']

handler.command = /^hentai(pic)?$/i
module.exports = handler