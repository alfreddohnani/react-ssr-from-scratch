const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/home").default;
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />); // JSX is compiled with Babel through Webpack

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
