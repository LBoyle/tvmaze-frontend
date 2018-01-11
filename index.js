const express = require('express');
const app = express();
const dest = `${__dirname}/build`;

const PORT = process.env.PORT || 8080;

app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
