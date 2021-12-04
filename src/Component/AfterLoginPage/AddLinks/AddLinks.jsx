import React, { useState } from 'react'
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid, Button, Card } from '@material-ui/core';
import "./AddLinks.css"
import Expand from "react-expand-animated"
import user from "../../images/user.jpg"

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddlinkExamples from './AddlinkExamples.jsx';

import facebook from "../../images/icons/facebook.png";
import twitter from "../../images/icons/twitter.png"
import whatsapp from "../../images/icons/whatsapp.png"
import youtube from "../../images/icons/youtube.png"
import telegram from "../../images/icons/telegram.png"
import instagram from "../../images/icons/instagram.png"
import pintrest from "../../images/icons/pintrest.png"
import shopping from "../../images/icons/shopping.png"
import linkedin from "../../images/icons/linkedin.png"
import etsy from "../../images/icons/etsy.png"
import tiktok from "../../images/icons/tiktok.png"
import amazon from "../../images/icons/amazon.png"
import paypal from "../../images/icons/paypal.png"
import ebay from "../../images/icons/ebay.png"
import google from "../../images/icons/google.png"
import digg from "../../images/icons/digg.png"
import m from "../../images/icons/m.png"
import spotify from "../../images/icons/spotify.png"
import twitch from "../../images/icons/twitch.png"
import discord from "../../images/icons/discord.png"
import website from "../../images/icons/website.png"
import snapchat from "../../images/icons/snapchat.png"
import shopify from "../../images/icons/shopify.png"
import soundcloud from "../../images/icons/soundcloud.png"
import messanger from "../../images/icons/messanger.png"
import line from "../../images/icons/line.png"

function AddLinks() {
    const [value, setValue] = React.useState(0);
    //local state
    const [addMangeopen, setaddMangeopen] = useState(false);
    const [NewLinksArr, setNewLinksArr] = useState([])
    const [title, settitle] = useState("")
    const [link, setlink] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const SocailIcons = [
        {
            path: facebook
        },
        {
            path: twitter
        },
        {
            path: whatsapp
        },
        {
            path: youtube
        },
        {
            path: telegram
        },
        {
            path: instagram
        },
        {
            path: pintrest
        },
        {
            path: shopping
        },
        {
            path: linkedin
        },
        {
            path: etsy
        },
        {
            path: tiktok
        },
        {
            path: amazon
        },
        {
            path: paypal
        },
        {
            path: ebay
        },
        {
            path: google
        },
        {
            path: digg
        },
        {
            path: m
        },
        {
            path: spotify
        },
        {
            path: twitch
        },
        {
            path: discord
        },
        {
            path: website
        },
        {
            path: snapchat
        },
        {
            path: shopify
        },
        {
            path: soundcloud
        },
        {
            path: messanger
        },
        {
            path: line
        }

    ]

    return (
        <>
            <div className="home_background_color">
                <div className="padding_from_top">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={7} className="p-3">
                            <div className="border_right_links">
                                <div className="tabs text-center userdaboard_color">
                                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                        <Tab label="Example" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                        <Tab label="Link" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />
                                        <Tab label="Icons" {...a11yProps(2)} className="button_login_decoration  tabs_text_formatting" />
                                    </Tabs>
                                </div>

                                <div className="mt-1">
                                    {/* first tab data*/}
                                    <div className="tab_pannel_data">
                                        <TabPanel value={value} index={0}>
                                            <AddlinkExamples />
                                        </TabPanel>
                                    </div>

                                    {/* second tab data*/}
                                    <TabPanel value={value} index={1}>
                                        <div className="mt-2">
                                            <Button
                                                variant="contained"
                                                className="add_new_link_btn"
                                                onClick={() => setaddMangeopen(!addMangeopen)}

                                            >
                                                <i className="fa fa-plus mr-2" /> Add New Link
                                            </Button>
                                        </div>

                                        <div className="mt-3 ">
                                            <Expand open={addMangeopen}>
                                                <Card className=" mb-2 Card_shadow p-2">
                                                    <div className="mt-2">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1"> <i class="fa fa-file"></i></span>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Title Example"
                                                                value={title}
                                                                onChange={(e) => {
                                                                    settitle(e.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1"> <i class="fa fa-globe"></i></span>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="www.exampple.com"
                                                                value={link}
                                                                onChange={(e) => {
                                                                    setlink(e.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 mb-2 text-right">
                                                        <Button
                                                            variant="contained"
                                                            className="button_formatting"
                                                            onClick={() => {
                                                                NewLinksArr.push({
                                                                    title: title,
                                                                    link: link
                                                                })
                                                                setNewLinksArr([...NewLinksArr])
                                                            }}
                                                        >
                                                            Add Link
                                                        </Button>
                                                    </div>
                                                </Card>
                                            </Expand>
                                        </div>

                                        <div className="text-center home_para mt-3">You have'nt added any links yet - <br /> complete the inputbox above to add one</div>

                                        <div className="mt-3">
                                            <Card className="Card_shadow documentation_back_color p-3">
                                                <div className="d-flex justify-content-between">
                                                    <span>
                                                        <div className="mt-2">DOCUMENTATION</div>
                                                        <div className="mt-2">Get started with unlnk.co.uk</div>
                                                    </span>
                                                    <span>
                                                        <div className="mt-2">
                                                            <i class="fa fa-chevron-right"></i>
                                                        </div>
                                                    </span>
                                                </div>
                                            </Card>
                                        </div>

                                    </TabPanel>

                                    {/* third tab data*/}
                                    <TabPanel value={value} index={2}>
                                        <div className="mt-3">
                                            <Card className=" mb-2 Card_shadow p-2">
                                                <div className="text-center Style_heading">Position</div>
                                                <div className="text-center Style_para mt-2">Set the icon block above links and below links.</div>
                                                <div className="data_padding_from_both mt-2">
                                                    <div className="d-flex justify-content-between">
                                                        <span>
                                                            <div className="text-center"><i className="fa fa-arrow-up" /></div>
                                                            <div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                                    <label class="form-check-label" for="exampleRadios2">
                                                                        Below Links
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <span>
                                                            <div className="text-center"><i className="fa fa-arrow-down" /></div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                                <label class="form-check-label" for="exampleRadios1">
                                                                    Above Links
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                        <div class="alert alert-warning text-center" role="alert">
                                            Missing a Serive/icons?<span className="suggest_Font"> Suggest it!</span>
                                        </div>

                                        <div className="mt-3">
                                            <Card className=" mb-2 Card_shadow p-2">
                                                <Grid className="d-flex flex-wrap">
                                                    {SocailIcons.map((item, index) => (
                                                        <Grid item md={2} className="p-3 text-center">
                                                            <img src={item.path} alt="" style={{ width: "30px" }} />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Card>
                                        </div>

                                    </TabPanel>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={5} className="p-3">
                            <div className="p-2 userdaboard_color d-flex justify-content-between">
                                <div className="add_link_heading">MY ULNK HUB LINK: <span className="link_color">abcd.bio/userprofile</span></div>
                                <div className="add_link_heading">

                                    <span>
                                        <Button
                                            variant="contained"
                                            className="button_formatting mr-2"
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                    <span>
                                        <Button
                                            variant="contained"
                                            className="button_formatting"
                                        >
                                            Copy
                                        </Button>
                                    </span>
                                </div>

                            </div>

                            <div className="phoneborder_afterlogin p-2 mt-5">
                                <div className="text-center">
                                    <div className="mt-3">
                                        <img src={user} alt="" className="user_Image" />
                                    </div>
                                    <div>User Name</div>


                                </div>
                                <div className="mt-2 p-2 linkoverflow_scroll">
                                    {NewLinksArr.map((item, index) => (
                                        <a href={`//${item.link}`} target="_blank" rel="noreferrer" className="ancor_formatting"><div className="link_back_color mt-2 p-2">{item.title}</div></a>
                                    ))}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </div >
        </>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default HOC1(AddLinks)
