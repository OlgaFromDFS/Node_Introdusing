const http = require('http');
const querystring = require('querystring');
require('dotenv').config();

const PASSWORD = process.env.PASSWORD;
const server = http.createServer((req, res) => {
  const params = querystring.parse(req.url.slice(2));
  
  if (params.password !== PASSWORD) {
    res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
  }
  
  if (params.password === PASSWORD) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('Привет!');
  }
  
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log('сервер запущен');
});
