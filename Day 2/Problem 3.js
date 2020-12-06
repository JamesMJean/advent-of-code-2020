/* 
This program accesses data from a text file, searches for passwords which are valid according to a given policy, and returns the number of valid passwords.
*/

const checkPw = line => {
  let posDash = line.indexOf('-');
  let posSpace = line.indexOf(' ');
  // console.log(`Dash is at index ${posDash} and space is at index ${posSpace}`);
  let minChar = 0;
  let maxChar = 0;
  let minStr = '';
  let maxStr = '';
  for(let i=0; i < posDash; i++){
    minStr += line[i]
  };
  minChar = parseInt(minStr);
  for(let i=posDash+1; i < posSpace; i++){
    maxStr += line[i]
  };
  maxChar = parseInt(maxStr);
  let checkChar = line[posSpace + 1];
  let charUsed = 0;
  for(let i = posSpace+4; i < line.length; i++){
    if(line[i] === checkChar) {
      charUsed++;
    }
  };
  if (minChar <= charUsed && charUsed <= maxChar) {
    numValid++;
  }
  /*
  console.log(`The character ${checkChar} must be used between ${minChar} and ${maxChar} times`);
  console.log(`The character ${checkChar} was used ${charUsed} times.`);
  */
  console.log(`Number of valid passwords: ${numValid}`);
}

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('Day 2 Input.txt')
  });

let numValid = 0;  

lineReader.on('line', function (line) {
  checkPw(line);
  console.log('Line from file:', line);
});





















  /*
const fs = require('fs');
const readline = require('readline');

fs.readFile('Day 2 Input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
*/