import React, { useState } from 'react'
import { Card, Button } from '@material-ui/core';
import RichTextEditor from "react-rte";
import Switch from "react-switch";

function SiteDetails(props) {
    const [rteValue, setrteValue] = useState(RichTextEditor.createEmptyValue())
    const [ischecked, setischecked] = useState(false)


    const HandleRichtext = (rteValue) => {
        setrteValue(rteValue);
        if (props.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            props.onChange(
                rteValue.toString('html')
            );
        }
    };
    return (
        <>
            <div className="mt-3">
                <Card className=" mb-2 Card_shadow p-2">
                    <div className="text-center Style_heading">Profile pick & userName</div>
                    <div className="text-center">
                        <img
                            src="https://www.seekpng.com/png/detail/202-2024994_profile-icon-profile-logo-no-background.png"
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
                        />
                        <div className="">
                            <label className="resumeview_image_upload" htmlFor="input">
                                <i class="fa fa-camera mr-1"></i>
                            </label>
                        </div>
                    </div>
                    <div className="data_padding_from_both mt-2">
                        <div className="d-flex justify-content-between">
                            <span>
                                <div className="text-center"><i className="fa fa-user" /></div>
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2">
                                            Visible
                                        </label>
                                    </div>
                                </div>
                            </span>
                            <span>
                                <div className="text-center"><i className="fa fa-user" /></div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label class="form-check-label" for="exampleRadios1">
                                        Hidden
                                    </label>
                                </div>
                            </span>
                        </div>
                    </div>

                </Card>


                <div className="mt-3">
                    <Card className=" mb-2 Card_shadow p-2">
                        <div className="text-center Style_heading">Bio</div>
                        <div className="text-center Style_para mt-2">Capture the attention of visitors by including emojies</div>
                        <RichTextEditor
                            className="Site_details_Editor mt-3"
                            value={rteValue}
                            onChange={HandleRichtext}
                        />

                        <div className="text-right mt-2 mb-2">
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
                                    Save
                                </Button>
                            </span>
                        </div>
                    </Card>
                </div>

                <div className="mt-3">
                    <Card className=" mb-2 Card_shadow p-2">
                        <div className="text-center Style_heading">Enable Share Button</div>
                        <div className="text-center Style_para mt-2">Enabling this will add ashare icon to the top right of your page <br />
                            which will allow users to easily copy the link to your page and <br />share it.
                        </div>
                        <div className="data_padding_from_both mt-4">
                            <div className="d-flex justify-content-between">
                                <span className="Style_heading">Enable Share Button</span>
                                <span className=""><Switch onChange={() => setischecked(!ischecked)} checked={ischecked} /></span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="pt-3 pb-3 Card_shadow mt-4">
                        <div className="text-center Heading_setting mt-1">Favicon</div>
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
                </div>

                <div className="mt-3">
                    <Card className=" mb-2 Card_shadow p-2">
                        <div className="text-center Style_heading">Featured Video</div>
                        <div className="text-center Style_para mt-2">By including an embe YouTube, Twitch, Vimeo video, visitors can <br /> play it directly in the page.</div>
                        <div className="data_padding_from_both mt-2">
                            <div className="d-flex justify-content-between">
                                <span>
                                    <div className="text-center"><i className="fa fa-arrow-up" /></div>
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Below Links
                                            </label>
                                        </div>
                                    </div>
                                </span>
                                <span>
                                    <div className="text-center"><i className="fa fa-arrow-down" /></div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                        <label class="form-check-label" for="exampleRadios1">
                                            Above Links
                                        </label>
                                    </div>
                                </span>
                            </div>

                            <div className="mt-2 mb-2">
                                <input className="form-control" placeholder="YouTtubie, Twitch, Vimeo" />
                            </div>
                        </div>

                        <div className="text-right mt-2 mb-2">
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
                                    Save
                                </Button>
                            </span>
                        </div>
                    </Card>
                </div>

                <div className="mt-3">
                    <Card className=" mb-2 Card_shadow p-2">
                        <div className="text-center Style_heading">Page Titles</div>
                        <div className="data_padding_from_both mt-2">
                            <div className="d-flex">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">Titles</label>
                                </div>
                                <div class="form-check form-check-inline ml-5">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">No Titles</label>
                                </div>
                            </div>

                            <div className="mt-1">Social Titles</div>
                            <div className="mt-1 mb-2">
                                <input className="form-control" placeholder="My Socials" />
                            </div>
                            <div className="mt-1">Music Titles</div>
                            <div className="mt-1 mb-2">
                                <input className="form-control" placeholder="My Music" />
                            </div>
                            <div className="mt-1">Link Titles</div>
                            <div className="mt-1 mb-2">
                                <input className="form-control" placeholder="My Links" />
                            </div>
                            <div className="mt-1">Contacts Titles</div>
                            <div className="mt-1 mb-2">
                                <input className="form-control" placeholder="My Contacts" />
                            </div>

                        </div>

                        <div className="text-right mt-2 mb-2">
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
                                    Save
                                </Button>
                            </span>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="pt-3 pb-3 Card_shadow mt-4">
                        <div className="text-center Heading_setting mt-1">Link Groups</div>
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
                </div>

            </div>

        </>
    )
}

export default SiteDetails
