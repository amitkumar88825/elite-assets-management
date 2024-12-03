const express = require('express');
const userRoutes = require('./userRoute.js'); // Import user routes
const uthenticationRoute = require('./authenticationRoute.js'); // Import user routes

const routes = () => {
    const router = express.Router();
    try {
        router.use('/user', userRoutes); // Assign /api/user to user routes
        router.use('/login', uthenticationRoute)
    } catch (error) {
        console.error('Error setting up routes:', error);
    }
    return router;
};

module.exports = routes;
