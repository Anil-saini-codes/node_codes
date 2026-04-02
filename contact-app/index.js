// const express = require('express');
import express from 'express';
const app = express();

//Database Connection
// const mongoose = require('mongoose');

// const Contact = require('./models/contacts.model')

import contactRoutes from './routes/contacts.routes.js';  
import { connectDB } from './config/database.js';
connectDB();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Routes
app.use('/', contactRoutes);    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});