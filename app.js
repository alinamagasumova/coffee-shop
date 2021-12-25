const express = require("express");
const router = require("./src/routes.js");
const app = express();

app.set("views", "./templates");
app.set("view engine", "hbs");

app.use(express.static("./static"));

app.use("/", router);

app.listen(process.env.PORT || 3001);