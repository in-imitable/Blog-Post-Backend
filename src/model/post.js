const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:false,
    },
    categories:{
        type:Array,
        required:false,
    },
    createdDate:{
        type:Date
    }
})

const post = mongoose.model('post', postSchema)

module.exports = post