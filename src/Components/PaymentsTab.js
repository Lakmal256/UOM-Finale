import "../ComponentStyles/paymentsTab.css";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import { PAYMENTS } from "../Constants/PaymentsForm";

const PaymentForm = () => {
  const [dataSet, setDataSet] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    courseOfStudy: "",
    academicYear: "",
    faculty: "",
    department: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var paymentDataSet = JSON.parse(JSON.stringify(dataSet));
    paymentDataSet[name] = value;
    setDataSet(paymentDataSet);
  };

  return (
    <div className="payments_tab_form">
      <div className="payment__tab_header">Payments</div>

      {PAYMENTS.map((field) => {
        if (field.show) {
          if (field.type === "select") {
            return (
              <div className="form_row" key={field.id}>
                <div>{field.label}</div>
              </div>
            );
          } else {
            return (
              <div className="form_row" key={field.id}>
                <div>{field.label}</div>
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
        <Button className="pt_next_button">Next</Button>
    </div>
  );
};

export default PaymentForm;
