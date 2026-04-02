import Contact from '../models/contacts.model.js';

export const getAllContacts = async (req, res) => {
    const contacts = await Contact.find()
   // res.json(contacts);
    res.render('home', { contacts });
}

export const getContactById =  async (req, res) => {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId); //mongoose method to find contact by id
    res.render('show-contact', { contact });
}

export const getAddContactPage = (req, res) => {
    res.render('add-contact');
}

export const addContact =  async (req, res) => {

    await Contact.create(req.body); //moangoose method to create a new contact
    res.redirect('/');

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
    const contact = await Contact.findById(contactId); //mongoose method to find contact by id
    res.render('update-contact', { contact });
}

export const updateContact = async (req, res) => {
    const contactId = req.params.id;
    await Contact.findByIdAndUpdate(contactId, req.body); //mongoose method to update contact by id
    res.redirect('/');
}

export const deleteContact = async (req, res) => {
    const contactId = req.params.id;
    await Contact.findByIdAndDelete(contactId); //mongoose method to delete contact by id
    res.redirect('/');
}