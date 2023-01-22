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
    const [commentList, setCommentList] = useState([]);

    const [description, setDescription] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {

            author: "testUser",
            post: post,
            body: description,
            starDust: 0,
        };
        console.log("posting")

        try {
            console.log("axious post")
            const res = await axios.post("/comments", newPost);
            console.log(res.data)
            window.location.replace("/post/" + path);
        } catch (err) { }
    };

    const getPostComments = async () => {
        try {
            const res = await axios.get("http://localhost:3001/comments/" + path);
            setCommentList(res.data);
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            console.log(post);

        };
        getPost();
        getPostComments();
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

                        <form className="writePostForm" onSubmit={handleSubmit}>

                            <textarea type="text" placeholder="Comment..." className="writeCommentInput" autoFocus={true} onChange={e => setDescription(e.target.value)} />


                     
                                <button className="writeCommentButton" type="submit">
                                    Post Comment
                                </ button>

                        </form>




                    </div>
                    <p className="commentsHeader">Comments:</p>
                    <CommentMap comment={commentList}/>
                </div>
            </div>
        </div>
    )
}
