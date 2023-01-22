import React from 'react';
import './PostPage.css'
import { Link } from 'react-router-dom';
import Tag from "../components/Tag";
import CommentMap from "../components/CommentMap"

export default function PostPage({post}) {

    return (

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
                    <div className="commentBox">
                        <p className="postSummary">{post.body}</p>
                    </div>
            </div>
            </div>
    )
}
