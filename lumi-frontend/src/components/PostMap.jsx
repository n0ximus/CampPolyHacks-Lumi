import "./PostMap.css"
import Post from "./PostBlock";

export default function PostMap({ posts }) {
    console.log(posts)
    return (
        <div className="postMap">
            {posts.map((p) => (
                <Post  post={p} />
            ))}
        </div>
    )
}