import React from 'react'
import { Grid, Card, Button } from '@material-ui/core';
function Monthly() {
    const monthlydata = [
        { data: "1. All of the free features." },
        { data: "2. Ampliy your brand with advanced customications and premium themes" },
        { data: "3. Ampliy your brand with advanced customications and premium themes" },
        { data: "4. Ampliy your brand with advanced customications and premium themes" },
        { data: "5. Ampliy your brand with advanced customications and premium themes" },
    ]
    return (
        <>
            <div className="home_para text-center mt-2">Price shown in USD per Month</div>
            <Grid className="Component_main_grid p-3 ">
                <Grid item md={6} className="p-3">
                    <Card className="Card_background p-3">
                        <div className="Premium_data_formatting">Pro $4.99<br /> Per Month</div>
                        <div className="mt-3 Premium_data_content"> All the benefits of free PLUS enhanced features to help you connect your online identity</div>

                        {monthlydata.map((item, index) => (
                            <div className="mt-2 d-flex premium_points">
                                <span><i className="fa fa-check" /></span>
                                <span className="ml-3">{item.data}</span>
                            </div>
                        ))}

                        <div className="mt-2">
                            <Button className="Pricing_button">Try for 14 Days</Button>
                        </div>
                    </Card>
                </Grid>
                <Grid item md={6} className="p-3">
                    <Card className="p-3 card_background_free">
                        <div className="Premium_data_formatting2">Free $0<br /> Free</div>
                        <div className="mt-3 Premium_data_content2"> All the benefits of free PLUS enhanced features to help you connect your online identity</div>
                        {monthlydata.map((item, index) => (
                            <div className="mt-2 d-flex premium_points2">
                                <span><i className="fa fa-check" /></span>
                                <span className="ml-3">{item.data}</span>
                            </div>
                        ))}
                        <div className="mt-2">
                            <Button className="Pricing_button">Sign Up for free</Button>
                        </div>
                    </Card>
                </Grid>

            </Grid>

        </>
    )
}

export default Monthly
