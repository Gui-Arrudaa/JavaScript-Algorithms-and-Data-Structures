function palindrome(str) {
  const regex = /[\W_]/g;
  const newStr = str.toLowerCase().replace(regex, '');
  const reverStr = newStr.split('').reverse().join('');
  if (reverStr === newStr) return true;
  return false;
}

console.log(palindrome('eye'));
