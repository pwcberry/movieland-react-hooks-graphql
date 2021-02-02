require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const APP_PORT = process.env.PORT ?? 3000;

module.exports = {
    mode: "development",
    entry: {
        app: [require.resolve("webpack-dev-server/client") + "?/", require.resolve("webpack/hot/dev-server"), path.resolve(__dirname, "./app/index.jsx")],
    },
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "web"),
        publicPath: "/",
        pathinfo: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            name: "index.html",
            template: path.resolve("./app/index.html"),
        }),
        new webpack.DefinePlugin({
            "window.PORT": JSON.stringify(APP_PORT),
            "window.API_URL": JSON.stringify(process.env.API_URL),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.gql$/,
                loader: "graphql-tag/loader",
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
    },
    stats: {
        all: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        timings: true,
        colors: true,
        builtAt: true,
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, "build"),
        publicPath: "/",
        host: "0.0.0.0",
        port: APP_PORT,
        open: true,
        clientLogLevel: "none",
        watchContentBase: true,
    },
};
