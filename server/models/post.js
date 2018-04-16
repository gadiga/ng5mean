/**
 * Created by eguradi on 4/9/2018.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model("post", postSchema);
