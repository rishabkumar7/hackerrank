  function processData(input) {
  //Enter your code here
  input = input.split('\n');
  var pb = [];

  for (i = 1; i <= parseInt(input[0]); i++) {
    var contact = input[i].split(' ');
    pb[contact[0]] = contact[1];
  }

  for (i = (parseInt(input[0]) + 1); i < input.length; i++) {
    if (pb[input[i]]) {
      console.log(input[i] + '=' + pb[input[i]]);
    } else {
      console.log('Not found');
    }
  }
