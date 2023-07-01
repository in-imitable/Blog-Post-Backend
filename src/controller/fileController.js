// const multer = require('multer')
const File = require("../model/files");

const fileUpload = async (req, res) => {
  console.log(req);
  // if (!req.file) {
  //   return res.status(400).json({ error: 'No file uploaded' });
  // }

  if (req.files) {
    try {
      req.files.forEach(async (file, index, arr) => {
        let path = "";
        path = path + file.path + ",";
        path = path.substring(0, path.lastIndexOf(","));

        const sfile = new File({ filename: file.originalname, filepath: path });
        await sfile.save();
      });
      res.json(200, { msg: "All Files Added Successfully" });
    } catch (err) {
      res.json(500, { msg: err.message });
    }
  }
};

const getFiles = async (req, res) => {
  try {
    const files = await File.findById(req.params.id);
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { fileUpload, getFiles, getAllFiles };
