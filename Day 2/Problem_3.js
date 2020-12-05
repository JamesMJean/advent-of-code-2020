/* 
This program accesses data from a text file, searches for passwords which are valid according to a given policy, and returns the number of valid passwords.
*/

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('Day 2 Input.txt')
  });
  
  lineReader.on('line', function (line) {   
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