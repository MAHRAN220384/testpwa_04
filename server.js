const express = require('express')
const app = express();
const path = require('path')

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Express
app.use(express.static('public'));


// Build:
app.use(express.static(path.join(__dirname,'pwacl04', 'build')));


app.get( '*' , function (req, res) {
    res.sendFile(path.join(__dirname,'pwacl04', 'build', 'index.html'));
   });

const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })