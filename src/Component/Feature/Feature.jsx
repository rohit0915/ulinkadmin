import React,{ useEffect } from 'react'

//common component
import HOC from "../../Common/HOC";

//used components
import MultilpleLinks from '../UsedCompnents/MultilpleLinks';
import MultipleLayout from '../UsedCompnents/MultipleLayout';
import InDepth from '../UsedCompnents/InDepth';
import GetYourLink from '../UsedCompnents/GetYourLink';
import Monitize from "../UsedCompnents/Monitize"
import Embed from '../UsedCompnents/Embed';

//css file
import "./Feature.css";

function Feature() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="home_background_color">

                <div className="cards_data_padding">
                    <div className="mt-5 p-2">
                        <Monitize />
                    </div>

                    <div className="mt-3 p-2">
                        <Embed />
                    </div>

                    <div className="mt-3 p-2">
                        <MultilpleLinks />
                    </div>

                    <div className="mt-3 p-2">
                        <MultipleLayout />
                    </div>

                    <div className="mt-3 p-2">
                        <InDepth />
                    </div>
                </div>

                <div className="mt-3">
                    <GetYourLink />
                </div>

            </div>
        </>
    )
}

export default HOC(Feature)
