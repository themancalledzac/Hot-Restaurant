// Dependencies
// ===========================================
const express = require('express')
const path = require('path');
// express setup
const app = express();
var PORT = process.env.PORT || 3001;

// express handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// ===========================================

// main page get
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// tables get
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
 
// reservations get
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Routes - Data
app.get("/api/character", function(req, res) {
    var chosen = req.params.character;
    res.end(chosen); // TODO (?) added chosen. --------------------------------------------------//
});
 

// Listener
app.listen( PORT );