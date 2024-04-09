const path = require("path");

module.exports = {
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

  // Tell Webpack to run Babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
