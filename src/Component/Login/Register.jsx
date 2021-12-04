import React, { useState, useEffect } from "react";

//common component
import HOC from "../../Common/HOC";

//css file
import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";


const Register = (props) => {

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <div className="home_background_color">
                <div className="Login_Main_div content_padding pb-5">
                    <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                        <p className="login_page_heading mt-3">Sign Up</p>
                        <div className="main_padding_top_bottom">
                            <div>
                                <TextField
                                    placeholder="Name"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mt-2">
                                <TextField
                                    placeholder="Email Address"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mt-2">
                                <TextField
                                    placeholder="Mobile Number"
                                    id="outlined-basic"
                                    variant="outlined"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mt-2">
                                <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="off"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setshowPassword(!showPassword)}
                                                    onMouseDown={(event) => event.preventDefault()}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                            </div>

                            {/* <div className="d-flex justify-content-between mt-1 mb-2">
                                <span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                                        <label className="form-check-label login_content" for="defaultCheck1">
                                            Remember me
                                        </label>
                                    </div>
                                </span>
                                <span className="login_content hover_cursor">forgot Password?</span>
                            </div> */}

                            <div className="inputfiledformatting mt-3">
                                <Button
                                    variant="contained"
                                    className="Login_page_button"
                                    onClick={() => props.history.push("/edit-profile")}
                                >
                                    Sign up
                                </Button>
                            </div>
                            <div className="mt-1 mb-1 login_content">By creating an account you agree to our <span className="link_terms">Terms and conditions</span></div>
                            <div className="mt-1 mb-3 login_content">Already have an account? <span className="link_terms" onClick={() => props.history.push("/login")}>Login</span></div>
                        </div>
                    </Card>

                </div>
            </div>
        </>
    );
};

export default HOC(Register);
