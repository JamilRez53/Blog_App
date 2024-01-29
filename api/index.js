const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const PostBlog = require("./Controllers/blog");
const getBlog = require("./Controllers/getBlog");
const getIndividiualBlog = require("./Controllers/getIndividualBlog")
const deleteBlog = require("./Controllers/deleteBlog");
const updateBlog = require("./Controllers/updateBlog");
const createComment = require("./Controllers/comments");
const getComment = require("./Controllers/getComments");
const deleteComment = require("./Controllers/deleteComment")
const getSingleComment = require("./Controllers/getCommentById");
const updateComment = require("./Controllers/EditComment");
const updateStatus = require("./Controllers/updateStatus")
const cors = require("cors");
const mysql = require("mysql2");
const connection = require("./connection");
app.use(cors());    // config auth
app.use(bodyParser.json());
app.use('/create-blog',PostBlog);
app.use('/getAllBlogs',getBlog);
app.use('/getIndividualBlog',getIndividiualBlog)
app.use('/deleteBlogs',deleteBlog);
app.use('/updateEachBlog',updateBlog);
app.use('/postComment',createComment);
app.use('/getComment',getComment);
app.use('/deleteComment',deleteComment);
app.use('/getCommentByID',getSingleComment);
app.use('/editComment',updateComment);
app.use('/updateStatus',updateStatus)
app.use(express.json());
app.listen(4000, () => {
    console.log(`Connected to port:`,4000);
 });