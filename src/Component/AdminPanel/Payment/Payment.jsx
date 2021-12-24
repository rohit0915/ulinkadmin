import React, { useState, useEffect } from "react";
import HOC from "../../../Common/HOC3";
import { Card, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Expand from "react-expand-animated";
//pagination
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../../Loder/Loder";
//DIALOG BOX
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const Payment = () => {
  const paymentadd = [
    {
      key: 546,
      name: "name",
      key: 546,
    },
  ];
  const [isloading, setisloading] = useState(false);
  const [EditDailogOpen, setEditDailogOpen] = useState("");
  const [isUpdated, setisUpdated] = useState(false);
  const [keydataArry, setkeydataArry] = useState([]);
  const [key, setkey] = useState("");
  const [value, setvalue] = useState("");
  const [Editkey, setEditkey] = useState("");
  const [Editvalue, setEditvalue] = useState("");
  const [Editid, setEditid] = useState("");

  //error
  const [Errorkey, setErrorkey] = useState("");
  const [Errorvalue, setErrorvalue] = useState("");
  const [ErrorEditkey, setErrorEditkey] = useState("");
  const [ErrorEditvalue, setErrorEditvalue] = useState("");

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");

  const filterData = keydataArry.filter((event) => {
    return event.key.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const EditkeyData = (item) => {
    setEditDailogOpen(!EditDailogOpen);
    setEditkey(item.key);
    setEditvalue(item.value);
    setEditid(item._id);
  };

  //to update the key

  const updatekey = (Id) => {
    let id = Id;
    try {
      if (!blankValidator(Editkey)) {
        setErrorEditkey(true);
        return;
      }
      if (!blankValidator(Editvalue)) {
        setErrorEditvalue(true);
        return;
      }

      setisloading(true);
      let url = getBaseUrl() + `api/v1/payment/Editpayment/${id}`;

      let temp = {
        key: Editkey,
        value: Editvalue,
      };

      axios.put(url, temp).then(
        (res) => {
          setisloading(false);
          setisUpdated(!isUpdated);
          showNotificationMsz(res.data.message, "success");
          console.log("resdelete", res);
          setEditDailogOpen(!EditDailogOpen);
        },
        (error) => {
          showNotificationMsz(error, "danger");
          setisloading(false);
        }
      );
    } catch (error) {
      showNotificationMsz(error, "danger");
      setisloading(false);
    }
  };

  const addkeyValue = () => {
    try {
      if (!blankValidator(key)) {
        setErrorkey(true);
        return;
      }
      if (!blankValidator(value)) {
        setErrorvalue(true);
        return;
      }
      let url = getBaseUrl() + "api/v1/payment/addpayment";

      let temp = {
        key: key,
        value: value,
      };
      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("addkey", res);
            setisUpdated(!isUpdated);
            setEditDailogOpen(false);
            setkey("");
            setvalue("");
          },

          (error) => {
            console.log("data response error:::", error);
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {
      console.log("data response error:::", error);
    }
  };

  //to delete the key

  const Deletekey = (data) => {
    let id = data._id;
    //  console.log("deleteid", id);
    try {
      setisloading(true);
      let url = getBaseUrl() + `api/v1/payment/deletepayment/${id}`;
      axios.delete(url).then(
        (res) => {
          setisloading(false);
          setisUpdated(!isUpdated);
          showNotificationMsz(res.data.message, "success");
          console.log("resdelete", res);
        },
        (error) => {
          showNotificationMsz(error, "danger");
          setisloading(false);
        }
      );
    } catch (error) {
      showNotificationMsz(error, "danger");
      setisloading(false);
    }
  };

  //get key

  useEffect(() => {
    window.scrollTo(0, 0);

    const getkeyvaluedata = () => {
      try {
        setisloading(true);
        let url = getBaseUrl() + "api/v1/payment/getallpayments";
        axios.get(url).then(
          (res) => {
            console.log("get keyvalue", res);
            setkeydataArry(res.data.data);
            setisloading(false);
          },
          (error) => {
            setisloading(false);
            showNotificationMsz(error, "danger");
          }
        );
      } catch (error) {
        setisloading(false);
        showNotificationMsz(error, "danger");
      }
    };
    getkeyvaluedata();
  }, [isUpdated]);

  return (
    <div>
      <div className="content_padding">
        <div>
          <h4 style={{ cursor: "pointer" }}>Add Payment</h4>
        </div>
        <Card className=" mb-2 Card_shadow p-3">
          <div className="card_admissiondetails_height">
            <div className="textfiled_margin">
              <div className="card_content_instition">
                <div className="text-right">
                  {/* <span className="icon_color">
                    <i class="fa fa-times hover_cursor"></i>
                  </span> */}
                </div>

                <Grid className="Component_main_grid">
                  <Grid item md={6}>
                    <div className="text_filed_heading">Key</div>
                    <div className="mr-2 mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Key"
                        autoComplete="off"
                        value={key}
                        onChange={(e) => {
                          setErrorkey(false);
                          setkey(e.target.value);
                        }}
                      />
                      {Errorkey && (
                        <span className="text-danger">Enter Key</span>
                      )}
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className="text_filed_heading">Value</div>
                    <div className="mr-2 mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Value"
                        autoComplete="off"
                        value={value}
                        onChange={(e) => {
                          setErrorvalue(false);
                          setvalue(e.target.value);
                        }}
                      />
                      {Errorvalue && (
                        <span className="text-danger">Enter Value</span>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="mt-2 pb-2 ">
                <Button
                  variant="contained"
                  className="button_formatting"
                  onClick={addkeyValue}
                >
                  Create
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card classname="main_card p-3">
          <TableContainer>
            <Table className="" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>

                  <TableCell>Value</TableCell>
                  <TableCell className="text-center">Action</TableCell>
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
                    <TableCell>{row.key}</TableCell>

                    <TableCell>{row.value}</TableCell>

                    <TableCell className="text-center">
                      <span className="mr-3 ml-3 background_icon_padding">
                        <i
                          class="fa fa-edit"
                          onClick={() => EditkeyData(row)}
                        ></i>
                      </span>
                      <span
                        className="background_icon_delete"
                        onClick={() => Deletekey(row)}
                      >
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
            Edit Blog
            <span className="float-right icon_color"></span>
          </DialogTitle>
          <DialogContent>
            <Card className=" mb-2 Card_shadow p-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text-right">
                      {/* <span className="icon_color">
                    <i class="fa fa-times hover_cursor"></i>
                  </span> */}
                    </div>

                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Key</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Key"
                            autoComplete="off"
                            value={Editkey}
                            onChange={(e) => {
                              setErrorEditkey(false);
                              setEditkey(e.target.value);
                            }}
                          />
                          {ErrorEditkey && (
                            <span className="text-danger">Enter Key</span>
                          )}
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Value</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Value"
                            autoComplete="off"
                            value={Editvalue}
                            onChange={(e) => {
                              setErrorEditvalue(false);
                              setEditvalue(e.target.value);
                            }}
                          />
                          {ErrorEditvalue && (
                            <span className="text-danger">Enter Value</span>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button
              className="button_formatting"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              Cancel
            </Button>
            <Button
              className="button_formatting"
              onClick={() => updatekey(Editid)}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Loder loading={isloading} />
    </div>
  );
};

export default HOC(Payment);
