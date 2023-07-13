import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n/index";
import Loader from "./components/Loader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center xs:pt-[60%] lg:pt-[20%] w-[100%] h-[100%] "><Loader/></div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
