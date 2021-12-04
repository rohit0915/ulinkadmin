import React from 'react'
import { Grid } from '@material-ui/core';

import "./Monitize.css";

//used image
import indepth from "../images/indepth.png"

function InDepth() {
    return (
        <>
            <div>
                <Grid className="Component_main_grid p-3 ">

                    <Grid item md={6} className="p-3">
                        <div className="page_heading">In-depth analysis</div>
                        <div className="data_fomtting_image mt-5">
                            Detailed analysis of day-by-day clicks on each link. Provide an insight into 
                            your audience with Google Analytics and retarget with Facebook pixel.
                        </div>
                        <div className="text-right mt-3 mb-3">
                            <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                        </div>
                    </Grid>
                    <Grid item md={6} className="p-3">
                        <div className="text-center">
                            <img src={indepth} alt="" className="image_height" />
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default InDepth
