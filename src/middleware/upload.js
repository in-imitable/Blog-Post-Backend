const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let extention = path.extname(file.originalname)
        cb(null, Date.now() + extention)
    
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            callback(null,  true)
        }
        else{
            console.log('PNG, JPEG and JPG files are supported')
            callback(null, false)
        }
    },
    limits:{
        fileSize: 1920 * 1920 * 5   // Max-limit 5mb File Size
    }
})

module.exports = upload
