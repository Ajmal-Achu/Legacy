const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'shop', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/4XSpeNx.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `**MELEKKUTTU STORES*

    *STORES NAME : MELEKKUTTU STORES*

    *PROPRIETOR : BASHEER & SHANAVAS*

    *LOCATION : SEARCH (MM BASHEER MELEKKUTTU) ON GOOGLE MAP THERE YOU CAN SEE A BLUE MARK NAMED AS WORK THERE YOU CAN SEE YOUR DESTINATION*

    *PROPER PLACE : EZHUMMATTOOR P.O , HOSPITAL JUNCTION, NEAR THE AUTO STAND*

    *CONTACT OWNER :* *(WHATSAPP)* 
    *+91 85471 84786*
`}) 

}));
