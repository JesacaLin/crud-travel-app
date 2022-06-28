const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
//tell the view engine where to look.
app.set("views", "pages");

//listen for requests
app.listen(3000);

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
