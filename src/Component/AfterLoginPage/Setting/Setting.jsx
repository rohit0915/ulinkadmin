import React, { useState, useEffect } from 'react'
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid, Card, Button } from '@material-ui/core';
import Switch from "react-switch";

import user from "../../images/user.jpg"

import "./Setting.css";

function Setting() {

    const [ischecked, setischecked] = useState(false);

    const SettingArr = [
        { data: "Analytics" },
        { data: "Mailchip Integration" },
        { data: "SEO" },
        { data: "Deep Linking" }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="home_background_color">
                <div className="padding_from_top">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={8} className="p-3">
                            <div className="border_right_links">
                                <div className="data_padding_from_both">
                                    <Card className="pt-2 pb-2 Card_shadow mt-2">
                                        <div className="text-center Heading_setting">Donation/Suppot Box</div>
                                        <div className="text-center heading_content mt-2">Accept direct donations fom your fans.<br />100% Free. No added fees.</div>
                                        <div className="text-center mt-2">
                                            <span className="heading_content2">Donation Box is Active</span>
                                            <span className="ml-3 mt-3"><Switch onChange={() => setischecked(!ischecked)} checked={ischecked} /></span>
                                        </div>
                                        <div className="data_padding_from_both">
                                            <div>
                                                <label>Donation Title</label>
                                                <input type="email" class="form-control" placeholder="Suppot my work" />
                                            </div>
                                            <div>
                                                <label>Paypal's Account Email</label>
                                                <input type="email" class="form-control" placeholder="Email address" />
                                            </div>
                                            <div className="text-right mt-2">
                                                <span>
                                                    <Button
                                                        variant="contained"
                                                        className="button_formatting mr-2"
                                                    >
                                                        Clear
                                                    </Button>
                                                </span>
                                                <span>
                                                    <Button
                                                        variant="contained"
                                                        className="button_formatting"
                                                    >
                                                        Sumbit
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    </Card>

                                    {SettingArr.map((item, index) => (
                                        <Card className="pt-3 pb-3 Card_shadow mt-4">
                                            <div className="text-center Heading_setting mt-1">{item.data}</div>
                                            <div className="text-center heading_content mt-1">Creators prefers these advance featurs</div>
                                            <div className="text-center mt-3 ">
                                                <Button
                                                    variant="contained"
                                                    className="starttrailbtn"
                                                >
                                                    Start Free Trail <i className="fa fa-send ml-2" />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <div className="phoneborder_afterlogin p-2">
                                <div className="text-center">
                                    <div className="mt-3">
                                        <img src={user} alt="" className="user_Image" />
                                    </div>
                                    <div>User Name</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC1(Setting)
