import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import "./R.jpeg";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="R.jpeg"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Masika{" "}
                            <span className="post_headerSpecial">
                                <VerifiedIcon className="post_badge"/> @steph
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>We all need good coffee</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="post_footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
                    <LoopOutlinedIcon fontSize="small"/>
                    <FavoriteBorderOutlinedIcon fontSize="small"/>
                    <FileUploadOutlinedIcon fontSize="small"/>

                </div>
            </div>

        </div>
    );
}

export default Post;