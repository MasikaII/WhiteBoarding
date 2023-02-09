import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                {/* Header */}
                <h2>Home</h2>
            </div>
            
            {/* TweetBox */}
            <TweetBox />

            {/* Posts */}
            <Post />
            <Post />
            <Post />
          
        </div>
    );
}

export default Feed;