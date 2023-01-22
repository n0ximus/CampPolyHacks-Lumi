const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        author: {
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
        categories: {
            type: Array,
            required: false,
            default: [],
        },
        TW: {
            type: Boolean,
            required: true,
            default: false,
        },
        isRant: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);