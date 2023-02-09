import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./R.jpeg";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="R.jpeg"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input
                    className="tweetBox_imageInput"
                    placeholder="Enter image url"
                    type="text"
                />
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>

        </div>
    );
}

export default TweetBox;