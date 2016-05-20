/**
 * Created by Administrator on 2016/5/18.
 */
var path = require("path");
var webpack = require("webpack");
var publicPath = 'http://localhost:3000/build/';

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var glob = require('glob');
var getEntry = function () {
    var entry = {}; //首先我们先读取我们的开发目录
    glob.sync('./src/js/**/*.js').forEach(
        function (name) {
            var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
            n = n.slice(0, n.lastIndexOf('/'));
//接着我对路径字符串进行了一些裁剪成想要的路径
            entry[n] = name;console.log
            ("**************"+name);

        });
    return entry;
}
module.exports = {
    entry: getEntry(),
    output: {
        publicPath: publicPath,
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: 'source-map',
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },,
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'},
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'echarts':'echarts'

        }),
    ]
}


/*
 var path = require("path");
 module.exports = {
 entry:[
 'webpack-dev-server/client?http://0.0.0.0:9000',//资源服务器地址
 'webpack/hot/only-dev-server',
 "./public/js/build.js"],
 output: {
 publicPath: "http://127.0.0.1:9000/build/",
 path:path.join(__dirname, './public/build'),
 filename:"build.js"
 },
 resolve: {
 extensions: ['', '.js']
 },
 module: {
 //加载器配置
 loaders: [
 //.css 文件使用 style-loader 和 css-loader 来处理
 { test: /\.css$/, loader: 'style-loader!css-loader' },
 //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
 { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
 //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
 { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
 ]
 },
 externals: {
 jquery: 'jQuery.noConflict()' //或者jquery:'jQuery'
 }
 }

 */