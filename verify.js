const speakeasy = require('speakeasy')

var verified = speakeasy.totp.verify({
    secret: 'J5m@!G9fa&>.^6AiMah7v@?Ifvx(qPc(', // secret.ascii 
    encoding: 'ascii',
    token: '971949' // the code you see in your auth app after scanning the Qrcode
})

console.log(verified)