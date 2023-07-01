const express = require("express");
const router = express.Router();

// const multer = require('multer')

// Import controllers
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");
const { signupUser, loginUser } = require("../controller/userController");
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} = require("../controller/postController");
const {
  newComment,
  getComments,
  deleteComment,
} = require("../controller/commentController");
const { fileUpload, getFiles, getAllFiles
 } = require("../controller/fileController");

// it's use to signup and login user into account
router.post("/signup", signupUser);
router.post("/login", loginUser);

// it's use to create new post, update, delete, Get one post and get all posts
router.post("/createPost", authMiddleware, createPost);
router.put("/updatePost/:id", authMiddleware, updatePost);
router.delete("/deletePost/:id", authMiddleware, deletePost);

// Get one post or Get ALl posts
router.get("/getPost/:id", authMiddleware, getPost);
router.get("/getAllPosts", authMiddleware, getAllPosts);

// This route is used for create new comments, get all comments from the post and delete perticular comment by it ID
router.post("/comment/new", authMiddleware, newComment);
router.get("/comments/:id", authMiddleware, getComments);
router.delete("/comment/delete/:id", authMiddleware, deleteComment);

router.post("/uploadFile", upload.array("file"), fileUpload);
// router.get("/getFiles/:id", getFiles);
router.get("/getAllFiles", getAllFiles);

module.exports = router;
