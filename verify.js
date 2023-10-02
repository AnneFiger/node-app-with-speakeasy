const speakeasy = require("speakeasy");

var verified = speakeasy.totp.verify({
    secret: '>$f4q:p%,#A>fNOH3AA4X4gZU&R#zsbr', // secret.ascii 
    encoding: 'ascii',
    token: '197523' // the code you see in your auth app after scanning the Qrcode
})

console.log(verified)