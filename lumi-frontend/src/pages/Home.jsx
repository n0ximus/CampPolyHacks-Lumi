import React from "react"
import "./Home.css"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import PostMap from "../components/PostMap"
import axios from "axios";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts");
            setPosts(res.data);
            console.log(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <div className="home">
                <PostMap posts={posts} />

            </div>
        </>
    )
}