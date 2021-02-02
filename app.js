const express = require("express");
const app = express();
const conn = require("./conn")
const bodyParser = require("body-parser")
const apiRoutes = require("./routes/api.route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

app.use("/api", apiRoutes);

app.get("/", (req, res) =>{
    res.send("Works")
})

const server = app.listen(process.env.PORT || 8000, () =>{
    console.log(`App listening at port ${server.address().port}`)
})