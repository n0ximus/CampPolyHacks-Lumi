import "./writePost.css"

export default function WritePost(){
    return (
        <>
            <div className="writePost">
                <div className="writePostType">
                    
                    
                    <text className="writePostTitle">
                        write praise
                    </text>
                    <div className="writePostIcon">
                        <i class="fa-solid fa-sun"></i>
                    </div>
                </div>
                
                <textarea type="text" placeholder="write praise" className="writePostInput" autoFocus={true}/>

                <div className="writePostFooter">
                    <div className="writePostTags">
                        Tags
                    </div>
                    <div className="writePostTriggerWarning">
                        TW
                    </div>
                    <div className="writePostButton">
                        Post
                    </div>
                </div>
            </div>
        </>
    );
}