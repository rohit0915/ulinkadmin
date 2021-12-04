import React from 'react'
import statics from "../../images/statics.png"
import { Card, Button } from '@material-ui/core';

function DeviceAnalytics() {
    return (
        <>
            <Card className="Tabs_data Card_shadow card_back_color  mt-2">
                <div className="text-center">
                    <img src={statics} alt="" />
                </div>
                <div className="text-center home_para">You're getting noticed</div>
                <div className="text-center home_para">Get insights on what your audiences like by thier demographiocs and taste.</div>
                <div className="text-center mt-5 ">
                    <Button
                        variant="contained"
                        className="starttrailbtn"
                    >
                        Start Free Trail <i className="fa fa-send ml-2" />
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default DeviceAnalytics
