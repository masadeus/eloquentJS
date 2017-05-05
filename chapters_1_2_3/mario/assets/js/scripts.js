counter = 0
var result = '       #';
for(counter; counter <= 7; counter++) {
  if(counter < 7){
    console.log(result);
    result = result + '#'
  }
  else{
    var counter2 = counter;
    result = "#######";
    for(counter2; counter2 != 0; counter2--){
      console.log(result);
      result = result.split('');
      result.pop();
      result.unshift(' ');
      result = result.join('');
    }
  }
}

