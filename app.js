const express = require("express");
const app = express();
const router = require("./src/routes");
const dbRouter = require('./src/dbRouter');

app.set("views", "./templates");
app.set("view engine", "hbs");

app.use(express.static("./static"));

app.use("/", router);
app.use("/api", dbRouter);

app.listen(process.env.PORT || 4004);