import "./CommentMap.css"
import Comment from "./commentBlock";

export default function CommentMap({ comment }) {
    console.log(comment)
    return (
        <div className="commentMap">
            {comment.map((p) => (
                <Comment  comment={p} />
            ))}
        </div>
    )
}