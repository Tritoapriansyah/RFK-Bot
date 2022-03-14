function handler(m) {
//this.sendContact(m.chat, '0', 'Mark', m)
this.sendContact(m.chat, '6285888258313', namaowner, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner|creator)$/i

module.exports = handler
