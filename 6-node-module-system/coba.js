// console.log('Hello World!');
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Shin Craz',
    umur: 22,
    cetakMhs() {
        return `Halo, nama saya ${this.nama}. Saya berumur ${this.umur} tahun`
    }
}

class Orang {
    constructor() {
        console.log('Objek Orang telah dibuat.')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

module.exports = { cetakNama, PI, mahasiswa, Orang};