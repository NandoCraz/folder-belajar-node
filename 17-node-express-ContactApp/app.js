const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // gunakan ejs
app.use(expressLayouts); // Third-party middleware
app.use(express.static(__dirname + '/public')); // Built-in middleware

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
  const contacts = loadContact();
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
});

app.listen(port, () => {
  console.log(`ShinContact app listening on port ${port}`);
});
