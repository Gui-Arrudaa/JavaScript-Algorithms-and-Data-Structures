const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function rot13(str) {
  let arr = str.split('');
  let finalStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (alphabet.indexOf(arr[i]) === -1) {
      finalStr += arr[i];
    } else if (alphabet.indexOf(arr[i]) < alphabet.length / 2) {
      finalStr += alphabet[alphabet.indexOf(arr[i]) + 13];
    } else {
      finalStr += alphabet[alphabet.indexOf(arr[i]) - 13];
    }
  }
  return finalStr;
}

console.log(rot13('SERR PBQR PNZC'));
