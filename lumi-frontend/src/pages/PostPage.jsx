import React, {useState, useEffect} from 'react';
import './PostPage.css'
import { Link } from 'react-router-dom';
import Tag from "../components/Tag";
import CommentMap from "../components/CommentMap"
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function PostPage() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; /* gets the post id */
    const [post, setPost] = useState({});


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

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            console.log(post);

        };
        getPost();
    }, [path]);


    return (
        <div className="postPageDiv">
            <div className="commentRantBlock">
                <div className="stardust">
                    <div className="arrowUp"></div>
                    {post.starDust}
                    <div className="arrowDown"></div>
                </div>
                <div className="postInfo">
                    <div className="tags">


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
