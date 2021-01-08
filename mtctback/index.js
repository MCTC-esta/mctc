const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

///////
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
///////

//add middelware as body parser to read JSON object

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`the server is running on port: ${PORT}`));


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if (err) throw err;
    console.log("MONGO connected")
}
);

app.use("/users", require("./routes/userroute"));


