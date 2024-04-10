const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Inform Webpack that we're building a bundle for
  // Node.js, rather than for the browser
  target: "node",

  // Tell Webpack the root file of our
  //server application
  entry: "./src/index.js",

  // Tell Webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //This ensures all node_modules packages are not included in the server bundle output
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
