const path = require('path');
const Shark = require('../Models/sharks');
const sharks = require('../Models/sharks');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
        var newShark = new Shark(req.body);
        console.log(req.body);
        let output;
        (async () => {
                output = await sharks.save();
                res.redirect('/sharks/getshark');
        })
};

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
             });
        });
};