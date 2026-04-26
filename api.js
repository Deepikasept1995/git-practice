const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.json());

const db = new sqlite3.Database("./orders.db");

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
  )`);

app.get("/", (req, res) => {
    res.send("Orders API is running");
});

app.get("/orders", (req , res) => {
    db.all('SELECT * FROM orders', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Database error"});
        } 
        res.json(rows);
    });
});

app.get("/orders/:order_id", (req, res) => {
    const orderId = req.params.order_id;
    db.get('SELECT * FROM orders WHERE order_id = ?',[orderId], (err, row) => {
       if (err) {
        return res.status(500).json({ message: "Database error"});
       }
       if (!row) {
        return res.status(404).json({ message: "Order not found"});
       }  
       res.json(row);
    });
});

app.post("/orders", (req, res) => {

    const {
        order_id,
        product_name,
        category,
        mrp,
        sp,
        courier_partner,
        tracking_link
    } = req.body;

    if (!order_id || !product_name || !category || !mrp || !sp || !courier_partner || !tracking_link) {
        return res.status(400).json({ message: "Missing details"});
    }

    db.run('INSERT INTO orders (order_id, product_name, category, mrp, sp, courier_partner, tracking_link) VALUES (?,?,?,?,?,?,?)',
        [order_id, product_name, category, mrp, sp, courier_partner, tracking_link],
        function(err) {
            if (err) {
                return res.status(500).json({ message: "Database error"});
            }
            res.status(201).json({
                id: this.lastID,
                order_id,
                product_name,
                category,
                mrp,
                sp,
                courier_partner,
                tracking_link
            });
        }
    );
});


app.listen(5001, () => {
    console.log("Server is running on http://localhost:5001")
});