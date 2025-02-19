
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{type:String,requied:true,unique:true,min:5},
    content:{type:String,requied:true,min:50},
    author:{type:String},
    tags:{type:[String],default:[]},
    category:{type:String,default:"General"},
    likes:{type:[String]},
    createdAt:{type:Date,default:()=>Date.now()},
    updatedAt:{type:Date},
    comments:[Comment]

})

const CommentSchema = new mongoose.Schema({
    username:{type:String},
    message:{type:String,requied:true},
    commentedAt:{type:Date,defaut:()=>Date.now()},


})


const blog = mongoose.model("blog",BlogSchema);
const comment = mongoose.model("comment",CommentSchema);

module.exports = mongoose.model("blog",BlogSchema);
module.exports = mongoose.model("comment",CommentSchema);






