const express = require('express');

// Constants
const PORT = 4876;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send({
    result: true,
    data: 'test'
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);