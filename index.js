const express = require("express");
const app = express(); 
const cors = require("cors");
const speakeasy = require("speakeasy");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/api/authcode", function (req, res) {
    const authAppCode = req.body.authappcode;
    const toVerify = {
        secret: '>$f4q:p%,#A>fNOH3AA4X4gZU&R#zsbr',  
        encoding: 'ascii',
        token: authAppCode
    }
    const verified = speakeasy.totp.verify(toVerify);
    res.send(verified);

});  

const listener = app.listen(3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });