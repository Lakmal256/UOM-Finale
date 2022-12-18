import React, { Component } from "react";
import Internal from "./InternalDialog";
import Create from "./CreateUser.js";
import { ONLINE } from "../Constants/OnlineForm";
import "../ComponentStyles/homePayments.css";

class HomePayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignin: false,
      openSignup: false,
    };
  }

  closeSigninModel = () => {
    this.setState({ openSignin: false });
  };
  closeSignupModel = () => {
    this.setState({ openSignup: false });
  };
  openSigninModel = () => {
    this.setState({ openSignin: true });
  };
  openSignupModel = () => {
    this.setState({ openSignup: true, openSignin: false });
  };
  render() {
    const { openSignin, openSignup } = this.state;

    return (
      <div className="home_payments_form">
        <div className="online_payment_label">Online Payment</div>
        <div className="hp_form">
          {ONLINE.map((field) => {
            if (field.show) {
              if (field.type === "select") {
                return (
                  <div className="form_row" key={field.id}>
                    <div>{field.label}</div>
                    <select
                      className={field.className}
                      disabled={field.disabled}
                    >
                      {field.options.map((option) => {
                        return (
                          <option key={option.id} value={option.id}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                );
              } else {
                return (
                  <div className="form_row" key={field.id}>
                    <div>{field.label}</div>
                    <input
                      placeholder={field.label}
                      className={field.className}
                      type={field.type}
                      disabled={field.disabled}
                    />
                  </div>
                );
              }
            } else {
              return null;
            }
          })}
          <div className="select_category_label">
            Select your category to proceed*
          </div>
          <div className="internal_button_main">
            <button
              className="internal_button"
              onClick={() => this.setState({ openSignin: true })}
            >
              Internal
            </button>
            <button className="external_button">External</button>
          </div>
          <div className="next_button_main">
            <button className="next_button">Next</button>
          </div>
        </div>
        <Internal
          open={openSignin}
          handleClose={this.closeSigninModel}
          openSignup={this.openSignupModel}
        />
        <Create open={openSignup} handleClose={this.closeSignupModel} />
      </div>
    );
  }
}

export default HomePayments;
