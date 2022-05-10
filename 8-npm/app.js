const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('shincraz@gmail.com'));
// console.log(validator.isMobilePhone('08012345678', 'id-ID'));
// console.log(validator.isNumeric('07012345678a'));

// console.log(chalk.white.bgYellow('Hello World'));

const nama = 'Shin Craz Chronous';
const umur = '39';
const pesan = chalk`lorem lorem {bgRed.black lisf fisifg} {bgGreen.italic.black ijsinfs ijsijfs} ${nama} ijisfjf ijifsjf ${umur}`;
console.log(pesan);