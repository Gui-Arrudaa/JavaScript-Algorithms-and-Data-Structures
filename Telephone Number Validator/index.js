function telephoneCheck(str) {
  let regex = /1{0,1}\s{0,1}((\(\d{3}\))|(\d{3}))[-]{0,1}[ ]{0,1}\d{3}[- ]{0,1}\d{4}/;
  return regex.test(str) && str.match(regex)[0] === str;
}

console.log(telephoneCheck('555-555-5555'));
