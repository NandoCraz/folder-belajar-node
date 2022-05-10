const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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

// const setPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };

const loadContact = () => {
  const file = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  //   const file = fs.readFileSync("data/contact.json", "utf-8");
  //   const contacts = JSON.parse(file);
  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"));
    return false;
  }

  // validasi email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email yang anda masukkan tidak valid!"));
      return false;
    }
  }

  //
  if (!validator.isMobilePhone(noHp, "id-ID") || !validator.isNumeric(noHp)) {
    console.log(chalk.red.inverse.bold("Nomer HP yang anda masukkan tidak valid"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terima Kasih Sudah memasukkan data"));
};

const listContacts = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Contact Nama & No. HP : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.blue.inverse.bold("Nama : " + contact.nama));
  console.log("Nomer HP : " + contact.noHp);
  if (contact.email) {
    console.log("Email : " + contact.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contact.json", JSON.stringify(newContacts));

  console.log(chalk.green.inverse.bold(`Data contact ${nama} berhasil dihapus`));
};

module.exports = { simpanContact, listContacts, detailContact, deleteContact };
