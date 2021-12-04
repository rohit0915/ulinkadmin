import React, { useState, useEffect } from "react";
import HOC from "../../../Common/HOC3";

//css file
// import "./UserFinancial.css";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Button, Grid, Card } from "@material-ui/core";
import Expand from "react-expand-animated";

//react csv downloader
// import { CSVLink } from "react-csv";

function UserDetail() {
  const Financialdata = [
    {
      image: "...image",
      name: "David H. Click",
      email: "DavidHClick@armyspy.com",
      phone_no: "XYZ*****",
    },
    {
      image: "...image",
      name: "David H. Click",
      email: "DavidHClick@armyspy.com",
      phone_no: "XYZ*****",
    },
    {
      image: "...image",
      name: "David H. Click",
      email: "DavidHClick@armyspy.com",
      phone_no: "XYZ*****",
    },
    {
      image: "...image",
      name: "David H. Click",
      email: "DavidHClick@armyspy.com",
      phone_no: "XYZ*****",
    },
  ];

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [addMangeopen, setaddMangeopen] = useState(false);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [propertyname, setpropertyname] = useState("");
  const filterData = Financialdata.filter((event) => {
    return event.name.toLowerCase().indexOf(propertyname.toLowerCase()) !== -1;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content_padding">
        <div>
          <div className="mt-2 mb-2 ml-3">
            <span
              className="hover_cursor"
              onClick={() => setaddMangeopen(!addMangeopen)}
            >
              <i className="fa fa-plus mr-1" />
              Add User
            </span>
          </div>

          <Expand open={addMangeopen}>
            <Card className=" mb-2 Card_shadow p-3  ">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="text-right">
                    <span className="icon_color hover_cursor">
                      <i
                        className="fa fa-times cursor"
                        onClick={() => setaddMangeopen(!addMangeopen)}
                      ></i>
                    </span>
                  </div>

                  <div className="text_filed_heading">Name</div>
                  <div className=" mt-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Enter Name"
                      autoComplete="off"
                    />
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Email</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Email"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="">
                        <div className="text_filed_heading ">
                          Contact Number
                        </div>
                        <div className=" mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Mobile No."
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading mt-3 mb-2">
                        Add Image
                      </div>
                      <div className="mr-2 mt-1">
                        <input
                          type="file"
                          class="form-control-file"
                          id="exampleFormControlFile1"
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-3 ">
                  <Button variant="contained" className="button_formatting">
                    Create
                  </Button>
                </div>
              </div>
            </Card>
          </Expand>
        </div>
        <div className="table_foramtitng mt-1 mb-2 col-md-12 ">
          <TableContainer component={Paper}>
            <Table
              className=""
              aria-label="customized table"
              id="table_outside_border"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" className="table_header">
                    Image
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="table_header">
                    Email
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Contact
                  </StyledTableCell>

                  <StyledTableCell align="left" className="table_header">
                    Active
                  </StyledTableCell>
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
                  <StyledTableRow>
                    <StyledTableCell align="left">{row.image}</StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                      <div className="text-center"></div>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.phone_no}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      <button type="button" class="btn btn-success">
                        Active
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
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
        </div>
      </div>
    </>
  );
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default HOC(UserDetail);
