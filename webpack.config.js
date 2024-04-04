const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
HtmlWebpackPlugin

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        watchFiles: ["./src/index.html"],
        static: "./dist"
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "/src/index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}