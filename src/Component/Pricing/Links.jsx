import React from 'react'
import { Card } from '@material-ui/core';
function Links() {
    const linkArr = [
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
    ]
    return (
        <>
            <div className="d-flex">
                <div className="home_content" style={{ width: "60%" }}>LINKS</div>
                <div className="Links_content text-center" style={{ width: "20%" }}>Free <br />Sign Up for Free</div>
                <div className="Links_content text-center" style={{ width: "20%" }}>Pro <br /> Join the pro's</div>
            </div>


            <Card className="Card_shadow linksborder">
                <table className="table">
                    <tbody>
                        {linkArr.map((item, index) => (
                            <tr>
                                <td><strong>{item.data}</strong></td>
                                <td><div className="text-center"><i class="fa fa-check-circle"></i></div></td>
                                <td><div className="text-center"><i class="fa fa-check-circle"></i></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>


        </>
    )
}

export default Links
