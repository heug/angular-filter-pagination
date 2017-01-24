const express = require('express');
const STUB_DATA = require('./stubs/data.js');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/data', function(req, res) {
	res.json(STUB_DATA);
});

console.log('Listening on port 3000');
app.listen(3000);