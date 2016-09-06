var express = require('express');
var router = express.Router();
var MediaItem = require("../models/mediaitem");

/* GET All */
router.get('/mediaitems', function(req, res, next) {
    MediaItem.find({}, function(err, allMediaItems){
        if(err){
            console.log(err);
            res.redirect("/mediaitems");
        } else {
            res.json(allMediaItems);
        }
    });
});
/* GET One with the provided ID */
router.get('/mediaitems/:id', function(req, res, next) {
    
});
/* POST/SAVE */
router.post('/mediaitems', function(req, res, next) {
   var  medium = req.body.medium,
        name = req.body.name,
        category = req.body.category,
        year = req.body.year,
        newMediaItem = {medium:medium, name:name, category:category, year:year};
    MediaItem.create(newMediaItem, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.redirect("/mediaitems");
        } else {
            res.json(newlyCreated);
        }
    });
});
/* PUT/UPDATE  */
router.put('/todo/:id', function(req, res, next) {
    
});
/* DELETE a Todo */
router.delete('/mediaitems/:id', function(req, res) {
    MediaItem.findByIdAndRemove(req.params.id, function(err, result){
        if(err){
            console.log(err);
            res.redirect("/mediaitems");
        } else {
            console.log('deleted');
            res.json(result);
        }
    });
});
module.exports = router;