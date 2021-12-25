const connectDB = () => {
    const MongoClient = require("mongodb").MongoClient;
    const userName = process.env.DBNAME || "admin";
    const pwd = process.env.DBPASS || "10102020";
    const uri = `mongodb+srv://${userName}:${pwd}@cluster0.lrdlp.mongodb.net/CoffeeShop?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;