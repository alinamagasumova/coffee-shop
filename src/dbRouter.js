const router = require("express").Router();
const mongodb = require("mongodb");
const db = require("./db.js");

router.post("/add", (req, res) => {
    console.log(req.body)
    const client = db();
    client.connect(err => {
        if (err) {
            console.log({'msg': 'Error connection'});
            console.log(err)
        } else {
            const table = client.db("CoffeeShop");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: 'done'});
                    client.close();
                }
            });
        }
    });
})

router.get("category/:category", (req, res) => {
    let client = db();
    let categories = {
        "coffee": "Свежеобжаренный кофе",
        "tea": "Чай и кофейные напитки",
        "food": "Здоровое питание",
    }
    client.connect(err => {
        if (err) {
            res.send({"msg": "Connection error"});
            client.close();
        } else {
            const table = client.db("CoffeeShop");
            const col = table.collection("products");
            let obj = {};
            if(req.params.category !== "all") {
                obj.type = categories[req.params.category]
            }
            col.find(obj).toArray((error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                    res.send({"data": data});
                    client.close();
                }
            });
        }
    });
});

// router.get("/del/:id", (req,res) => {
//     const client = db();
//     client.connect((err) => {
//         if (err) {
//             res.send({"msg": "Error connection"});
//             console.log(err);
//             client.close();
//         } else {
//             const col = client.db("CoffeeShop").collection("products");
//             console.log(req.params)
//             col.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (delErr, result) => {
//                 if(delErr) {
//                     res.send({"msg": "Nooooo"});
//                     client.close()
//                 } else {
//                     console.log(result)
//                     res.send({"msg": "ok"});
//                     client.close()
//                 }
//             });
//         }
//     });
// })

module.exports = router;