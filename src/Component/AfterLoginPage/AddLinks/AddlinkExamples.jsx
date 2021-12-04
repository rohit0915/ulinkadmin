import React, { useEffect } from 'react'


import { Grid, Card } from '@material-ui/core';
//css file
import "./AddLinks.css";

import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";

function AddlinkExamples() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Card className="pt-2 pb-2 Card_shadow card_back_color mt-2">
                <div className="Linker_pages_heading text-center mt-4">Check out some of our favourite linker pages<br />We Can't wait to see Yoursly</div>


                <div className="data_padding_from_both mt-2">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>

                    </Grid>

                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={4} className="p-3">
                            <img src={c5} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c4} alt="" className="crasoul_image" />
                        </Grid>

                    </Grid>

                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={4} className="p-3">
                            <img src={c5} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <img src={c3} alt="" className="crasoul_image" />
                        </Grid>
                    </Grid>
                </div>
            </Card>
        </>
    )
}

export default AddlinkExamples
