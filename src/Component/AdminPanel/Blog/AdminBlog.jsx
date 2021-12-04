import React from "react";
import HOC from "../../../Common/HOC3";
import { Card, Grid, Button } from "@material-ui/core";

const AdminBlog = () => {
  return (
    <div>
      <div className="content_padding">
        <div>
          <h4 style={{ cursor: "pointer" }}>Add Blog</h4>
        </div>
        <Card className=" mb-2 Card_shadow p-3">
          <div className="card_admissiondetails_height">
            <div className="textfiled_margin">
              <div className="card_content_instition">
                <div className="text-right">
                  <span className="icon_color">
                    <i class="fa fa-times hover_cursor"></i>
                  </span>
                </div>

                <Grid className="Component_main_grid">
                  <Grid item md={6}>
                    <div className="text_filed_heading">Title</div>
                    <div className="mr-2 mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Title"
                        autoComplete="off"
                      />
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className="text_filed_heading">Description</div>
                    <div className="mr-2 mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Description"
                        autoComplete="off"
                      />
                    </div>
                  </Grid>
                </Grid>

                <Grid className="Component_main_grid">
                  <Grid item md={6}>
                    <div className="text_filed_heading">Date</div>
                    <div className=" mr-2  mt-1">
                      <input
                        type="date"
                        className="form-control "
                        autoComplete="off"
                      />
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className="text_filed_heading">Image</div>
                    <div className=" mr-2  mt-1">
                      <input
                        type="file"
                        className="form-control "
                        autoComplete="off"
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="mt-2 pb-2 ">
                <Button variant="contained" className="button_formatting">
                  Create
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="card_admissiondetails_height mt-4">
          <div className="textfiled_margin cardheight_overflow">
            <hr />

            <Card className="Card_shadow mb-2 mt-2">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <Grid className="Component_main_grid mt-2">
                    <Grid item md={2}>
                      <div className=" p-2">
                        <img style={{ height: "40px", width: "50px" }} src="" />
                      </div>
                    </Grid>
                    <Grid item md={2}>
                      <div className=" p-2">Title</div>
                    </Grid>
                    <Grid item md={2}>
                      <div className=" p-2">Description</div>
                    </Grid>

                    <Grid item md={2}>
                      <div className=" p-2">Date</div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="d-flex p-2">
                        <span className="icon_color mr-2 ml-1">
                          <i className="fa fa-edit hover_cursor"></i>
                        </span>
                        <span className="icon_color ml-2">
                          <i className="fa fa-trash hover_cursor"></i>
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOC(AdminBlog);
