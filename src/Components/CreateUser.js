import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../ComponentStyles/createUser.css";
import Student from "../images/Student.png";
import { useState } from "react";
import { CREATE } from "../Constants/CreateForm";

const CreateUser = ({ open, handleClose, onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [dataSet, setDataSet] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var createDataSet = JSON.parse(JSON.stringify(dataSet));
    createDataSet[name] = value;
    setDataSet(createDataSet);
  };
  const controlData = (isSubmit) => {
    setUserName("");
    setPassword("");

    if (isSubmit) {
      if (userName === "" || password === "") {
        console.log("Please Fill the Form");
      } else {
        onSubmit(userName, password);
      }
    } else {
      handleClose();
    }
  };
  return (
    <div>
      <Dialog classes={{ paper: "cu_form" }} open={open} onClose={handleClose}>
        {/* cu = create user */}
        <img className="cu_image" src={Student} alt="firespot" />
        <div className="cu_title">
          <div className="cu_signup">Sign Up</div>
          <div className="cu_user">UOM User</div>
        </div>
        <div>
          <hr />
        </div>

        {CREATE.map((field) => {
          if (field.show) {
            if (field.type === "select") {
              return (
                <div className="cu_form_row" key={field.id}>
                  <div className="cu_form_label">{field.label}</div>
                </div>
              );
            } else {
              return (
                <div className="cu_form_row" key={field.id}>
                  <div className="cu_form_label">{field.label}</div>
                  <input
                    placeholder={field.label}
                    name={field.name}
                    className={field.className}
                    type={field.type}
                    disabled={field.disabled}
                    onChange={(e) => handleData(e)}
                    value={dataSet[field.name]}
                  />
                </div>
              );
            }
          } else {
            return null;
          }
        })}
        <div className="cu_button_head">
          <Button className="cu_button" onClick={() => controlData(true)}>
            Sign Up
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
export default CreateUser;
