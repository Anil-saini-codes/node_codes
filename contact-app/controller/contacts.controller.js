import Contact from '../models/contacts.model.js';
import mongoose from 'mongoose';

export const getAllContacts = async (req, res) => {

    try{
    const contacts = await Contact.find()
    res.render('home', { contacts });
    }
    catch(error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }

   
}

export const getContactById =  async (req, res) => {
    const contactId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(404).render('404', { message: 'Contact not found' });
    }
    try
    {
        const contact = await Contact.findById(contactId);
        if(!contact) {
            return res.status(404).render('404', { message: 'Contact not found' });
        }
        res.render('show-contact', { contact });
    } catch (error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }    
   
}

export const getAddContactPage = (req, res) => {
    res.render('add-contact');
}

export const addContact =  async (req, res) => {

    try{
    await Contact.create(req.body); //moangoose method to create a new contact
    res.redirect('/');
    }
    catch(error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }

    

    // const { firstName, lastName, email, phone, address } = req.body;
    // const newContact = new Contact({
    //     firstName,
    //     lastName,
    //     email,
    //     phone,
    //     address
    // });
    // newContact.save().then(() => {
    //     res.redirect('/');
    // }).catch((err) => {
    //     res.send('Failed to add contact');
    // });



    //res.send('Add Contact Page');
     //res.send(req.body);
}

export const getUpdateContactPage =  async (req, res) => {
    const contactId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(404).render('404', { message: 'Contact not found' });
    }

    try{
    const contact = await Contact.findById(contactId); //mongoose method to find contact by id
    if(!contact) {
        return res.status(404).render('404', { message: 'Contact not found' });
    }
    res.render('update-contact', { contact });
    }
    catch(error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }
    
}

export const updateContact = async (req, res) => {
    const contactId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(404).render('404', { message: 'Contact not found' });
    }

    try{
    const contact = await Contact.findByIdAndUpdate(contactId, req.body); //mongoose method to update contact by id
    if(!contact) return res.status(404).render('404', { message: 'Contact not found' }); 
    res.redirect('/');
    }
    catch(error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }

    
    
}

export const deleteContact = async (req, res) => {
    const contactId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(404).render('404', { message: 'Contact not found' });
    }

    try{   
    const contact = await Contact.findByIdAndDelete(contactId); //mongoose method to delete contact by id
    if(!contact) 
        return res.status(404).render('404', { message: 'Contact not found' });
        res.redirect('/');
     }
    catch(error) {
        return res.status(500).render('500', { message: 'Server Error' });
    }

    
}