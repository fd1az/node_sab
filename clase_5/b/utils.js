import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const contactsLocation = path.join(__dirname, 'contacts.json');

const saveContacts = (contacts) =>
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts));

const getContacts = () => JSON.parse(fs.readFileSync(contactsLocation));

export { saveContacts, getContacts };
