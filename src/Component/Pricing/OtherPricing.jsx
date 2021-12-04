import React from 'react'
import { Card } from '@material-ui/core';
function OtherPricing() {
    const linkArr = [
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
    ]
    return (
        <>

            <div className="home_content">Other Pricing</div>

            <Card className="Card_shadow linksborder5">
                <table className="table">
                    <tbody>
                        {linkArr.map((item, index) => (
                            <tr>
                                <td><strong>{item.data}</strong></td>
                                <td><div className="text-center"><i class="fa fa-check-circle"></i></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>


        </>
    )
}

export default OtherPricing
