let handler = async (m, { conn }) => m.reply('scnya nuru ini bang')
handler.help = ['script', 'sc']
handler.tags = ['info']
handler.command = /^s(c|cript)$/i

module.exports = handler
