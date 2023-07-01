const mongoose = require('mongoose')
require('dotenv').config()

const Connector = async () => {
    const url = process.env.DB_URL
    try{
        await mongoose.connect(url, {useNewUrlParser: true})
        console.log("Database connected successfully")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = Connector