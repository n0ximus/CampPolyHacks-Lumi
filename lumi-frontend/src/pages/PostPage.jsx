import React from 'react';
import './PostPage.css'
import commentBlock from './commentBlock.jsx'
import { Link } from 'react-router-dom';

export default function PostPage() {

    return (
        <>
            <div className="postPage">
            <div className="commentBlock">
                <p className="commentText">{commentBlock.body}</p>
                </div>
            </div>
        </>
    )
}
