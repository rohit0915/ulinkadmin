import React, { useEffect } from "react";
import HOC1 from "../../../Common/HOC1.jsx";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField } from "@material-ui/core";


const VerifyEmail = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="home_background_color">
                <div className=" content_padding pb-5">
                    <div className="page_heading text-center mt-3">Verify Your Email</div>
                    <Card className="pt-2 pb-2 Card_shadow  mt-2">
                        <div className="main_padding_top_bottom">
                            <div>
                                <TextField
                                    placeholder="Email"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"
                                />

                            </div>


                            <div className="text-center mt-3">
                                <Button
                                    variant="contained"
                                    className=" button_formatting"
                                    onClick={() => props.history.push("/reset-password")}
                                >
                                    Verify
                                </Button>

                            </div>
                            <div className="mt-3 mb-3 text-center"><span className="Login_in" onClick={() => props.history.goBack()}>Cancel</span></div>

                        </div>
                    </Card>

                </div>
            </div>
        </>
    );
};

export default HOC1(VerifyEmail);
