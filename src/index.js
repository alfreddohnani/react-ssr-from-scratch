import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/home";

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />); // JSX is compiled with Babel through Webpack

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
