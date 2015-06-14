var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


/*
 Gestion du fichier de configuration du router Backbone
 */

app.use(express.static('assets/css'));
app.use(express.static('node_modules'));
app.use(express.static('scripts'));


//Pour parser les POST
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(3000);
