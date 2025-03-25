const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files from the "public" folder

// Flutterwave API keys
const FLUTTERWAVE_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Replace with your actual public key

// Payment route
app.post('/pay', async (req, res) => {
    const { phone, amount } = req.body;

    try {
        console.log('Making payment request to Flutterwave...');
        console.log('Public Key:', FLUTTERWAVE_PUBLIC_KEY); // Debugging: Log the public key

        // Make a request to Flutterwave API
        const response = await axios.post(
            'https://api.flutterwave.com/v3/payments',
            {
                tx_ref: `tx-${Date.now()}`, // Unique transaction reference
                amount: amount, // Amount to be paid
                currency: 'RWF', // Rwandan Francs
                payment_options: 'mobilemoneyrwanda', // Supports MTN and Airtel in Rwanda
                redirect_url: 'http://localhost:3000/success', // Redirect URL after payment
                customer: {
                    email: 'josephnishimwe398@gmail.com', // User's email
                    phonenumber: phone, // User's phone number
                    name: 'Joseph Nishimwe', // User's name
                },
                customizations: {
                    title: 'Rwanda Payment Platform', // Payment title
                    description: 'Payment for services', // Payment description
                },
            },
            {
                headers: {
                    Authorization: `Bearer FLWSECK_TEST-39989b8747d37c3c6d78a053263f8563-X`, // Flutterwave public key
                },
            }
        );

        console.log('Payment request successful. Redirecting to payment link...');
        res.redirect(response.data.data.link); // Redirect user to Flutterwave payment page
    } catch (error) {
        console.error('Payment failed:', error.response ? error.response.data : error.message);
        res.send('Payment failed. Please try again.');
    }
});

// Success route
app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html')); // Serve the success page
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
