// Steve Griffith
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, //default 8080
        open: true,
        hot: true,
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    //loaders
    module: {
        rules: [
            //css
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            //images
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/i,
                type:'asset/resource',
                include: path.resolve(__dirname, 'src/assets/images'),               
            },
            //sprites
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, 'src/assets/sprite-images/'),               
                options: {
                    extract: true,
                    spriteFilename: './images/icons.svg',
                    runtimeCompat: true
                },
            },
            //js for babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    //plugins
    plugins: [
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Welcome to Foundation',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html'),
            //inject: false,
        }),       
    ],
};