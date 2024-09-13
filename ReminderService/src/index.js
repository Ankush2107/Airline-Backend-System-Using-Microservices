const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig.js');
// const { sentBasicEmail } = require('./services/email-service.js');

// const { createChannel } = require('./utils/messageQueue.js');

const TicketController = require('./controllers/ticket-controller.js')

const jobs = require('./utils/job.js');

const setUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // const channel = await createChannel();

    app.use('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}...`);
        jobs();
        // sentBasicEmail(
        //     'support@admin.com',
        //     'authankush@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support' 
        // );
        
    });
};

setUpAndStartServer();