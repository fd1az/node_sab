import express from 'express';
import { getContacts, saveContacts } from '../utils.js';

const router = express.Router();

router.get('/', (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

router.get('/:name', (req, res) => {
  const contacts = getContacts();
  res.json(contacts[req.params.name]);
});

router.post('/', (req, res) => {
  const { name, lastName, phone } = req.body;
  const contacts = getContacts();
  const key = name;
  contacts[key] = { name, lastName, phone };
  saveContacts(contacts);
  res.json({ message: 'contacto creado', data: contacts[key] });
});

export default router;
