const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');


var rashi_desk = ''

if (config.LANG == 'EN') {

  rashi_desk = 'Its send details of shop'
}

if (config.LANG == 'ML') {

  rashi_desk = 'ഷോപ്പ് details send ചെയ്യാൻ'
}

Asena.addCommand({pattern: 'shop', fromMe: false, desc: rashi_desk}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/WnGF9Sg.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*•━━━━╼⤏🤍AJMAL EDITZ (GFX SHOP)🤍⤎╾━━━•*
 

*💖 LOGO (THEMED) - 10* 

*💖 LETTER LOGO - 10*

*💖 STREAMING OVERLAY NORMAL - 10*

*💖 ANIMATED STREAMING OVERLAY - 10*

*💖 ANIMATED STREAMING OVERLAY WITH 3D CHARACTER - 15*

*💖 STREAM START AND END - 15*

*💖 ANIME LOGO - 10*

*💖 INTRO NORMAL - 10*

*💖 GAMING INTRO - 15*

*💖OUTRO (ALL KIND) - 10*

*💖 YOUTUBE BANNER - 5*
`}) 

}));
