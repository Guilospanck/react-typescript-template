const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg', '.css'],
        alias: {
            '~': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i, // case insensitive
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'media',
                        publicPath: 'media',
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    }
}