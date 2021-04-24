const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello , The text displayed after code pipeline manual approval'));

app.listen(port);
console.log(`App is running on http://localhost:${port}`);

console.log(`The line is added in local repo`);


console.log(`The line is added in Remote repo`);
