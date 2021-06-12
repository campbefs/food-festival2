const webpack = require("webpack")
const path = require("path");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.join(__dirname + "/dist"), // needed forward slash
    filename: "app.bundle.js"
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  mode: "development"
};