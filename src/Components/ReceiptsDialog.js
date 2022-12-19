import Dialog from "@mui/material/Dialog";
import "../ComponentStyles/receiptsDialog.css";
import Transfer from "../images/transfer.png";
import { VIEW } from "../Constants/ViewReceiptsForm";
import React from "react";

const ReceiptDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        classes={{ paper: "receipts_dialog" }}
        open={open}
        onClose={handleClose}
      >
        <div className="receipts_image_main">
          <img className="receipts_image" src={Transfer} alt="firespot" />
        </div>
        <div className="payment_successfull_main">
          <div className="payment_successfull_label">
            Payment Successfull !!!
          </div>
        </div>
        <div className="receipts_dialog_main">
          <div className="receipts_data_main">
            {VIEW.map((field) => {
              return (
                <div className="data_row_flex" key={field.left.id}>
                  <div>
                    <div className="form_label_left">{field.left.label}</div>
                  </div>
                  <div>
                    <div className="form_label_right">{field.right.label}</div>
                  </div>
                </div>
              );
            })}
            <div className="amount_paid_main">
              <div className="amount_paid">Amount Paid</div>
              <div className="how_much">LKR 450.00</div>
            </div>
          </div>
          <div className="print_close">
            <button className="print_button">Print</button>
            <button className="print_button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ReceiptDialog;
