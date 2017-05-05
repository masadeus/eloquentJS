var string = '', j = 0;
while (j < 8) {
  if(j % 2) {
    i = 0;
    while(i < 4) {
      string += '# ';
      i++
    }
    string += '\n'
  }
  else {
    i = 0;
    while(i < 4) {
      string += ' #';
      i++
    }
    string += '\n'
  }
  j++
}
console.log(string);


