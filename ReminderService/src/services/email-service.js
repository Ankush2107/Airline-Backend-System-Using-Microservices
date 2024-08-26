const sender = require('../config/emailConfig.js');
const TicketRepository = require('../repository/ticket-repository.js');

const ticketRepository = new TicketRepository();

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

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepository.get({ status: "PENDING" });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const updateTicket = async (ticketId, data) => {
    try {
        const response = await ticketRepository.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const createNotification = async (data) => {
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sentBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
};

/**
 * SMTP -> a@b.com
 * receive -> d@e.com
 * 
 * from: support@noti.com
 * 
 */