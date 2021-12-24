"use strict";

const Path                 = require("path");
const Webpack              = require("webpack");
const Package              = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin    = require('html-webpack-plugin');

const ENV  = process.env.NODE_ENV || "production";
const SRC  = Path.join(__dirname, "src");
const DST  = Path.join(__dirname, "build");
const PORT = process.env.PORT || 9001;
const HOST = process.env.HOST || "0.0.0.0";

let config = {

    context: SRC,

    entry: {
        index : [
            Path.join(SRC, "index.js")
        ],
        "vendor": [
            "react",
            "react-dom",
            "jquery",
            "redux",
            "redux-actions",
            "react-redux",
            "redux-thunk",
            "react-router",
            "react-router-dom",
            "history",
            "moment"
        ]
    },

    output: {
        filename  : "[name].js",
        path      : `${DST}/js/`,
        publicPath: "/js/",
        sourceMapFilename: "[file].[hash].map"
    },

    module: {
        rules: [
            {
                test   : /\.less$/,
                include: [ SRC ],
                use: [
                    "style-loader?singleton",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react"    : "React",
    //     "react-dom": "ReactDOM"
    // },

    resolve : {
        extensions : [ ".js", ".jsx", ".less" ]
    },

    devtool: "#source-map",

    stats: {
        colors      : true,
        modules     : true,
        reasons     : true,
        errorDetails: true
    },

    plugins : [
        new Webpack.DefinePlugin({
            "process.env.NODE_ENV": "'" + ENV + "'",
            "__APP_VERSION__" : "'" + Package.version + "'"
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name     : "vendor",
            filename : "commons.js",
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            filename: DST + "/index.html",
            template: SRC + "/index.ejs",
            inject  : false,
            Webpack
        })
    ]
}

if (ENV == "development") {
    config.devServer = {
        contentBase       : DST,
        historyApiFallback: true,
        hot               : true,
        // inline            : true,
        quiet             : false,
        noInfo            : false,
        clientLogLevel    : "warning",
        publicPath: `http://${HOST}:${PORT}/js/`,
        // publicPath: "/js/",

        // Display only errors to reduce the amount of output.
        stats: {

            // Add asset Information
            assets: true,
            // Sort assets by a field
            assetsSort: "field",
            // Add information about cached (not built) modules
            cached: true,
            // Add children information
            children: true,
            // Add chunk information (setting this to `false` allows for a less verbose output)
            chunks: true,
            // Add built modules information to chunk information
            chunkModules: false,
            // Add the origins of chunks and chunk merging info
            chunkOrigins: false,
            // Sort the chunks by a field
            chunksSort: "field",
            // Context directory for request shortening
            context: ".",
            // `webpack --colors` equivalent
            colors: true,
            // Add errors
            errors: true,
            // Add details to errors (like resolving log)
            errorDetails: true,
            // Add the hash of the compilation
            hash: true,
            // Add built modules information
            modules: false,
            // Sort the modules by a field
            modulesSort: "field",
            // Add public path information
            publicPath: true,
            // Add information about the reasons why modules are included
            reasons: true,
            // Add the source code of modules
            source: true,
            // Add timing information
            timings: true,
            // Add webpack version information
            version: true,
            // Add warnings
            warnings: true
        },
        watchOptions: {
            ignored: /node_modules/
        },
        host: HOST,
        port: PORT
    };

    config.module.rules.push({
        test   : /\.jsx?$/,
        include: [ SRC ],
        // exclude: [/node_modules/],
        use    : [ "react-hot-loader", "babel-loader" ]
    });

    config.plugins.push(
        new Webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console
        // on HMR updates
        new Webpack.NamedModulesPlugin()
    );

    config.entry.index = [
        "webpack-dev-server/client?http://localhost:" + PORT,
        "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
        "./index.js"
    ];

    config.output.publicPath = "http://localhost:" + PORT + "/js/";
}

else if (ENV == "production") {
    config.plugins.push(
        new Webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        })
    );

    config.module.rules.push({
        test   : /\.jsx?$/,
        include: [ SRC ],
        use    : [ "babel-loader" ]
    });
}

module.exports = config;
