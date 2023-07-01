const Post = require("../model/post");

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    res.status(200).json({ msg: "Post saved successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("Post updated successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    // const post = await Post.findById(req.params.id)
    // await post.delete()
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPost = async (req, res) => {
  try{
    const post = await Post.findById(req.params.id)
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPosts = async (req, res) => {
  const category = req.query.category
  const posts = ""
  try{
    if(category){
      posts = await Post.find({categories: category})
    }
    else{
      posts = await Post.find()
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createPost, updatePost, deletePost, getPost, getAllPosts };
