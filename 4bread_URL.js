const http = require('http');

const server = http.createServer((req, res) => {
  const path = req.url.split('/').filter(Boolean);

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  let link = '';

  for (partsPath of path) {
    link += `/${partsPath}`;
    res.write(`/<a class="links" href="/${link}">${partsPath}</a>`);
  }

  res.write('<style>.links {font-size: 25px; margin-right: 15px}</style>');

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log('сервер запущен');
});
