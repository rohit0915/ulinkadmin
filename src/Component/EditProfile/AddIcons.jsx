import React from 'react'
import HOC from "../../Common/HOC";
import { Card, Button } from "@material-ui/core";
import "./EditProfile.css";

function AddIcons(props) {

    return (
        <>
            <div className="home_background_color">
                <div className="content_padding pb-3">
                    <Card className="pt-2 pb-2 Card_shadow  mt-2">


                        <div className="mt-3 data_padding_from_both">
                            <div className="profile_title_heading">Add Icons</div>
                            <div className="title_formating">You can always add more icons later </div>
                            <div className="mt-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-instagram" /></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="@instagram.username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-twitter" /></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="@twitter.username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-whatsapp" /></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="+91 2372889331" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="email address" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>


                            <div className="text-right mt-3 mb-3">
                                <Button
                                    variant="contained"
                                    className="button_formatting"
                                    onClick={() => props.history.push("/add-links")}
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

export default HOC(AddIcons)
