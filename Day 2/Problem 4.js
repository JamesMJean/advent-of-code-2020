/* 
This program accesses data from a text file, searches for passwords which are valid according to a given policy, and returns the number of valid passwords.
For a password to be valid, the given character must appear at exactly one of the two positions listed at the beginning of the password policy.
*/

const checkPw = line => {
    let posDash = line.indexOf('-');
    let posSpace = line.indexOf(' ');
    // console.log(`Dash is at index ${posDash} and space is at index ${posSpace}`);
    let posOne = 0;
    let posTwo = 0;
    let minStr = '';
    let maxStr = '';
    for(let i=0; i < posDash; i++){
      minStr += line[i]
    };
    posOne = parseInt(minStr);
    for(let i=posDash+1; i < posSpace; i++){
      maxStr += line[i]
    };
    posTwo = parseInt(maxStr);
    let checkChar = line[posSpace + 1];
    let charUsed = 0;
    let pwStartIndex = posSpace + 4;
    if (line[pwStartIndex+posOne-1] === checkChar){
        if(line[pwStartIndex+posTwo-1] != checkChar) {
            numValid++;
        };
    } else if (line[pwStartIndex+posTwo-1] === checkChar) {
        numValid++;
    }
    console.log(numValid);

    /*
    for(let i = posSpace+4; i < line.length; i++){
      if(line[i] === checkChar) {
        charUsed++;
      }
    };
    */
  }
  
  var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('Day 2 Input.txt')
    });
  
  let numValid = 0;  
  
  lineReader.on('line', function (line) {
    checkPw(line);
    console.log('Line from file:', line);
  });