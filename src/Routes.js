import PaymentForm from "./Components/PaymentsTab";
import Profile from "./Components/ProfileTab";
import ReceiptsTable from "./Components/ReceiptsTable.js";

export const RouteList = [
  {
    id: "payments",
    path: "/app/Payments",
    element: <PaymentForm/>,
  },
  {
    id: "profile",
    path: "/app/Profile",
    element: <Profile/>,
  },
  {
    id: "receipts",
    path: "/app/Receipts",
    element: <ReceiptsTable/>,
  },
];
