export const ONLINE = [
  {
    id: "paymentCategory",
    name: "paymentCategory",
    label: "Payment Category",
    className: "select_menu",
    type: "select",
    options: [
      { id: "internal", label: "Internal" },
      { id: "external", label: "External" },
      { id: "repeat", label: "Repeat" },
    ],
    disabled: false,
    show:true
  },
  {
    id: "paymentAmount",
    name: "paymentAmount",
    label: "Payment Amount",
    className: "select_button",
    type: "number",
    disabled: false,
    show:true
  },
  {
    id: "paymentDescription",
    name: "paymentDescription",
    label: "Payment Description",
    className: "select_button",
    type: "text",
    disabled: false,
    show:true
  },
  {
    id: "paymentHistory",
    name: "paymentHistory",
    label: "Payment History",
    className: "select_button",
    type: "text",
    disabled: false,
    show:false
  },
];
