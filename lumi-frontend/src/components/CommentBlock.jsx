import "./CommentBlock.css"
import { Link } from "react-router-dom";

export default function CommentBlock({ comment }) {
    return (
        <div className="commentBlock">

            <div className="commentInfo">
                
            </div>
            <div className="commentStar">
                <i class="fa-regular fa-star"></i>
            </div>
            <p className="commentBody">
                {comment.body}
            </p>
            

        </div>

    )
}