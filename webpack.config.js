// Loaders in Webpack are transformation functions that preprocess non-JavaScript files so Webpack can bundle them
// into your application, loaders are loaded before compilation
// On the other hand plugins do things after the compilation

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                // style-loader injects CSS into the DOM via a <style> tag,
                // css-loader lets webpack understand @import/url() inside CSS files.
                // Order matters: loaders run right-to-left, so css-loader runs first.
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/, // don't transpile dependencies, they're already built
                use: {
                    loader: "babel-loader", // babel is used to convert modern js to old js for older browsers
                    options: {
                        presets: ["@babel/preset-env"], // this is what actually teaches babel to understand import/export, arrow functions, etc.
                    },
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            // generates dist/index.html from your template and auto-injects
            // a <script> tag pointing to bundle.js
        }),
    ],
    mode: "development",
    // "development" = faster builds, readable output, no minification
    // switch to "production" for a real deployment build

    devtool: "source-map",
    // lets browser devtools map errors back to your original source files
    // instead of the bundled/minified output

    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8080,
        open: true,
        hot: true,
        // requires webpack-dev-server (npm install webpack-dev-server --save-dev)
        // creates a live-reloading dev server so you don't have to refresh manually
        // run it with: npx webpack serve
    },
};