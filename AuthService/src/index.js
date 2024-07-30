const express = require('express');
const { PORT } = require("./config/serverconfig")
const app = express();


const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    })
};

prepareAndStartServer();