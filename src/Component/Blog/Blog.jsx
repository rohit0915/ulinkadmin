import React, { useEffect } from 'react';
import "./Blog.css";
import { Grid, Button, Card } from '@material-ui/core';
import HOC from "../../Common/HOC";

import blog1 from "../images/blog1.png";
import blog from "../images/blog.png";
function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const tendingPost = ([
        { data: "5 easy way to optimize your Instagram feed" },
        { data: "5 easy way to optimize your Instagram feed" },
        { data: "5 easy way to optimize your Instagram feed" },
        { data: "5 easy way to optimize your Instagram feed" },
        { data: "5 easy way to optimize your Instagram feed" },
        { data: "5 easy way to optimize your Instagram feed" },
    ])
    const socialPost = ([
        { data: "SOCIAL MEDIA STRATEGY" },
        { data: "SOCIAL MEDIA STRATEGY" },
        { data: "SOCIAL MEDIA STRATEGY" },
        { data: "SOCIAL MEDIA STRATEGY" },
        { data: "SOCIAL MEDIA STRATEGY" },
        { data: "SOCIAL MEDIA STRATEGY" },
    ])
    return (
        <>
            <div className="home_background_color pt-5">
                <div className="cards_data_padding">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={8} >
                            <div className="home_content">Learn About Ulnk</div>
                            <div>
                                <Grid className="Component_main_grid ">
                                    <Grid item md={5} className="p-3">
                                        <img src={blog1} alt="" className="blog_image" />
                                        <div className="text-center mt-1"> <span><Button className="blog_link p-2">Why Should you use ulnk?</Button></span></div>
                                    </Grid>
                                    <Grid item md={1} className="p-3"></Grid>
                                    <Grid item md={5} className="p-3">
                                        <img src={blog} alt="" className="blog_image" />
                                        <div className="text-center mt-1"> <span><Button className="blog_link p-2">Get Started with ulnk</Button></span></div>
                                    </Grid>
                                    <Grid item md={1} className="p-3"></Grid>
                                </Grid>
                            </div>


                            <div className="home_content mt-5">Social Media Strategy</div>
                            <div className="subcontent_social">Know more about social media</div>
                            <div className="cardheight_overflow1 mt-2">
                                {socialPost.map((item, index) => (
                                    <div>
                                        <Grid className="Component_main_grid ">
                                            <Grid item md={4} className="p-3">
                                                <img src={blog1} alt="" className="social_media_image" />
                                            </Grid>

                                            <Grid item md={8} className="p-3">
                                                <div className="socail_media_heading">SOCIAL MEDIA STRATEGY</div>
                                                <div className="home_content">The Truth About Affilated Marketing</div>
                                                <div className="subcontent_social">NOVEMBER 20,2021</div>
                                                <div className="subcontent_social"><i className="fa fa-arrow-right" /></div>
                                            </Grid>

                                        </Grid>
                                        <div className="horizontal_line" />
                                    </div>
                                ))}
                            </div>

                            <div className="home_content mt-5">Update</div>
                            <div>
                                <Grid className="Component_main_grid ">
                                    <Grid item md={3} className="p-3">
                                        <img src={blog1} alt="" className="social_media_image" />
                                    </Grid>
                                    <Grid item md={3} className="p-3">
                                        <img src={blog} alt="" className="social_media_image" />
                                    </Grid>
                                    <Grid item md={6} className="p-3"></Grid>
                                </Grid>
                            </div>

                            <div className="home_content mt-5">User's Story</div>
                            <div>
                                <Grid className="Component_main_grid ">
                                    <Grid item md={3} className="p-3">
                                        <img src={blog1} alt="" className="social_media_image" />
                                    </Grid>
                                    <Grid item md={3} className="p-3">
                                        <img src={blog} alt="" className="social_media_image" />
                                    </Grid>
                                    <Grid item md={6} className="p-3"></Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <div>
                                <div className="mt-2 mb-3 text-right">
                                    <button className="Home_page_button"><i className="fa fa-send mr-2" /> Subscribe</button>
                                </div>
                                <Card className="Card_shadow">
                                    <div className="text-center"><span className="trending_text">TRENDING POSTS</span></div>
                                    <hr style={{ width: "30%" }} />
                                    <div className="cardheight_overflow">
                                        {tendingPost.map((item, index) => (
                                            <div className="p-2 d-flex mt-2">
                                                <span><img src={blog1} className="treanding_post" alt="" /></span>
                                                <span className="ml-3">
                                                    <div className="trending_heading">{item.data}</div>
                                                    <div className="trending_heading">1 day ago</div>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC(Blog)
