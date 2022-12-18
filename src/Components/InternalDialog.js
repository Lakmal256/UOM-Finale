import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../ComponentStyles/internalDialog.css";
import Student from "../images/Student.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Internal = ({ open, handleClose, openSignup }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useNavigate();

  const handleData = () => {
    setUser("");
    setPassword("");

    if (user === "" || password === "") {
      console.log("Please Enter User Name and Password");
    } else {
      history("/app");
    }
  };
  return (
    <div>
      <Dialog
        classes={{ paper: "internal_dialog" }}
        open={open}
        onClose={handleClose}
      >
        <img className="internal_image" src={Student} alt="firespot" />
        <div className="internal_heading">
          <div className="internal_signin">Sign In</div>
          <div className="internal_user">UOM User</div>
        </div>
        <div>
          <hr />
        </div>
        <div className="input_label">User Name</div>
        <input
          onChange={(e) => setUser(e.target.value)}
          className="internal_user_input"
          type="text"
          placeholder="User Name"
        />
        <div className="input_label">Password</div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="internal_password_input"
          type="password"
          placeholder="password"
        />
        <div className="remember_forgot_main">
          <span>
            <input type="checkbox" />
            Remember Me
          </span>
          <div>Forgot Password</div>
        </div>
        <div className="internal_signin_button_main">
          <Button
            className="internal_signin_button"
            onClick={() => handleData()}
          >
            Sign in
          </Button>
        </div>
        <div className="hr-main">
          <hr className="hr" />
          or
          <hr className="hr" />
        </div>
        <div className="create_new_main">
          <div>Don't have an Account ?</div>
          <button className="create_new_button" onClick={openSignup}>
            <u>Create New One</u>
          </button>
        </div>
      </Dialog>
    </div>
  );
};
export default Internal;
