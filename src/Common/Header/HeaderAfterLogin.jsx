import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

//logo
import logo from "./logo.png";

const HeaderAfterLogin = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }

    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        <img src={logo} alt="" style={{ height: "55px" }} />
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color" onClick={() => props.history.push("/add-links")}>Links</span>
                        <span className="header_link_color" onClick={() => props.history.push("/styles")}>Style</span>
                        <span className="header_link_color" onClick={() => props.history.push("/statistics")}>Statistics</span>
                        <span className="header_link_color" onClick={() => props.history.push("/setting")}>Setting</span>
                        <span className="header_link_color" onClick={() => props.history.push("/free-trail")}>Free Trail</span>
                        <span className="header_link_color">
                            <div class="dropdown show">
                                <span className="user_image p-2 mr-2" id="dropdownMenuLink" data-toggle="dropdown" ><i className="fa fa-bell" /></span>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <span className="mt-3 ml-3" >Last changes</span>
                                    <hr />
                                    <span class="dropdown-item">Notification 1</span>
                                    <span class="dropdown-item">Notification 2</span>
                                    <span class="dropdown-item">Notification 3</span>
                                </div>
                            </div>
                        </span>
                        <span className="header_link_color">
                            <div class="dropdown show">
                                <span className="user_image p-2 mr-2" id="dropdownMenuLink" data-toggle="dropdown" >PR</span>Profile Name
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <span className="mt-3 ml-3" >Profile Title</span>
                                    <hr />
                                    <span class="dropdown-item" onClick={() => props.history.push("/my-account")}>Account</span>
                                    <span class="dropdown-item">Billing</span>
                                    <span class="dropdown-item" onClick={() => {
                                        localStorage.clear();
                                        props.history.push("/home")
                                    }}>Logout</span>
                                </div>
                            </div>
                            {/* <div className="dropdown">
                                <span><span className="user_image p-2 mr-2">PR</span>Profile Name</span>
                                <div className="dropdown-content">

                                    <div className="mt-3" >Profile Title</div>
                                    <hr />
                                    <div className="mt-1" onClick={() => props.history.push("/my-account")}>Account</div>
                                    <div className="mt-1" >Billing</div>
                                    <div className="mt-1" onClick={() => {
                                        localStorage.clear();
                                        window.location.href = "/home"
                                    }}>Logout</div>
                                </div>
                            </div> */}


                        </span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/add-links")}>
                                Links
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/styles")}>
                                Styles
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/statistics")} >
                                Statistics
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/setting")}>
                                Setting
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/free-trail")}>
                                Free Trail
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/my-account")}>
                                My Account
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => {
                                localStorage.clear();
                                props.history.push("/home")
                            }}>
                                Logout
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderAfterLogin
