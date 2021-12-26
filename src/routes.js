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

router.get("catalog/:category", (req, res) => {
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

router.get("/admin", (req,res) => {
    res.render("admin", {
        title: "Админка"
    })
})

// router.get("*/:item", (req, res) => {
//     let items = {
//
//     }
// })

module.exports = router;
