import React, { useEffect } from 'react'

//uses css
import "./Statistics.css"

//common component
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid } from '@material-ui/core';


//used compnent
import Activity from './Activity';
import Icons from './Icons';
import TopLocation from './TopLocation';
import TopRefrences from './TopRefrences';
import DeviceAnalytics from './DeviceAnalytics';


function Statistics() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="home_background_color">
                <div className="statistics_padding_from_top">
                    <div className="home_content text-center pt-5">Lifetime Analytics</div>
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={3} className="p-3 text-center">
                            <div className="home_para">Views</div>
                            <div className="home_para">0</div>
                        </Grid>
                        <Grid item md={3} className="p-3 text-center">
                            <div className="home_para">Clicks</div>
                            <div className="home_para">0</div>
                        </Grid>
                        <Grid item md={3} className="p-3 text-center">
                            <div className="home_para">Avg. CTR </div>
                            <div className="home_para">%</div>
                        </Grid>
                        <Grid item md={3} className="p-3 text-center">
                            <div className="home_para">Avg. Time to Click</div>
                            <div className="home_para">0 sec</div>
                        </Grid>
                    </Grid>

                </div>


                <Grid className="Component_main_grid mt-5 p-3">
                    <Grid item md={3}>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#activity" role="tab" aria-controls="activity">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#icons" role="tab" aria-controls="icons">Icons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#location" role="tab" aria-controls="location">Top Locations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#refrences" role="tab" aria-controls="refrences">Top Referrers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#deviceanalytics" role="tab" aria-controls="deviceanalytics">Device Analytics</a>
                            </li>
                        </ul>

                    </Grid>
                    <Grid item md={9}>
                        <div className="tab-content">
                            {/* activity */}
                            <div className="tab-pane active" id="activity" role="tabpanel">
                                <Activity />
                            </div>

                            {/* icons */}
                            <div className="tab-pane" id="icons" role="tabpanel">
                                <Icons />
                            </div>

                            {/* location  */}
                            <div className="tab-pane" id="location" role="tabpanel">
                                <TopLocation />
                            </div>

                            {/* refrences  */}
                            <div className="tab-pane" id="refrences" role="tabpanel">
                                <TopRefrences />
                            </div>

                            {/* deviceanalytics  */}
                            <div className="tab-pane" id="deviceanalytics" role="tabpanel">
                                <DeviceAnalytics />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HOC1(Statistics)
