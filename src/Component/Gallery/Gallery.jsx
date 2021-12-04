import React, { useEffect } from 'react'

//common component
import HOC from "../../Common/HOC";
import { Grid } from '@material-ui/core';
//css file
import "./Gallery.css";


import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";

function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="home_background_color">

                <div className="content_padding">
                    <div className="text-center home_content">Ulnk Hub<span className="content_color"> Gallery</span></div>
                    <div className="home_para text-center mt-4">Check out some of our favourite pages</div>
                    <div className="mt-3 text-center">
                        <button className="Home_page_button">Sign up free now !</button>
                    </div>

                    <div className="data_padding_from_both mt-5">
                        <Grid className="Component_main_grid p-3 ">
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c4} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>

                        <Grid className="Component_main_grid p-3 ">
                            <Grid item md={3} className="p-3">
                                <img src={c5} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>

                        <Grid className="Component_main_grid p-3 ">
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                            <Grid item md={3} className="p-3">
                                <img src={c3} alt="" className="crasoul_image" />
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(Gallery)
