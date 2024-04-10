// Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";

// this used to be ReactDOM.render()
// we are not replacing the existing HTML
// we simply attach all event listeners to the HTML string from the server?
ReactDOM.hydrate(<Home />, document.querySelector("#root"));
