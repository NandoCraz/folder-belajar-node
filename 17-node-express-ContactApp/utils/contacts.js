const fs = require("fs");

// Membuat folder data jika belum ada
const directory = "./data";
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Membuat file json jika belum ada
const file = "./data/contact.json";
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]", "utf-8");
}

// ambil semua data di contact.json
const loadContact = () => {
  const file = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.nama === nama);
  return contact;
};

module.exports = { loadContact, findContact };
