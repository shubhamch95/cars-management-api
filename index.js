const express = require('express');
const carrouter = require("./routers/routes");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const app = express();

app.use(bodyparser.json())
app.use('/api/v1/cars', carrouter)

try {
    mongoose.connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on("connected", () => {
        console.log("Connected to the database successfully..!!");
    })
    mongoose.connection.on("error", (error) => {
        console.log("Unable to connect the database..!!", error);
    });
} catch (error) {
    console.log("Unable to connect the database..!!");
}
// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server is Running Fine.!!");
})