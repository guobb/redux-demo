let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let config = require('./webpack.config');

let app = new (require('express'))();

let port = 3000;

let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath:
    config.output.publicPath}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(port, function (error) {
    if (error){
        console.log(error)
    }else {
        console.info("==> open up http://localhost:%s/ in your brower," , port)
    }
});