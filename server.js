/**
 * @author: Akshay Misal
 * @since: 07-08-2018
 * Version :- 1.0.0
 */
// call the packages we need
var express = require('express');                       // call express
var app = express();                                    // define our app using express
var bodyParser = require('body-parser');                // configure app to use router()
var router = express.Router();                          // get an instance of the express Router
var keyService = require('./app/api/svr.key');          // call genrate keys service 
var config = require('./config/config.json');           // call configration file
var port = process.env.PORT || config.port;             // set our port

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/create', create);

module.exports = router;

function create(req, res) {
    keyService.genKey(req,res)
    .then(function (data) {
        res.status(200).send(data);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}


router.get('/', function (req, res) {                   //for testing the api service (http://localhost:8080/)
    res.json({ message: 'hooray! welcome to our api!' });
});

//---------------------------REGISTER OUR ROUTES ---------------------------
app.use('/api', router);                                // all of our routes will be prefixed with /api

// ================= START THE SERVER=======================================
var server = app.listen(port, function () {
    console.log('Server listening at http://localhost:' + server.address().port);
});