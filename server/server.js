require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    axios = require('axios');
    // mail_controller = require('./controllers/mail_controller');

    const app = express();

    app.use(cors());
    app.use(express.static(`${__dirname}/..build`));
    app.use(bodyParser.json());
    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
    }))
// ============================== AZURE? ============================== //
    // var https = require('https');
    // var port = process.env.port || 1337;
    // http.createServer(function (req, res) {
    //     res.writeHead(200, { 'Content-Type' : 'text/plain'});
    //     res.end('Hello World/n');
    // }).listen(port)



    // ==================== ENDPOINTS ==================== //

    // ----------- Send message using Nodemailer ----------- //
    // app.post('api/send_email', mail_controller.sendEmail)

    // ---- Online Setup ---- //
    // const path = require('path')
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../build/index.html'));
    // })


// ======== PORT ======== //
    const PORT = 1337;
    app.listen(PORT, () => console.log(`Gotcha on ${PORT} my friend`));