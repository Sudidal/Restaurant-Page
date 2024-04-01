const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
HtmlWebpackPlugin

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}