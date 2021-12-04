import React, { useState } from 'react'
import HOC from "../../Common/HOC";
import { Card, Button } from "@material-ui/core";
import "./EditProfile.css";

function EditProfile(props) {
    const [showimage] = useState("https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png")
    return (
        <>
            <div className="home_background_color">
                <div className="content_padding pb-3">
                    <Card className="pt-2 pb-2 Card_shadow  mt-2">
                        <div className="mx-auto">
                            <div className="text-center">
                                <img
                                    src={showimage}
                                    alt=""
                                    id="img"
                                    className="profile_Edit"
                                />
                            </div>
                            <div className="profile_input text-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image-upload"
                                    id="input"
                                    // onChange={(e) => {
                                    //     setshowimage(URL.createObjectURL(e.target.files[0]))
                                    // }}
                                />
                                <div className="">
                                    <label className="resumeview_image_upload" htmlFor="input">
                                        <i class="fa fa-camera mr-1"></i>

                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 data_padding_from_both">
                            <div className="profile_title_heading">Edit Your Profile title</div>
                            <div className="mt-2">
                                <input type="text" className="form-control" placeholder="Profile title" />
                            </div>
                            <div className="title_formating">* This can be changed at any time </div>

                            <div className="text-right mt-3 mb-3">
                                <Button
                                    variant="contained"
                                    className="button_formatting"
                                    onClick={() => props.history.push("/add-icons")}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default HOC(EditProfile)
