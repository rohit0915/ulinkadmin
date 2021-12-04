import React, { useEffect } from 'react'

//common component
import HOC from "../../Common/HOC";

//css file
import "./Pricing.css";

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Monthly from './Monthly';
import Links from './Links';
import Customization from './Customization';
import Analytics from './Analytics';
import OtherPricing from './OtherPricing';
import Integration from './Integration';
import Annually from './Annually';

function Pricing() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="home_background_color">

                <div className="content_padding">
                    <div className="text-center home_content">One link with a whole lot of power</div>
                    <div className="home_para text-center mt-4">pick your plan, you can always change later</div>
                    {/* <div className="mt-3 text-center">
                        <button className="Home_page_button">Sign up free now !</button>
                    </div> */}

                    <div className="data_padding_from_both mt-5">
                        <div className="tabs text-center">
                            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                <Tab label="Monthly" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                <Tab label="Annual" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />

                            </Tabs>
                        </div>

                        <div className="mt-1">
                            {/* first tab data*/}
                            <div className="tab_pannel_data">
                                <TabPanel value={value} index={0}>
                                    <Monthly />
                                </TabPanel>
                            </div>

                            {/* second tab data*/}
                            <TabPanel value={value} index={1}>
                                <Annually />
                            </TabPanel>
                        </div>

                        <div className="mt-2 pb-2">
                            <Links />
                        </div>

                        <div className="mt-2 pb-2">
                            <Customization />
                        </div>

                        <div className="mt-2 pb-2">
                            <Analytics />
                        </div>

                        <div className="mt-2 pb-2">
                            <Integration />
                        </div>

                        <div className="mt-2 pb-4">
                            <OtherPricing />
                        </div>

                    </div>


                </div>

            </div>
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
export default HOC(Pricing)
