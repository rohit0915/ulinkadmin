import React, { useState } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import HOC from "../../../Common/HOC3";
import Expand from "react-expand-animated";
const NewPlan = () => {
  const [addMangeopen, setaddMangeopen] = useState(false);
  return (
    <div>
      <div className="content_padding">
        <div
          className="d-flex "
          style={{ cursor: "pointer" }}
          onClick={() => setaddMangeopen(!addMangeopen)}
        >
          <i className="fa fa-plus mr-1 pt-2" /> <h4>Add New Plan</h4>
        </div>

        <Expand open={addMangeopen}>
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
                      <div className="text_filed_heading">Add Price</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Price"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>

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
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Description</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          autoComplete="off"
                          placeholder="Description"
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className="text_filed_heading">Heading</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          autoComplete="off"
                          placeholder="Enter Heading"
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
        </Expand>

        <div className="card_admissiondetails_height mt-4">
          <div className="textfiled_margin cardheight_overflow">
            <hr />

            <Card className="Card_shadow mb-2 mt-2">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <Grid className="Component_main_grid mt-2">
                    <Grid item md={2}>
                      <div className=" p-2">Price </div>
                    </Grid>
                    <Grid item md={2}>
                      <div className=" p-2">Title</div>
                    </Grid>
                    <Grid item md={2}>
                      <div className=" p-2">Description</div>
                    </Grid>

                    <Grid item md={2}>
                      <div className=" p-2">Heading</div>
                    </Grid>
                    <Grid item md={2}>
                      <div className="d-flex p-2">
                        <span className="icon_color mr-2 ml-1">
                          <i className="fa fa-edit hover_cursor"></i>
                        </span>
                        <span className="icon_color ml-2">
                          <i className="fa fa-trash hover_cursor"></i>
                        </span>
                      </div>
                    </Grid>
                    <Grid item md={2}>
                      <div className="btn btn-primary p-2">Add More Points</div>
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

export default HOC(NewPlan);
