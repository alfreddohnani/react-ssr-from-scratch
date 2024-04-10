import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/home";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Home />); // JSX is compiled with Babel through Webpack

  const html = `
  <html>
  <head>
  </head>
  <body>
     <div id="root">${content}</div>
     <script src="bundle.js"></script>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
