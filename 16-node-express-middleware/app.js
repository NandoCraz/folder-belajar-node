const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
// Third-party middleware
app.use(morgan('dev'));
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));


// Application level middleware
app.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

app.get("/", (req, res) => {
  const siswa = [
    {
      nama: "Shin Wolfourd",
      email: "shinwolf@gmail.com",
    },
    {
      nama: "Shin Chronous",
      email: "shinchrons@gmail.com",
    },
    {
      nama: "Shin Craz",
      email: "shincraz@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Shin Chronous",
    title: "Halaman Home",
    siswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use((req, res) => {
  res.status(404);
  res.send("Test Wibu");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
