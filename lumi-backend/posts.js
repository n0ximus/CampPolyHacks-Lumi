const router = require("express").Router();
const Post = require("../models/Post");

/*
 * create a new post
 * */
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * edit a post by id
 * */
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.author === req.body.author) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you can only edit a post you own");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * deletes a post by id
 * */
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.author === req.body.author) {
            try {
                await post.delete();
                res.status(200).json("post deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you can only delete posts you own");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * gets a post by id
 * */
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

/*
 * gets  all posts (used to render on home page)
 * */
router.get("/", async (req, res) => {
    const categoryName = req.query.category;
    try {
        let posts;
       if (categoryName) {
            posts = await Post.find({
                categories: {
                    $in: [categoryName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;