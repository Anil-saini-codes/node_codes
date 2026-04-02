import express from 'express';
const router = express.Router();
import Contact from '../models/contacts.model.js';
import 
    { 
    getAllContacts, getContactById, getAddContactPage, addContact, getUpdateContactPage, updateContact, deleteContact 
} from '../controller/contacts.controller.js';

//Routes
router.get('/', getAllContacts);

router.get('/show-contact/:id', getContactById);

router.get('/add-contact', getAddContactPage);

router.post('/add-contact', addContact);

router.get('/update-contact/:id', getUpdateContactPage);

router.post('/update-contact/:id', updateContact);

router.get('/delete-contact/:id', deleteContact);

export default router