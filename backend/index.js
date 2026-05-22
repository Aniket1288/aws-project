const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/booking", (req, res) => {

  const { fromCity, toCity } = req.body;

  const sql =
    "INSERT INTO bookings(fromCity,toCity) VALUES (?,?)";

  db.query(sql, [fromCity, toCity], (err, result) => {

    if (err) {
      res.status(500).send(err);
    } else {
      res.send("Booking Added");
    }

  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});