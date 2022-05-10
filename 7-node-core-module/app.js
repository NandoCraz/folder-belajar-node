// Core Module
// =====File System=====
const fs = require("fs");

// ---Menuliskan string ke file (Synchronous)---
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara Synchronous!')
// } catch(e) {
//     console.log(e)
// }

// ---Menuliskan string ke file (Asynchronous)---
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
//     console.log(e);
// });

// ---Membaca isi file (Synchronous)---
// const dataRead = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(dataRead);

// ---Membaca isi file (Asynchronous)---
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });

// =====Readline=====
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama anda : ", (nama) => {
  rl.question("Masukkan No. HP anda : ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));

    console.log("Terima Kasih Sudah memasukkan data");

    rl.close();
  });
});
