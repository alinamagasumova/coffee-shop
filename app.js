const express = require("express");
const router = require("./src/routes");
const app = express();
// const dbRouter = require("./src/dbRouter");

app.set("views", "./templates");
app.set("view engine", "hbs");

app.use(express.static("./static"));

app.use("/", router);
// app.use("/api", dbRouter);

app.listen(process.env.PORT || 3004);