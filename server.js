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

// API Table List
var tables = [
    {
        customerName: "admin",
        customerEmail: "admin@admin.com",
        customerID: "admin",
        phoneNumber: "555-555-5555"
    }
];

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

// Routes - Data - returns a json object of all characters (for now)
app.get("/api/tables", function(req, res) {
    return res.json(tables);
    // var chosen = req.params.character;
    // res.end(chosen); // TODO (?) added chosen. --------------------------------------------------//
});
 

// Listener
app.listen( PORT );