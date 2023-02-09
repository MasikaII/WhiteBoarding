import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from "@mui/material/Button";



function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon"/>

            {/* Sidebar Options */}
            <SidebarOption active Icon={ HomeIcon } text="Home"/>
            <SidebarOption Icon={ TagIcon } text="Explore"/>
            <SidebarOption Icon={ NotificationsNoneOutlinedIcon } text="Notifications"/>
            <SidebarOption Icon={ MailOutlineIcon } text="Messages"/>
            <SidebarOption Icon={ BookmarkBorderOutlinedIcon } text="Bookmarks"/>
            <SidebarOption Icon={ ListAltIcon } text="Lists"/>
            <SidebarOption Icon={ PersonOutlineOutlinedIcon } text="Profile"/>
            <SidebarOption Icon={ MoreHorizIcon } text="More"/>

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;