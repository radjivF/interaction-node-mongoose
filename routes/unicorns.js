var mongo = require('mongodb');


var BSON = mongo.BSONPure;
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  
});


var unicornSchema = mongoose.Schema({
    name: String,
    status: String
})

unicornSchema.methods.speak = function () {
  var greeting = this.name
    ? "My name is " + this.name
    : "I don't have a name"
  console.log(greeting);
}

var Unicorn = mongoose.model('Unicorn', unicornSchema)



exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving unicorn: ' + id);
    Unicorn.find({ _id: /^id/ }, callback)
};

exports.findAll = function(req, res) {
    Unicorn.find(function (err, unicorns) {
    if (err) return console.error(err);
        res.send(unicorns);
    })     
};

exports.addUnicorn = function(req, res) {
    var newUnicorn = req.body;
    newUnicorn.save(function (err, newUnicorn) {
    if (err) return console.error(err);
        console.log('Adding unicorn: ' + JSON.stringify(newUnicorn));
    });
}

exports.updateUnicorn = function(req, res) {
    var id = req.params.id;
    var update = req.body;
    Unicorn.findByIdAndUpdate(id, update, callback)
}

exports.deleteUnicorn = function(req, res) {
    var id = req.params.id;
    Unicorn.findByIdAndRemove(id, callback);
}

