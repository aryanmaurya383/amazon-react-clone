const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors")({ origin: true });
const stripe = require('stripe')('sk_test_51M9ixlSChn9rVxr4RDaYoM9VAWS6H1QcLTgbP2dnPntpsmb4OqJR42cV1ZXpD8xWxzIDIEm01Z4hklKJGZlT76kb00fpzTEXOq');

// API

// API Config
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// Middlewares
app.use(cors);
app.use(express.json());

// API routes
app.get('/', (request, response) => {
    response.status(200).send('hello world')
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;



    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in subunits of the currency
        currency: "inr",
    });

    //201: OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

// Listen command
exports.api = functions.https.onRequest(app);


// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });
