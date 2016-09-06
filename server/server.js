var express         = require('express'),
    path            = require('path'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    mongoose        = require("mongoose"),
    seedDB          = require("./seedDB");

var index = require('./routes/index');
var mediaItems = require('./routes/mediaitems');

var app = express();

mongoose.connect("mongodb://localhost/media-mean-app");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use('/', index);
app.use('/api/v1/', mediaItems);


//seedDB(); //SeedDB

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("media-mean-app has started."); 
});

module.exports = app;