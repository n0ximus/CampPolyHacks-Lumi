import React, {useState, useEffect, useLocation} from 'react';
import './PostPage.css'
import { Link } from 'react-router-dom';
import Tag from "../components/Tag";
import CommentMap from "../components/CommentMap"
import axios from "axios";


export default function PostPage({post}) {
    var comments = [{
        post: "id",
        body: "You can do it!",
        starDust: 0,
    },
    {
        post: "id",
        body: "I feel you, I hope you figure it out!",
        starDust: 1,
    }]

    return (
        <div className="postPageDiv">
            <div className="commentRantBlock">
                <div className="stardust">
                    <div class="arrowUp"></div>
                    {post.stardust}
                    <div class="arrowDown"></div>
                </div>
                <div className="postInfo">
                    <div className="tags">
                    {post.category.map((c) => (
                        <Tag category={c} />
                    ))}
                    </div>
                    <div className="postSummaryDiv">
                        <p className="postSummary">{post.body}</p>
                    </div>
                    <p className="commentsHeader">Leave a comment:</p>
                    <div className="commentInputDiv">
                        <textarea type="text" placeholder="Comment..." className="writeCommentInput" autoFocus={true}/>
                    </div>
                    <p className="commentsHeader">Comments:</p>
                    <CommentMap comment={comments}/>
                </div>
            </div>
        </div>
    )
}
