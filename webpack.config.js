const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],

    output: {
        path: path.resolve(__dirname, 'main'),
        filename: 'main.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx|js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-react"]
                    },
                }
            },
            {
                test: /\.css$/,
                use:[ MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)/,
                use: ['file-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({template:  path.resolve(__dirname, "src","index.html")}),
        new CleanWebpackPlugin()
    ]
};