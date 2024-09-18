const mongoose = require("mongoose")
require("dotenv").config()

const MongoUrl = process.env.MONGO_URI

mongoose.connect(MongoUrl, {
    
})

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("Connected to the Database")
})

module.exports =db;