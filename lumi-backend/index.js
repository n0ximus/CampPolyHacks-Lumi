const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const posts = require("./posts");


dotenv.config();
app.use(express.json())
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/posts", posts);



app.use("/", (req, res) => {
    console.log("this is the home")
})
app.listen("3001", () => {
    console.log("Backend is running.");
});