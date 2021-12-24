import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";

/////adminlogin
import AdminLogin from "./Component/AdminPanel/AdminLogin";
import AdminEmailVerify from "./Component/AdminPanel/AdminEmailVerify";
import Resetpassword from "./Component/AdminPanel/Resetpassword";
import AdminHome from "./Component/AdminPanel/AdminHome/AdminHome";
import UesrDetail from "./Component/AdminPanel/UserDetail/UesrDetail";
import AdminBlog from "./Component/AdminPanel/Blog/AdminBlog";
import NewPlan from "./Component/AdminPanel/NewPlan/NewPlan";
import AddPackages from "./Component/AdminPanel/Packages/AddPackages";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Payment from "./Component/AdminPanel/Payment/Payment";

function App() {
  return (
    <>
      <ReactNotification />
      <Switch>
        {/*adminPannel */}
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/verify" component={AdminEmailVerify} />
        <Route exact path="/Resetpassword" component={Resetpassword} />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/UesrDetail" component={UesrDetail} />
        <Route exact path="/adminblog" component={AdminBlog} />
        <Route exact path="/NewPlan" component={NewPlan} />
        <Route exact path="/addPackages" component={AddPackages} />
        <Route exact path="/addPackages" component={AddPackages} />
        <Route exact path="/payment" component={Payment} />
      </Switch>
    </>
  );
}

export default App;
