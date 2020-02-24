function processData(input) {
    //Enter your code here
  input = input.split('\n');

  for (i = 1; i < input.length; i++) {
    let splitWord = input[i].split('');

    let evn = '';
    let od = '';

    for (x = 0; x < splitWord.length; x++) {
      if (x % 2 === 0) {
        evn = evn + splitWord[x];
      } else {
        od = od + splitWord[x];
      }
    }
    console.log(evn + ' ' + od);
  }
}
