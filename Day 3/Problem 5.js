/*
This program will read in a grid from a file, create an array from that grid, and count the number of "trees" on a defined path through the grid.

Improvment: It is possible to trace the path without using copies of the grid to fill a huge array.  Reset horizontal index to 0 when it reaches
the end of the row.
*/

const gridArr = line => {
    let fullLine = '';
    fullLine += line;
    let lineArr = fullLine.split('');
    console.log(lineArr);
}

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('Day 3 Input.txt')
  }); 

let fullGrid = [];

lineReader.on('line', function (line, fullGrid) {
//  fullGrid.push(gridArr(line));
  return fullGrid;
});

console.log(fullGrid[0][3]);






























/*

This is the first (very poor) attempt.  Program took too long to run.
const gridArr = line => {
    let fullLine = '';
    for (let i = 0; i < 32; i++) {
        fullLine += line;
    }
    let lineArr = fullLine.split('');
    return lineArr;
//    console.log(fullGrid);
}

const countTrees = fullGrid => {
  for(let i = 0; i < 323; i++) {
      for (let j = 0; j < 966; j+3) {        
        if (fullGrid[i][j] === '#') {
          trees++;
        }
      }
  }
  return trees;
}

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('Day 3 Input.txt')
  });

let fullGrid = [];  
let lineGrid = [];
let trees = 0;

lineReader.on('line', function (line) {
  fullGrid.push(gridArr(line));
  console.log(fullGrid);
  console.log(countTrees(fullGrid));
});

//countTrees(fullGrid);
*/





