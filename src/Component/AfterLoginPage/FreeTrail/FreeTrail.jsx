import React, { useEffect } from 'react'

//common component
import HOC1 from "../../../Common/HOC1";


import Links from '../../Pricing/Links';
import Customization from '../../Pricing/Customization';
import Analytics from '../../Pricing/Analytics';
import OtherPricing from '../../Pricing/OtherPricing';
import Integration from '../../Pricing/Integration';
import Monthly from '../../Pricing/Monthly';

function FreeTrail() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="home_background_color">

                <div className="content_padding">
                    <div className="text-center home_content">One link with a whole lot of power</div>
                    <div className="home_para text-center mt-4">pick your plan, you can always change later</div>
                    {/* <div className="mt-3 text-center">
                        <button className="Home_page_button">Sign up free now !</button>
                    </div> */}

                    <div className="data_padding_from_both mt-5">
                        <div className="mt-2 pb-2">
                            <Monthly />
                        </div>

                        <div className="mt-2 pb-2">
                            <Links />
                        </div>

                        <div className="mt-2 pb-2">
                            <Customization />
                        </div>

                        <div className="mt-2 pb-2">
                            <Analytics />
                        </div>

                        <div className="mt-2 pb-2">
                            <Integration />
                        </div>

                        <div className="mt-2 pb-4">
                            <OtherPricing />
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default HOC1(FreeTrail)
