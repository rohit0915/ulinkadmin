import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Expand from "react-expand-animated";
import HOC from "../../../Common/HOC3";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

//DIALOG BOX
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

//css

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function AddPackages(props) {
  const [EditDailogOpen, setEditDailogOpen] = useState("");

  const [isUpdated, setisUpdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [addMangeopen, setaddMangeopen] = useState(false);

  const eventDataArry = [
    {
      name: "Lorem",
      address: "kilcoole",
      email: "user@gmail.com",
      phone: 93027,
      category: "Job",
    },
  ];

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");

  const filterData = eventDataArry.filter((event) => {
    return event.name.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Add Packages</h3>
              <button
                class="btn btn-secondary MTB-2"
                type="button"
                // onClick={() => props.history.push("/addEvent")}
                onClick={() => setaddMangeopen(!addMangeopen)}
              >
                <span>
                  <span data-action="create">
                    <i class="fa fa-plus"></i> Create
                  </span>
                </span>
              </button>
            </Grid>
            <Grid item md={3}>
              <div className="d-flex">
                <span className="p-2">
                  <i class="fa fa-search"></i>
                </span>
                <span>
                  <input
                    value={titlename}
                    onChange={(e) => {
                      settitlename(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search by Name"
                  />
                </span>
              </div>
            </Grid>
          </Grid>

          <Expand open={addMangeopen}>
            <Card className=" mb-2 Card_shadow p-3">
              <span className="pr-3">
                <h4>Add Group</h4>
              </span>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={6} className="title_form">
                  <div class="form-group col-md-12">
                    <label for="inputState">Select Packages</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>Month</option>
                      <option>Annually</option>
                    </select>
                  </div>
                </Grid>
                <Grid item md={6} className="title_form">
                  <label for="inputState">Select Price</label>
                  <div className="d-flex">
                    <div class="form-check mr-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Price
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Free
                      </label>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={12} className="title_form">
                  <div className="mr-1">
                    <label>Price</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Price"
                    />
                  </div>
                </Grid>
              </Grid>

              <Button variant="contained" className="button_formatting">
                Create
              </Button>
            </Card>
          </Expand>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>ADDRESS</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell>PHONE</TableCell>
                    <TableCell>BUSINESS</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filterData.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filterData
                  ).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.address}</TableCell>

                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.category}</TableCell>

                      <TableCell>
                        <span
                          className="mr-3 ml-3 background_icon_padding"
                          // onClick={() => props.history.push("/edit1")}
                        >
                          <i
                            class="fa fa-edit"
                            onClick={() => setEditDailogOpen(!EditDailogOpen)}
                          ></i>
                        </span>
                        <span className="background_icon_delete">
                          <i class="fa fa-trash"></i>
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                count={filterData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>

          <Dialog
            open={EditDailogOpen}
            onClose={() => setEditDailogOpen(!EditDailogOpen)}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <span className="pr-3">
                <h4>Add Group</h4>
              </span>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={6} className="title_form">
                  <div className="mr-1">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control "
                      placeholder="Enter Name"
                    />
                  </div>
                </Grid>
                <Grid item md={6} className="title_form">
                  <div className="mr-1">
                    <label>Boundary</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Boundary"
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid className="Component_main_grid mb-3">
                <Grid item md={12} className="title_form">
                  <div className="mr-1">
                    <label>Privacy</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Privacy"
                    />
                  </div>
                </Grid>
              </Grid>

              <Button variant="contained" className="button_formatting">
                Create
              </Button>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setEditDailogOpen(!EditDailogOpen)}
              >
                Cancel
              </Button>
              <Button className="button_formatting">Create</Button>
            </DialogActions>
          </Dialog>

          <br />
        </div>
      </div>
    </>
  );
}
export default HOC(AddPackages);
