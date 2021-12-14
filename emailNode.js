var nodemailer = require('nodemailer');

var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vcbikash123@gmail.com',
        pass: 'xxxxxxxxxxx'
    }
})

var mailOption = {
    from: 'vcbikash123@gmail.com',
    to: 'vcbikas123@gmail.com',
    subject: 'sending EMail using node.js',
    text: 'That was easy' //if we need html, html:<h1>Welcome</h1>
};

transpoter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error)
    }else{
        console.log('Email send'+ info.response);
    }
})
