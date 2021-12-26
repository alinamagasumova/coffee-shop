const router = require("express").Router();
const db = require("./db.js");
const mongodb = require("mongodb");

router.post("/admin", (req, res) => {
    console.log(req.body)
    let client = db();
    client.connect(err => {
        if (err) {
        } else {
            const table = client.db("CoffeeShop");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    client.close();
                }
            });
        }
    })
    res.send({msg: "done"})
})

module.exports = router;