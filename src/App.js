import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Feature from "./Component/Feature/Feature";
import Gallery from "./Component/Gallery/Gallery";
import Blog from "./Component/Blog/Blog";
import Pricing from "./Component/Pricing/Pricing";
import Login from "./Component/Login/Login";
import AddLinks from "./Component/AfterLoginPage/AddLinks/AddLinks";
import MyAccount from "./Component/AfterLoginPage/MyAccount/MyAccount";
import EmailVerify from "./Component/AfterLoginPage/MyAccount/EmailVerify";
import ResetPassword from "./Component/AfterLoginPage/MyAccount/ResetPassword";
import FreeTrail from "./Component/AfterLoginPage/FreeTrail/FreeTrail";
import Setting from "./Component/AfterLoginPage/Setting/Setting";
import EditProfile from "./Component/EditProfile/EditProfile";
import Statistics from "./Component/AfterLoginPage/Statistics/Statistics";
import AddIcons from "./Component/EditProfile/AddIcons";
import LinkStyles from "./Component/AfterLoginPage/LinkStyles/LinkStyles";
import Register from "./Component/Login/Register";

/////adminlogin
import AdminLogin from "./Component/AdminPanel/AdminLogin";
import AdminEmailVerify from "./Component/AdminPanel/AdminEmailVerify";
import Resetpassword from "./Component/AdminPanel/Resetpassword";
import AdminHome from "./Component/AdminPanel/AdminHome/AdminHome";
import UesrDetail from "./Component/AdminPanel/UserDetail/UesrDetail";
import AdminBlog from "./Component/AdminPanel/Blog/AdminBlog";
import NewPlan from "./Component/AdminPanel/NewPlan/NewPlan";
import AddPackages from "./Component/AdminPanel/Packages/AddPackages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/add-icons" component={AddIcons} />

        {/*After login Page*/}
        <Route exact path="/add-links" component={AddLinks} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/email-verify" component={EmailVerify} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/free-trail" component={FreeTrail} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/styles" component={LinkStyles} />

        {/*adminPannel */}
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/verify" component={AdminEmailVerify} />
        <Route exact path="/Resetpassword" component={Resetpassword} />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/UesrDetail" component={UesrDetail} />
        <Route exact path="/adminblog" component={AdminBlog} />
        <Route exact path="/NewPlan" component={NewPlan} />
        <Route exact path="/addPackages" component={AddPackages} />
      </Switch>
    </>
  );
}

export default App;
