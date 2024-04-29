const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
    entry: {
        main: "./src/js/main.js",
        index: "./src/js/index.js"
    },
    mode: 'development',
    output: {
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             },
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/].*\.js$/,
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            // {
            // test: /\.m?js$/,
            // exclude: /(node_modules|bower_components)/,
            // // use: {
            // //     loader: 'babel-loader',
            // //     options: {
            // //     // presets: [['@babel/preset-env', {
            // //     //     corejs: 6,
            // //     //     useBuiltIns: "usage"
            // //     // }]]
            // //     }
            // // }
            // }
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ]
};

module.exports = config;