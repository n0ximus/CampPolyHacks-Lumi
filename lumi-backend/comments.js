const router = require("express").Router();
const Comment = require("./models/Comment");

/*
 * create a new comment
 * */
router.post("/", async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * edit a comment by id
 * */
router.put("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment.author === req.body.author) {
            try {
                const updatedComment = await Comment.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedComment);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you can only edit a comment you own");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * deletes a comment by id
 * */
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (comment.author === req.body.author) {
            try {
                await comment.delete();
                res.status(200).json("comment deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you can only delete comments you own");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

});

/*
 * gets  all comments (used to render on home page)
 * */
router.get("/", async (req, res) => {
    const postID = req.query._id;
    try {
        let comments;
        if (postID) {
            posts = await Post.find({ postID });
        } 
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;