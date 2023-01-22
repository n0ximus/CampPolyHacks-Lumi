import React from "react"
import "./Home.css"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import PostMap from "../components/PostMap"
let posts = [
    { "body": "hello world i am typing to make this have a new line so we can see what it looks like when you're able to go to new lines and stuff", 
    "stardust": 10, 
    "category": ["advice", "lgbtq+"],
    "TW": false
    },
    { "body": "hello edde", 
    "stardust": 5, 
    "category": ["disability"],
    "TW": false 
    },

]
export default function Home() {

    return (
        <>
            <div className="home">
                <PostMap posts={posts} />
            </div>
        </>
    )
}