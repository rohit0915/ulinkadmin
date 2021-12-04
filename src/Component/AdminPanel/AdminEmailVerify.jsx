import React, { useState } from "react";

import { Button, Card, TextField } from "@material-ui/core";

//import css
import "./AdminLogin.css";
const AdminEmailVerify = (props) => {
  return (
    <div>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your E-mail.
        </h5>
        <Card className="card_shadow">
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Email Id"
            type="text"
            autoComplete="Enter Email"
          />
          <br />

          {/* <span className="forgot_pass ml-3">Forgotten Password</span> */}
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              onClick={() => props.history.push("/Resetpassword")}
            >
              Verify
            </Button>
          </span>
        </Card>
      </div>
      {/* <Loder loading={isloading} /> */}
    </div>
  );
};

export default AdminEmailVerify;
