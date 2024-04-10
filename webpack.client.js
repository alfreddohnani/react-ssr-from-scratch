const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  // Tell Webpack the root file of our
  //server application
  entry: "./src/client/client.js",

  // Tell Webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
