const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  const plans = [
    { title: "Italy", snippet: "Lorem ipsum dolar sit amet consectetur" },
    { title: "Portugal", snippet: "Lorem ipsum dolar sit amet consectetur" },
    { title: "Iceland", snippet: "Lorem ipsum dolar sit amet consectetur" },
  ];
  res.render("index", { title: "Home", plans });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/itinerary/create", (req, res) => {
  res.render("create", { title: "Create New Trip" });
});

//404 - must be placed last
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
