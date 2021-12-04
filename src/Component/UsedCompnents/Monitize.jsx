import React from 'react'
import { Grid } from '@material-ui/core';

import "./Monitize.css";

//used image
import monitize from "../images/monitize.png"

function Monitize() {
    return (
        <>
            <div>
                <Grid className="Component_main_grid p-3 ">
                    <Grid item md={6} className="p-3">
                        <div className="page_heading">Monitize Social Power</div>
                        <div className="data_fomtting_image mt-5">
                            DRIVE SALES ULNK HUB is a platform where users can create and share digital content and
                            drives revenue with irect connection to sales pages an affiliate marketing partners.
                        </div>
                        <div className="text-right mt-3 mb-3">
                            <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                        </div>
                    </Grid>
                    <Grid item md={6} className="p-3">
                        <div className="text-center">
                            <img src={monitize} alt="" className="image_height" />
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default Monitize
