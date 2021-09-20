require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";

const root = document.getElementById("root");

ReactDom.render(<App />, root);
