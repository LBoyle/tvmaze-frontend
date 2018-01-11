const express = require('express');
const app = express();
const dest = `${__dirname}/build`;

app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(8080);
