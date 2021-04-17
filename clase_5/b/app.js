import express from 'express';

import contactsRouter from './routes/contacts.js';

const app = express();

//Global middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/contacts', contactsRouter);

app.listen(5000, () => {
  console.log('Server runnig in port 5000');
});
