import "./PostBlock.css"
import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function PostBlock({ post }) {
    return (
        <div className={post.isRant ? "postBlock" : "postBlockPraise"}>
            <div className={post.TW ? "blur" : "noBlur"}>
                <div className="stardust">
                    <div class={post.isRant ? "arrowUp" : "arrowUpPraise"}></div>
                    {post.starDust}
                    <div class={post.isRant ? "arrowDown" : "arrowDownPraise"}></div>
                </div>
                <div className="postInfo">
                    <div className="tags">
                        {post.categories.map((c) => (
                        <Tag category={c} isRant={post.isRant} />
                    ))}
                    </div>
                    <div className="postSummaryDiv">
                        <p className="postSummary">{post.body}</p>
                    </div>
                    <div className="commentsButtonDiv">
                        <Link to={`/post/${post._id}`} className="commentsButton"> 
                            See comments 
                        </Link>
                    </div>

                </div>
            </div>

        </div>

    )
}