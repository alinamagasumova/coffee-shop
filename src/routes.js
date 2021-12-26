const router = require("express").Router();
// const fs = require("fs");
//
//
// let data = "";
// const readFile = (path) => {
//     return fs.readFileSync(path, "utf8", )
// }
// data = readFile("./data/products.csv")
// data = data.split("\n")
// console.log(data)
//
// let titleNames = data[0].split(";");

// const Product = function (prArr) {
//     let names = data[0].split(";");
//     names.forEach((name, i) => {
//         this[name] = prArr[i]
//     })
// }
// const products = [];
//
// for (let i = 1; i < data.length; i++) {
//     products.push(new Product(data[i].split(";")))
// }


router.get("/", (req,res) => {
    res.render("index", {
        title: "Главная страница"
    });
})

router.get("/catalog", (req, res) => {
    let categories = {
        "coffee": "Свежеобжаренный кофе",
        "tea": "Чай и кофейные напитки",
        "food": "Здоровое питание"
    }
    res.render("catalog", {
        title: "Каталог товаров"
    });
})

router.get("*/:category", (req, res) => {
    let categories = {
        "coffee": "Свежеобжаренный кофе",
        "tea": "Чай и кофейные напитки",
        "food": "Здоровое питание"
    }
    res.render("tempCatalog", {
        title: categories[req.params.category]
    })
})

router.get("/basket", (req,res) => {
    res.render("basket", {
        title: "Корзина"
    })
})

// router.get("*/:item", (req, res) => {
//     let items = {
//
//     }
// })

module.exports = router;
