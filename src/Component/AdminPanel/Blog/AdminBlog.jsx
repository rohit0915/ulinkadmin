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
const AdminBlog = () => {
  const [blogDataArry, setblogDataArry] = useState([]);
  const [blogtitle, setblogtitle] = useState("");
  const [blogauthor, setblogauthor] = useState("");
  const [blogcontent, setblogcontent] = useState("");
  // const [category_id, setcategory_id] = useState("");
  const [blogimage, setblogimage] = useState(null);

  const [isloading, setisloading] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);

  ////edit

  const [Editblogtitle, setEditblogtitle] = useState("");
  const [Editblogauthor, setEditblogauthor] = useState("");
  const [Editblogcontent, setEditblogcontent] = useState("");
  // const [Editcategory_id, setEditcategory_id] = useState("");
  const [Editblogimage, setEditblogimage] = useState("");
  const [Editid, setEditid] = useState("");

  //error
  const [Errorblogtitle, setErrorblogtitle] = useState(false);
  const [Errorblogauthor, setErrorblogauthor] = useState(false);
  const [Errorblogcontent, setErrorblogcontent] = useState(false);
  const [Errorblogimage, setErrorblogimage] = useState(false);

  const [ErrorEditblogtitle, setErrorEditblogtitle] = useState(false);
  const [ErrorEditblogauthor, setErrorEditblogauthor] = useState(false);
  const [ErrorEditblogcontent, setErrorEditblogcontent] = useState(false);
  // const [Editcategory_id, setEditcategory_id] = useState("");
  const [EditErrorblogimage, setErrorEditblogimage] = useState(false);

  const Editblog = (item) => {
    setEditDailogOpen(!EditDailogOpen);
    setEditblogtitle(item.blogtitle);
    setEditblogauthor(item.blogauthor);
    setEditblogcontent(item.blogcontent);
    // setEditcategory_id(item.category_id);
    setEditblogimage(item.blogimage);
    setEditid(item._id);
  };

  const [EditDailogOpen, setEditDailogOpen] = useState("");
  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");

  const filterData = blogDataArry.filter((event) => {
    return (
      event.blogtitle.toLowerCase().indexOf(titlename.toLowerCase()) !== -1
    );
  });

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  //To Update the data of blog

  const updateBlogdata = (ID) => {
    let id = ID;
    //  console.log("updateblog", id);
    try {
      if (!blankValidator(Editblogtitle)) {
        setErrorEditblogtitle(true);
        return;
      }
      if (!blankValidator(Editblogauthor)) {
        setErrorEditblogauthor(true);
        return;
      }

      // if (!blankValidator(Editblogimage)) {
      //   setErrorEditblogimage(true);
      //   return;
      // }

      if (!blankValidator(Editblogcontent)) {
        setErrorEditblogcontent(true);
        return;
      }
      setisloading(true);
      let url = getBaseUrl() + `api/v1/blog/EditBlog/${id}`;
      const fd = new FormData();

      fd.append("blogtitle", Editblogtitle);
      fd.append("blogauthor", Editblogauthor);
      fd.append("blogcontent", Editblogcontent);

      //********* HERE IS THE CHANGE ***********

      fd.append("blogimage", Editblogimage);

      axios.put(url, fd).then(
        (res) => {
          //  showNotificationMsz(res.data.msg, "success");
          console.log("editsubcategoriesdata", res);
          setisloading(false);
          setisUpdated(!isUpdated);

          setEditDailogOpen(!EditDailogOpen);
        },
        (error) => {
          showNotificationMsz(error, "danger");
          setisloading(false);
        }
      );
    } catch (error) {
      setisloading(false);
      showNotificationMsz(error, "danger");
    }
  };

  //to add blog
  const addblogdata = () => {
    try {
      if (!blankValidator(blogtitle)) {
        setErrorblogtitle(true);
        return;
      }
      if (!blankValidator(blogauthor)) {
        setErrorblogauthor(true);
        return;
      }

      if (!blankValidator(blogimage)) {
        setErrorblogimage(true);
        return;
      }

      if (!blankValidator(blogcontent)) {
        setErrorblogcontent(true);
        return;
      }
      setisloading(true);
      let url = getBaseUrl() + "api/v1/blog/addblog";

      const fd = new FormData();
      fd.append("blogtitle", blogtitle);
      fd.append("blogauthor", blogauthor);
      fd.append("blogcontent", blogcontent);
      // fd.append("category_id", category_id);

      //********* HERE IS THE CHANGE ***********

      fd.append("blogimage", blogimage);

      axios.post(url, fd).then(
        (res) => {
          showNotificationMsz(res.data.message, "success");
          console.log("addblogdata", res);
          setisloading(false);
          setisUpdated(!isUpdated);

          // setisUpdated(!isUpdated);
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

  //get blog

  useEffect(() => {
    window.scrollTo(0, 0);

    const getAllblogdata = () => {
      try {
        //  setisloading(true);
        let url = getBaseUrl() + "api/v1/blog/GetallBlogs";
        axios.get(url).then(
          (res) => {
            console.log("get blog Data", res);
            setblogDataArry(res.data.data.data);
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
    getAllblogdata();
  }, [isUpdated]);

  //to delete the blog

  const Deleteblog = (data) => {
    //blog id
    let id = data._id;

    try {
      setisloading(true);
      let url = getBaseUrl() + `api/v1/blog/DeleteBlog/${id}`;
      axios.delete(url).then(
        (res) => {
          setisloading(false);
          setisUpdated(!isUpdated);
          showNotificationMsz(res.data.msg, "success");
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
                  {/* <span className="icon_color">
                    <i class="fa fa-times hover_cursor"></i>
                  </span> */}
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
                        value={blogtitle}
                        onChange={(e) => {
                          setErrorblogtitle(false);
                          setblogtitle(e.target.value);
                        }}
                      />
                      {Errorblogtitle && (
                        <span className="text-danger">Enter Title</span>
                      )}
                    </div>
                  </Grid>

                  <Grid item md={6}>
                    <div className="text_filed_heading">Author</div>
                    <div className="mr-2 mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Author"
                        autoComplete="off"
                        value={blogauthor}
                        onChange={(e) => {
                          setErrorblogauthor(false);
                          setblogauthor(e.target.value);
                        }}
                      />
                      {Errorblogauthor && (
                        <span className="text-danger">Enter Author Name</span>
                      )}
                    </div>
                  </Grid>
                </Grid>

                <Grid className="Component_main_grid">
                  <Grid item md={12}>
                    <div className="text_filed_heading">Image</div>
                    <div className=" mr-2  mt-1">
                      <input
                        type="file"
                        className="form-control "
                        autoComplete="off"
                        onChange={(e) => {
                          setErrorblogimage(false);
                          setblogimage(e.target.files[0]);
                        }}
                      />
                      {Errorblogimage && (
                        <span className="text-danger">Select Image</span>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <Grid className="Component_main_grid">
                  <Grid item md={12}>
                    <div className="text_filed_heading">Content</div>
                    <div className=" mr-2  mt-1">
                      <textarea
                        row="3"
                        type="text"
                        className="form-control "
                        autoComplete="off"
                        placeholder="Enter Content"
                        value={blogcontent}
                        onChange={(e) => {
                          setErrorblogcontent(false);
                          setblogcontent(e.target.value);
                        }}
                      />
                      {Errorblogcontent && (
                        <span className="text-danger">Enter Content</span>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="mt-2 pb-2 ">
                <Button
                  variant="contained"
                  className="button_formatting"
                  onClick={addblogdata}
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
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Content</TableCell>
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
                    <TableCell>
                      <img
                        style={{ width: "70px", height: "60px" }}
                        className=""
                        src={`https://ulnk.herokuapp.com/${row.blogimage}`}
                        //  src={`https://afternoon-bayou-76409.herokuapp.com/${row.iconImage}`}
                      />
                    </TableCell>
                    <TableCell>{row.blogtitle}</TableCell>
                    <TableCell>{row.blogauthor}</TableCell>

                    <TableCell>{row.blogcontent}</TableCell>

                    <TableCell className="text-center">
                      <span
                        className="mr-3 ml-3 background_icon_padding"
                        onClick={() => Editblog(row)}
                      >
                        <i class="fa fa-edit"></i>
                      </span>
                      <span
                        className="background_icon_delete"
                        onClick={() => Deleteblog(row)}
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
                        <div className="text_filed_heading">Title</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Title"
                            autoComplete="off"
                            value={Editblogtitle}
                            onChange={(e) => {
                              setErrorEditblogtitle(false);
                              setEditblogtitle(e.target.value);
                            }}
                          />
                          {ErrorEditblogtitle && (
                            <span className="text-danger">Enter Title</span>
                          )}
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Author</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Author"
                            autoComplete="off"
                            value={Editblogauthor}
                            onChange={(e) => {
                              setErrorEditblogauthor(false);
                              setEditblogauthor(e.target.value);
                            }}
                          />
                          {ErrorEditblogauthor && (
                            <span className="text-danger">Enter Author</span>
                          )}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid className="Component_main_grid">
                      {/* <Grid item md={6}>
                        <div className="text_filed_heading">category</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            autoComplete="off"
                            placeholder="Enter category"
                            value={Editcategory_id}
                            onChange={(e) => {
                              setEditcategory_id(e.target.value);
                            }}
                          />
                        </div>
                      </Grid> */}

                      <Grid item md={12}>
                        <div className="text_filed_heading">Image</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="file"
                            className="form-control "
                            autoComplete="off"
                            onChange={(e) => {
                              // setErrorEditblogimage(false);
                              setEditblogimage(e.target.files[0]);
                            }}
                          />
                          {/* {EditErrorblogimage && (
                            <span className="text-danger">Select Image</span>
                          )} */}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid className="Component_main_grid">
                      <Grid item md={12}>
                        <div className="text_filed_heading">Content</div>
                        <div className=" mr-2  mt-1">
                          <textarea
                            row="3"
                            type="text"
                            className="form-control "
                            autoComplete="off"
                            placeholder="Enter Content"
                            value={Editblogcontent}
                            onChange={(e) => {
                              setErrorEditblogcontent(false);
                              setEditblogcontent(e.target.value);
                            }}
                          />
                          {ErrorEditblogcontent && (
                            <span className="text-danger">Enter Content</span>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mt-2 pb-2 "></div>
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
              onClick={() => updateBlogdata(Editid)}
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

export default HOC(AdminBlog);
