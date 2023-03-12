import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./app/pages/home.page";
import NavigationController from "./app/widgets/controller.widget";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import "typeface-poppins";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationController />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
