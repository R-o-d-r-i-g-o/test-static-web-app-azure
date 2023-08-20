const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('API está funcionando! vm-1');
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});