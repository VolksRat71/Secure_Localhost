const fs = require('fs');
const https = require('https');

const app = require('express')();
app.get('*', (req, res) => res.send('<h1>Hello, World</h1>'));

const server = https.createServer(
  {
    key: fs.readFileSync(`${__dirname}/key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/cert.pem`, 'utf8'),
  },
  app
);

server.listen(3005, () => {
  console.log('App listening');
});
