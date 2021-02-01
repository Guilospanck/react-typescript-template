const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin'); // to minify

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    externals: { // everything that will not be in the bundle, so the client will take care of it
        react: 'React',
        axios: 'axios',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },

    // parte of TerserPlugin:
    optimization: {
        // vendor bundle
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new Dotenv({
            path: '.env.production'
        }),
        new HtmlWebpackPlugin({
            template: 'template.prod.html'
        })
    ]
});