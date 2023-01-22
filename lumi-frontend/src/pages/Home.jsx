import React from "react"
import "./Home.css"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import PostMap from "../components/PostMap"
let posts = [
    { "body": "hello world" },
    { "body": "hello edde" },

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