## Auth App Code Generator
This works well with Google Authenticator and sometimes Microsoft Authenticator if well synced.

# Prerequisites
You will need to have Node installed on your machine (this uses Node 18). Also having one of the 2 Auth Apps applications listed above installed on your phone. Clone the project on your machine and run <npm i> in the root folder of the project to install dependencies on your machine.

# To run
<node index.js>

# Using the website as is
Run the project with the above command, then go to the localhost (http://localhost:3000/) and scan the QR code on your phone and use it to generate a OTP with one of the Authenticator Apps listed above. You can then input and submit your OTP on localhost and this will then verify the code you've entered is valid for the qrcode scanned (If valid, you will see "true" showing up on localhost).

# Troubleshooting
If inputting your OTP and attempting to validate returns false, look into misstyped codes and sync problems.

# Generating a new qrcode (full process from the start)
1) <node generate.js> can be run to generate a qrcode source image that would then be pasted on line 9 of index.html (copy and paste the output lines starting at "data:image/png;base64..."). 
2) The ascii of the output of 1) then need to be copied and pasted to replace the secret on line 18 of index.js. 
3) When running index.js and going on the localhost this will show you a QR code that you can scan on your phone and then use to generate a OTP with one of the Authenticator Apps listed above.  
4) You can then input and submit your OTP on localhost and this will then verify the code you've entered is valid for the qrcode generated in 1). Alternatively, you can also use <node verify.js> to validate the code, changing lines 4 and 6 as appropriate.    


