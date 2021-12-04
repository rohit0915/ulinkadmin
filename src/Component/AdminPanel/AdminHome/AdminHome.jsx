import React from "react";
import HOC3 from "../../../Common/HOC3";
import { withRouter } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";

const AdminHome = (props) => {
  //local array
  const home = [
    { show: "User Detail", link: "UesrDetail" },
    { show: "Add New Plan", link: "NewPlan" },
    { show: "Blog", link: "adminblog" },
    { show: "Add packages", link: "addPackages" },
  ];
  return (
    <div>
      <div className="content_padding_homeAdmin">
        <div className="main_div ">
          <div className="container">
            <div className="row">
              {home.map((item, index) => (
                <div className="col-md-4  col-lg-4">
                  <Card
                    className="main_card Card_shadow "
                    onClick={() => props.history.push(`${item.link}`)}
                  >
                    <div className="main_content ">
                      <p>
                        <span className="">
                          <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                        </span>
                        {item.show}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOC3(AdminHome);
