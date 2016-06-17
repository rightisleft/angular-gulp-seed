var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    console.log('render index....');
    res.render('index', {list: ['A', 'B', 'C']});
});

app.listen(port, function (err, data) {
    console.log('Now Serving on Port: ' + port);
});