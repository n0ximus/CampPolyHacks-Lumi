import "./writePost.css"
import { useContext, useState } from "react";
import axios from "axios";

export default function WritePost() {
    const [description, setDescription] = useState("");
    /* create a new post */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {

            author: "testUser",
            body: description,
            starDust: 0,
            categories: [],
            TW: false,
            isRant: false
        };
        console.log("posting")

        try {
            console.log("axious post")
            const res = await axios.post("/posts", newPost);
            console.log(res.data)
            window.location.replace("/");
        } catch (err) { }
    };
    return (
        <>
            <div className="writePost">
                <div className="writePostType">
                    
                    
                    <p className="writePostTitle">
                        write praise
                    </p>
                    <div className="writePostIcon">
                        <i className="fa-solid fa-sun"></i>
                    </div>
                </div>
                <form className="writePostForm" onSubmit={handleSubmit}>

                    <textarea type="text" placeholder="write praise" className="writePostInput" autoFocus={true} onChange={e => setDescription(e.target.value)} />


                <div className="writePostFooter">
                    <div className="writePostTags">
                        Tags
                    </div>
                    <div className="writePostTriggerWarning">
                        TW
                    </div>
                        <button className="writePostButton" type="submit">
                        Post
                    </ button>

                    </div>
                </form>

            </div>
        </>
    );
}