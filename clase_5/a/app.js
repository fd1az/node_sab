import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mi primer middleware
const fn = (req, res, next) => {
  console.log('Run middleware');
  next();
};

const onlyAbout = (req, res, next) => {
  console.log('Run middleware About');
  next();
};

app.use(fn);
//app.use('/about', onlyAbout);

//OTRAS RUTAS

//FIN DE OTRAS RUTAS
app.get('/', (req, res) => {
  res.json('Home');
});

// /user/1234
// /user/1235
// /user/1236
// /user/1237
// /user/:id

app.get('/user', onlyAbout, (req, res) => {
  res.json(req.query);
});

app.get('/user/:id', onlyAbout, (req, res) => {
  res.json({ message: `User id: ${req.params.id} ` });
});

// app.get('/user/1235', onlyAbout, (req, res) => {
//   res.json({ message: `Hola desde about ` });
// });
// app.get('/user/1236', onlyAbout, (req, res) => {
//   res.json({ message: `Hola desde about ` });
// });

app.get('/about', onlyAbout, (req, res) => {
  res.json({ message: `Hola desde about ` });
});

app.post('/about', (req, res) => {
  let { name } = req.body;
  res.json({ message: `Este es el body ${name}` });
});

app.listen(5000, () => {
  console.log('Server runnig in port 5000');
});
