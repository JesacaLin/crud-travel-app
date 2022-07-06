const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Post = require("./models/post");

//express app
const app = express();

//connect to MongoDB
const dburi =
  "mongodb+srv://travelbuddy:3YwX0uPP7a4fT4Oh@cluster0.wgsikhw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dburi, { useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
//tell the view engine where to look.
app.set("views", "pages");

//middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect(".models/posts");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//post routes

app.get("/posts", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Posts", posts: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/plans/create", (req, res) => {
  res.render("create", { title: "Create New Trip" });
});

//404 - must be placed last
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
