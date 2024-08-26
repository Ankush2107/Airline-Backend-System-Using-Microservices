const sender = require('../config/emailConfig.js');

const sentBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }    
};

module.exports = {
    sentBasicEmail
};

/**
 * SMTP -> a@b.com
 * receive -> d@e.com
 * 
 * from: support@noti.com
 * 
 */