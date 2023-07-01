const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fileSchema = Schema({
    filename: {
        type:String,
        required:true
    },
    filepath: {
        type:String,
        required:true
    }
})

const File = mongoose.model('file', fileSchema);

module.exports = File