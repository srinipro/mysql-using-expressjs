const fs = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry:  './src/server.ts',
    target: 'node',
    context: __dirname,
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([{
            from: 'package.json'
        }, ])
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [{
            use: 'ts-loader'
        }]
    },
    output: {
        filename: 'api.js',
        path: path.resolve('./dist')
      }
};
