import "./writePraise.css"
import { useContext, useState } from "react";
import axios from "axios";

export default function WritePraise() {
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
            <div className="writePraise">
                <div className="writePraiseType">
                    
                    
                    <p className="writePraiseTitle">
                        write praise
                    </p>
                    <div className="writePraiseIcon">
                        <i className="fa-solid fa-sun"></i>
                    </div>
                </div>
                <form className="writePraiseForm" onSubmit={handleSubmit}>

                    <textarea type="text" placeholder="write praise" className="writePraiseInput" autoFocus={true} onChange={e => setDescription(e.target.value)} />


                <div className="writePraiseFooter">
                    <div className="writePraiseTags">
                        Tags
                    </div>
                    <div className="writePraiseTriggerWarning">
                        TW
                    </div>
                        <button className="writePraiseButton" type="submit">
                        Post
                    </ button>

                    </div>
                </form>

            </div>
        </>
    );
}