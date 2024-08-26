const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig.js');
const { sentBasicEmail } = require('./services/email-service.js');

const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}...`);

        sentBasicEmail(
            'support@admin.com',
            'authankush@gmail.com',
            'This is a testing email',
            'Hey, how are you, I hope you like the support' 
        );
        
    });
};

setUpAndStartServer();