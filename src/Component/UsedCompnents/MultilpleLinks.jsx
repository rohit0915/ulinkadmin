import React from 'react'
import { Grid } from '@material-ui/core';

import "./Monitize.css";

//used image
import links from "../images/links.png"

function MultilpleLinks() {
    return (
        <>
            <div>
                <Grid className="Component_main_grid p-3 ">
                    <Grid item md={6} className="p-3">
                        <div className="page_heading">Multiple links and layouts</div>
                        <div className="data_fomtting_image mt-5">Share your ULNK to every social platform and let the audieence read all
                        your content with the simplest present.
                        </div>
                        <div className="text-right mt-3 mb-3">
                            <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                        </div>
                    </Grid>
                    <Grid item md={6} className="p-3">
                        <div className="text-center">
                            <img src={links} alt="" className="multiple_links_image"/>
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default MultilpleLinks
