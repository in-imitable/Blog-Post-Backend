const Comment = require('../model/comment')

const newComment = async (req, res) => {
    try{
        const comment = await new Comment(req.body)
        comment.save()
        res.status(200).json('Comment saved successfully')
    } catch (err){
        res.status(500).json(err)
    }
}

const getComments = async (req, res) => {
    try{
        const comments = await Comment.find({ postId: req.params.id })
        res.status(200).json(comments)
    } catch (err){
        res.status(500).json(err)
    }
}


const deleteComment = async (req, res) => {
    try{
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json('Comment deleted successfully')
    } catch (err){
        res.status(500).json(err)
    }
}


module.exports = { newComment, getComments, deleteComment }
