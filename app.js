const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config({quiet: true});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Use the user routes
app.use('/api/v1', userRoutes);

//Listening to the port
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});