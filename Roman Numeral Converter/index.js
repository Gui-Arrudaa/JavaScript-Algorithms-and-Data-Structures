const unidade = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
};

const dezena = {
  0: '',
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC',
};

const centena = {
  0: '',
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM',
};

const milhar = {
  0: '',
  1: 'M',
  2: 'MM',
  3: 'MMM',
};

function convertToRoman(num) {
  let u = Math.floor(num / 1) % 10;
  let d = Math.floor(num / 10) % 10;
  let c = Math.floor(num / 100) % 10;
  let m = Math.floor(num / 1000) % 10;
  return milhar[m] + centena[c] + dezena[d] + unidade[u];
}

console.log(convertToRoman(36));
