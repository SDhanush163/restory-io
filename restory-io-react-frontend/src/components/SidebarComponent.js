import React, { Component } from 'react';
import './Assets/CSS/style-sidebar.css'
import logo from './Assets/Images/logo1.png'
import companySplash from './Assets/Images/restory.png'
import HomeIcon from '@material-ui/icons/Home';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import FaceIcon from '@material-ui/icons/Face';

function SidebarComponent() {
    return (<React.Fragment>
        <div class="wrapper">
            <aside class="main_sidebar">
                <li>
                    <div id="logo"><a href="#timeline"><img src={logo} height="150px" /></a>
                        <img src={companySplash} height="90px" /></div>
                </li>
                <ul>
                    <li><a href="http://localhost:3000/home"><i className="material-icons"><HomeIcon /></i>Home</a></li>
                    <li><a href="#"><i className="material-icons"><ViewDayIcon /></i>Feeder</a></li>
                    <li><a href="http://localhost:3000/home"><i className=" material-icons"><GroupIcon /></i>Subbed Groups</a></li>
                    <li><a href="http://localhost:3000/createGroup"><i className="material-icons"><GroupAddIcon /></i>New Group</a></li>
                    <li><a href="#search_group"><i className="material-icons"><SearchIcon /></i>Search Group</a></li>
                    <li><a href="#profile"><i className="material-icons"><FaceIcon /></i>Profile</a></li>
                </ul>
            </aside>
        </div>
    </React.Fragment>);
}

export default SidebarComponent;