import "./PostBlock.css"
import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function PostBlock({ post }) {
    return (
        <div className="postBlock">
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
            </div>

        </div>

    )
}