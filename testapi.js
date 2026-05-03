require("dotenv").config();

const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./orders.db");

const app = express();
app.use(express.json());

db.run (`
  CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  category TEXT NOT NULL,
  mrp INTEGER NOT NULL,
  sp INTEGER NOT NULL,
  courier_partner TEXT NOT NULL,
  tracking_link TEXT NOT NULL
  )`
);

const API_KEY = process.env.API_KEY;

function authentication(req, res, next) {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
        return res.status(500).json({ message:"API key is missing"});
    }
    if (apiKey !== API_KEY) {
        return res.status(401).json({ message: "API key is incorrect"});
    }
    next();
}

//Server check
app.get("/", (req, res) => {
    res.send("Order API is running");
});

//Get all orders
app.get("/orders", authentication, (req, res) => {
    db.all("SELECT * FROM orders", [], (err, rows) => {
        if (err) {
            return res.status(400).json({ message: "Database error"});
        }
        res.json(rows);
    });
});

//Get order by orderID
app.get("/orders/:order_id", authentication, (req, res) => {
  const orderId = req.params.order_id;

  db.get("SELECT * FROM orders WHERE order_id = ?", [orderId], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (!rows) {
      return res.status(404).json({ message: "No order found" });
    }

    res.json(rows);
  });
});

//delete order by order id
app.delete("/orders/:order_id", authentication, (req, res) => {
    const orderId = req.params.order_id;

    if(!orderId) {
        return res.status(400).json({ message: "Order ID is missing"});
    }

    db.run("DELETE FROM orders WHERE order_id = ?", [orderId], function(err) {
        if(err) {
            return res.status(500).json({ message: "Database error"});
        }
        if(this.changes === 0) {
            return res.status(404).json ({ message: "Order not found"});
        }
        res.json({
            messages: "Order deleted successfully",
            order_id: orderId,
        });
    });
});

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});