import express from 'express';

const app = express();

app.all('/', (req, res) => {
  res.send(` <html>
    <head><title>Hola Express</title></head>
    <body>
        <h1>Hola Express</h1>

    </body>
</html>`);
});

app.listen(5000, () => {
  console.log('Server runnig in port 5000');
});
