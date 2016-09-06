var mongoose = require("mongoose"),
    MediaItem = require("./models/mediaitem");

var data = [
    {

        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    },
    {

        name: "The Small Tall",
        medium: "Movies",
        category: "Comedy",
        year: 2015,
        watchedOn: null,
        isFavorite: true
    }, {

        name: "The Redemption",
        medium: "Movies",
        category: "Action",
        year: 2016,
        watchedOn: null,
        isFavorite: true
    }, 
    {
        name: "Hoopers",
        medium: "Series",
        category: "Drama",
        year: null,
        watchedOn: null,
        isFavorite: true
    }, 
    {
        name: "Happy Joe: Cheery Road",
        medium: "Movies",
        category: "Action",
        year: 2015,
        watchedOn: 1457166565384,
        isFavorite: false
    }
];

function seedDB(){
    //remove all mediaitems
    MediaItem.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all mediaitems!");
        
        //add a few mediaitems
        data.forEach(function(seed){
            MediaItem.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a mediaitem");
                }
                
            });
        });
    });
    
}

module.exports = seedDB;