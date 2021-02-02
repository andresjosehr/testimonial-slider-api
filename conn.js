const mongoose = require("mongoose");
require("dotenv").config();

const dbPath = process.env.MONGODB_CONNECTION;
const config ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbPath, config).catch(err => console.log(error));

mongoose.connection.once("open", () =>{console.log("Mongoose connected")})
mongoose.connection.once("error", (err) =>{console.log(err)})