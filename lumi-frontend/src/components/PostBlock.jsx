import "./PostBlock.css"
import { Link } from "react-router-dom";

export default function PostBlock({ post }) {
    return (
        <div className="postBlock">

            <div className="postInfo">

            </div>
            <p className="postSummary">{post.body}</p>

        </div>

    )
}