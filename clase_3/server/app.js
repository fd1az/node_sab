import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>MyAppNode</title></head>
            <body>
                <h1>Hola mi app desde Node</h1>
                <a href="about">Go about</a>
            </body>
        </html>
      `);
    return res.end();
  } else if (url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
          <head><title>MyAppNode</title></head>
          <body>
              <h1>Hola about</h1>
              <a href="message">Go Message</a>
          </body>
      </html>
    `);
    return res.end();
  } else if (url === '/message' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
          <head><title>MyAppNode</title></head>
          <body>
              <form action="/message" method="POST">
                <input name="message">
                <button type="submit">Send</button>
              </form>
          </body>
      </html>
    `);
    return res.end();
  } else if (url === '/message' && method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1].replace('+', ' ');
      console.log(message);
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>MyAppNode</title></head>
            <body>
                <h1>404 Not found</h1>
                <a href="/">Go Home</a>
            </body>
        </html>
      `);
    res.statusCode = 404;
    return res.end();
  }
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
//CRUD (Create - Read - Update - Delete)

// Significado - HTTP verb
//Create       - POST
//Read         - GET
//Update       - PUT
//Delete       - Delete
