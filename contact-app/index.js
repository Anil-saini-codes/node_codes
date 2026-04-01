const express = require('express');
const app = express();

//Database Connection
const mongoose = require('mongoose');
const Contact = require('./models/contacts.model')
mongoose.connect('mongodb://127.0.0.1:27017/contact-crud').then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log('Database Connection Failed');
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Routes
app.get('/', async (req, res) => {
    const contacts = await Contact.find()
   // res.json(contacts);
    res.render('home', { contacts });
});

app.get('/show-contact/:id', async (req, res) => {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId); //mongoose method to find contact by id
    res.render('show-contact', { contact });
});

app.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

app.post('/add-contact', (req, res) => {
    res.send('Add Contact Page');
});

app.get('/update-contact/:id', (req, res) => {
    res.render('update-contact');
});

app.post('/update-contact/:id', (req, res) => {
   res.render('update-contact');
});

app.post('/delete-contact/:id', (req, res) => {
    res.send('Delete Contact Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});