import React, { useEffect } from 'react'
import { Card, Grid, Button } from '@material-ui/core';

//common component
import HOC1 from "../../../Common/HOC1";
import "./MyAccount.css"

function MyAccount(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="home_background_color">
                <div className="content_padding pb-5">
                    <div className="home_content text-center">MY ACCOUNT</div>
                    <Card className="Card_shadow mt-2">
                        <Grid className="Component_main_grid p-1 ">
                            <Grid item md={11} className="p-1">
                                <div className="EditProfile_heading">Email Address</div>
                                <div className="EditProfile_heading">abcdd@gmail.com</div>
                            </Grid>
                            <Grid item md={1} className="p-1">
                                <Button className="EditPrfileBtn">Edit</Button>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid className="Component_main_grid p-1 ">
                            <Grid item md={11} className="p-1">
                                <div className="EditProfile_heading">Password</div>
                                <div className="EditProfile_heading">Change Password</div>
                            </Grid>
                            <Grid item md={1} className="p-1">
                                <Button className="EditPrfileBtn" onClick={() => props.history.push("/email-verify")}>Edit</Button>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid className="Component_main_grid p-1 ">
                            <Grid item md={11} className="p-1">
                                <div className="EditProfile_heading">Language</div>
                                <div className="EditProfile_heading">English</div>
                            </Grid>
                            <Grid item md={1} className="p-1">
                                <Button className="EditPrfileBtn">Edit</Button>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid className="Component_main_grid p-1 ">
                            <Grid item md={11} className="p-1">
                                <div className="EditProfile_heading">Timezone</div>
                                <div className="EditProfile_heading">Asia/calcutta</div>
                            </Grid>
                            <Grid item md={1} className="p-1">
                                <Button className="EditPrfileBtn">Edit</Button>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid className="Component_main_grid p-1 ">
                            <Grid item md={11} className="p-1">
                                <div className="EditProfile_heading">More Information</div>
                            </Grid>
                            <Grid item md={1} className="p-1">
                                <Button className="EditPrfileBtn">Edit</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HOC1(MyAccount)
