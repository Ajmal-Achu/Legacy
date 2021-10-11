const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/KITru9k.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Ajmal & Achu*

*TO CONTACT MY OWNERS

ACHU : https://wa.me/918590967139 

AJMAL : https://wa.me/919744196187*

*githublink : https://github.com/Ajmal-Achu/Nandhutty*

*audio commads : https://github.com/Ajmal-Achu/media/tree/master/uploads*
`}) 

}));
