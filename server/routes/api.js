/**
 * Created by eguradi on 4/9/2018.
 */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const post = require("../models/post");

const db = "mongodb://admin:admin123@ds139919.mlab.com:39919/codepostnet";

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
    if (err) {
        console.log("Connection error ::" + err);
    }
});

router.get("/posts", (req, res) => {
   console.log("Requesting posts");
   post.find({})
       .exec((err, posts) => {
        if (err){
            console.log(`Find error for Posts::${err}`);
        } else {
            res.json(posts);
        }
       });
});

router.get("/details/:id", (req, res) => {
   console.log("Requesting posts");
   post.findById(req.params.id)
       .exec((err, post) => {
        if (err){
            console.log(`Find error for Post::${err}`);
        } else {
            res.json(post);
        }
       });
});

router.post("/posts", (req, res) => {
   console.log("Adding post");
   let newPost = new post();
   newPost.title = req.body.title;
   newPost.url = req.body.url;
   newPost.description = req.body.description;
   newPost.save((err, addedPost)=> {
        if (err) {
            console.log("Error POSTing Post::" + err);
        } else {
            res.json(addedPost);
        }
   });
});

module.exports = router;