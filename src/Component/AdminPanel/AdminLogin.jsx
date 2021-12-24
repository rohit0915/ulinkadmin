import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import axios from "axios";
import "./AdminLogin.css";
// import { getBaseUrl } from "../../utils";
// import { blankValidator, showNotificationMsz } from "../utils";
// import Loder from "../Loder";

const AdminLogin = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [isloading, setisloading] = useState(false);

  const LoginUser = () => {
    setisloading(true);
    let url = "https://ulnk.herokuapp.com/api/v1/admin/adminlogin";
    setisloading(true);

    let temp = {
      email,
      password,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          setisloading(false);

          setisloading(false);
          //  localStorage.setItem("isAuth", true);
          // console.log("setlocalsri=orag", localStorage);
          props.history.push("/adminHome");
        },

        (error) => {
          setisloading(false);
          console.log("data response error:::", error);
          setisloading(false);
        }
      )
      .catch((e) => {
        setisloading(false);
        console.log("data response error:::", e);
        setisloading(false);
      });
  };

  return (
    <>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your login details.
        </h5>
        <Card className="card_shadow">
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="User Id"
            type="text"
            autoComplete="on"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Password"
            type="password"
            autoComplete="on"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <span
            className="forgot_pass ml-3"
            onClick={() => props.history.push("/verify")}
          >
            Forgotten Password
          </span>
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              onClick={LoginUser}
            >
              <i class="fa fa-key pr-1"></i>Login
            </Button>
          </span>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
