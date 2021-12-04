import React from 'react'
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid, Button, Card } from '@material-ui/core';
import "./LinkStyles.css"
import user from "../../images/user.jpg"

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SiteDetails from './SiteDetails.jsx';




function AddLinks() {
    const [value, setValue] = React.useState(0);
    const imageArr = [
        { data: "Title" },
        { data: "Title" },
        { data: "Title" },
        { data: "Title" },
        { data: "Title" },
    ]


    const CarddataArr = [
        { data: "Backgroun Image" },
        { data: "Page Color" },
        { data: "Main font" },
        { data: "Font for title" },
        { data: "Font Case" }
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="home_background_color">
                <div className="padding_from_top">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={7} className="p-3">
                            <div className="border_right_links">
                                <div className="tabs text-center userdaboard_color">
                                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                        <Tab label="Site details" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                        <Tab label="Layouts" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />

                                    </Tabs>
                                </div>

                                <div className="mt-1">
                                    {/* first tab data*/}
                                    <div className="tab_pannel_data">
                                        <TabPanel value={value} index={0}>
                                            <SiteDetails />
                                        </TabPanel>
                                    </div>

                                    {/* second tab data*/}
                                    <TabPanel value={value} index={1}>
                                        <div className="mt-3">
                                            <Card className=" mb-2 Card_shadow p-2">
                                                <div className="text-center Style_heading">Layout</div>
                                                <div className="text-center Style_para mt-2">List with optional squared (1:1) images</div>
                                                <div className="data_padding_from_both mt-2">
                                                    <Card className="Card_shadow p-2">
                                                        <Grid className="Component_main_grid">
                                                            <Grid item md={3} className="p-3"></Grid>
                                                            <Grid item md={6} className="p-3">
                                                                {imageArr.map((item, index) => (
                                                                    <div className="p-2 mt-2 styles_image">
                                                                        <span><i className="fa fa-image" /></span>
                                                                        <span className="ml-3">{item.data}</span>
                                                                    </div>
                                                                ))}
                                                                <div className="text-center">
                                                                    <div class="form-check form-check-inline">
                                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                                        <label class="form-check-label" for="inlineCheckbox1">Selected</label>
                                                                    </div>
                                                                </div>

                                                            </Grid>
                                                            <Grid item md={3} className="p-3">
                                                                <div className="mt-2 text-right">
                                                                    <i class="fa fa-chevron-right"></i>
                                                                </div>
                                                            </Grid>
                                                        </Grid>

                                                    </Card>
                                                </div>
                                            </Card>

                                            <div className="mt-3">
                                                {CarddataArr.map((item, index) => (
                                                    <Card className="pt-3 pb-3 Card_shadow mt-4">
                                                        <div className="text-center Heading_setting mt-1">{item.data}</div>
                                                        <div className="text-center heading_content mt-1">Creators prefers these advance featurs</div>
                                                        <div className="text-center mt-3 ">
                                                            <Button
                                                                variant="contained"
                                                                className="starttrailbtn"
                                                            >
                                                                Start Free Trail <i className="fa fa-send ml-2" />
                                                            </Button>
                                                        </div>
                                                    </Card>
                                                ))}
                                            </div>
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
