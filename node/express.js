const express = require('express');
const app = express();

app.get('/', function (req, res) { res.send('Hello World!')});

app.listen(3010, function() { console.log('Hello World app listening on port 3010!'); });
