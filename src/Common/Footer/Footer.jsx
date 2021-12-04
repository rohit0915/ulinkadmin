import React from 'react'
import { Grid } from '@material-ui/core';

//css file
import "./Footer.css";
import logo from "../Header/logo.png";

function Footer(props) {
    return (
        <>

            <div className="footer_color">

                <div className=" p-3 "> <img src={logo} alt="" style={{ height: "55px" }} /></div>
                <Grid className="Component_main_grid p-3 ">
                    <Grid item md={9} className="p-3">

                        <div className="mt-1 Footer_Content">UNLK: We Drive Connections </div>
                        <div className="mt-1 Footer_Content">Connect with Us:<i class="fa fa-facebook hover_cursor ml-3"></i>  <i class="fa fa-twitter hover_cursor ml-3"></i>  <i class="fa fa-instagram hover_cursor ml-3"></i> </div>
                    </Grid>

                    <Grid item md={3} className="p-3">
                        <div className="mt-1 Footer_heading_Links">Terms & Conditions</div>
                        <div className="mt-1 Footer_heading_Links">Privacy Policy</div>
                        <div className="mt-1 Footer_heading_Links">Pricing</div>
                    </Grid>
                </Grid>
                <div className="text-center mt-1 pb-3 Footer_Content">Copyrights @ {new Date().getFullYear()} All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer
