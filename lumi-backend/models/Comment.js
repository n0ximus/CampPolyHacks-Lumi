const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        starDust: {
            type: Number,
            default: 0,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);