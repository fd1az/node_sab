import express from 'express';

const app = express();

let contacts = {
  user1: {
    firstName: 'asdasd',
    lastName: 'asdasd',
    phoneNumber: '321321321',
  },
  user2: {
    firstName: 'nuevo',
    lastName: 'ahora si',
    phoneNumber: '321351',
  },
  user3: {
    firstName: 'Victor',
    lastName: 'Calabro',
    phoneNumber: '0303456',
  },
  user4: {
    firstName: 'Facu',
    lastName: 'lalala',
    phoneNumber: '123456',
  },
};

app.get('/', (req, res) => {
  res.send(` <html>
    <head><title>Hola Express</title></head>
    <body>
        <h1>Hola Express</h1>
        <a href="about">Go about</a>
        <a href="data">get data</a>
    </body>
</html>`);
});

app.get('/about', (req, res) => {
  res.send(` <html>
      <head><title>Hola Express About</title></head>
      <body>
          <h1>Hola About</h1>
          <a href="/">Go Home</a>
      </body>
  </html>`);
});

app.get('/data', (req, res) => {
  res.json(contacts);
});

app.listen(5000, () => {
  console.log('Server runnig in port 5000');
});
