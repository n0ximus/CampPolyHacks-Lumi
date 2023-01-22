import React from "react"
import "./Home.css"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import PostMap from "../components/PostMap"
let posts = [
    { "body": "hello world", 
    "stardust": 10, 
    "category": ["advice", "lgbtq+"],
    "TW": true
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