// const nama = 'Shin Craz';
// const cetakNama = (nama) => `Halo, nama saya ${nama}`;
// console.log(cetakNama(nama));

//const fs = require('fs') // core module
//const cetakNama = require('./coba'); // local module
//const moment = require('moment') // third party module / npm module / node_modules

// const cetakNama = require('./coba');
// const PI = require('./coba');

const coba = require('./coba')


console.log(coba.mahasiswa.cetakMhs());
console.log(new coba.Orang());
console.log(coba.PI);
console.log(coba.cetakNama('Shin'));
// console.log(coba.cetakNama('Shin'), coba.PI);
// console.log('Hello Shin Craz');
