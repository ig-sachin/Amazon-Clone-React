const functions = require("firebase-functions");

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')("sk_test_51JM5YmSF1a4QEsfiVqUMVDcBG1eIHrnO8gjGISJNssEzV2h0xZ9yFTeA5O4lSIYW3viK6ixibBunNSR72BllPMK700mSge8awL");

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get('/', (request, response) => response.status(200).send("hello world"));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved BOOM ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

exports.api = functions.https.onRequest(app);
