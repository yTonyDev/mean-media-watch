var mongoose = require("mongoose");

var mediaItemSchema = new mongoose.Schema({
    medium: String,
    name: String,
    category: String,
    year: Number,
    watchedOn: Number,
    isFavorite: Boolean
});
module.exports = mongoose.model("MediaItem", mediaItemSchema);