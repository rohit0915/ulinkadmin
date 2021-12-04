import React, { useEffect } from 'react';

import HOC from "../../Common/HOC";
import { Grid, Card } from '@material-ui/core';
import "./Home.css";

import cap from "../images/cap.png";
import a from "../images/a.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import s7 from "../images/s7.png";
import s8 from "../images/s8.png";
import s9 from "../images/s9.png";
import s10 from "../images/s10.png";
import s11 from "../images/s11.png";
import s12 from "../images/s12.png";
import slideimage from "../images/slideimage.png"


import Monitize from "../UsedCompnents/Monitize"
import Embed from '../UsedCompnents/Embed';
import MultilpleLinks from '../UsedCompnents/MultilpleLinks';
import MultipleLayout from '../UsedCompnents/MultipleLayout';
import InDepth from '../UsedCompnents/InDepth';
import GetYourLink from '../UsedCompnents/GetYourLink';


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="home_background_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={6} className="p-3">
                            <div className="home_content">ULNK HUB:</div>
                            <div className="home_content"> <span className="content_color">We Drive Connections</span> <br /></div>
                            <div className="home_para">Personalize the journey to all of your information, sales channels, social mdia links and so much more. </div>

                            <div className="mt-2 mb-2 text-right">
                                <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                            </div>
                        </Grid>
                        <Grid item md={2} className="p-3">
                            <Card>
                                <div className="p-2">
                                    <div>Facebook</div>
                                    <div className="text-center">
                                        <img src={cap} alt="" />
                                    </div>
                                    <div className="text-center link_cards_data">
                                        Hold All your Link
                                    </div>
                                    <div className="text-center d-flex">
                                        <span><i class="fa fa-paperclip"></i></span>
                                        <span className="link_cards_data_content_color ml-2"> unlink.yourname</span>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <div>
                                <img src={a} alt="" className="crasoul_image" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="mt-5 user_color_back p-5">
                    <div className="text-center home_content">A ULNK HUB gives you the superpower to deliver an interactive world<br />  where everything is accessible to your customers, followers  <br />and friends. </div>
                    <div className="text-center  mt-3">
                        <img src={slideimage} alt="" className="crasoul_image" />
                    </div>

                </div>


                <div className="section_third_back">
                    <div className="data_padding_from_both">
                        <Grid className="Component_main_grid">
                            <Grid item md={3} className="p-3">
                                <img src={s1} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s2} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s4} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>

                        <Grid className="Component_main_grid p-3 ">
                            <Grid item md={3} className="p-3">
                                <img src={s5} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s6} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s7} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s8} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>

                        <Grid className="Component_main_grid p-3 ">
                            <Grid item md={3} className="p-3">
                                <img src={s9} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s10} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s11} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={s12} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className="mt-5 p-2">
                    <div className="text-center home_content">A ULNK HUB allows companies to personalize a consumers journey.<br/> Drive people to your important information, sales channels<br/> and social media connections.</div>
                    <div className="mt-2 mb-2 text-center">
                        <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                    </div>
                </div>

                <div className="cards_data_padding">
                    <div className="mt-5 p-2">
                        <Monitize />
                    </div>

                    <div className="mt-3 p-2">
                        <Embed />
                    </div>

                    <div className="mt-3 p-2">
                        <MultilpleLinks />
                    </div>

                    <div className="mt-3 p-2">
                        <MultipleLayout />
                    </div>

                    <div className="mt-3 p-2">
                        <InDepth />
                    </div>
                </div>

                <div className="mt-3">
                    <GetYourLink />
                </div>
            </div>
        </>
    )
}

export default HOC(Home)
