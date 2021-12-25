const router = require("express").Router();


router.get("/", (req,res) => {
    res.render("index", {
        title: "Главная страница"
    });
})

router.get("/catalog", (req, res) => {
    res.render("catalog", {
        title: "Каталог товаров"
    });
})

router.get("/catalog/:category", (req, res) => {
    let categories = {
        "Coffee": "Свежеобжаренный кофе",
        "Tea": "Чай и кофейные напитки",
        "Food": "Здоровое питание",
        "All": "Каталоги нашей продукции"
    }
    res.render("/Category", {
        title: categories[req.params.category]
    })
})

// router.get("*/:item", (req, res) => {
//     let items = {
//
//     }
// })

module.exports = router;
