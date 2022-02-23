
// You should implement your task here.

const { re } = require("semver");

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  else{
  for(let i = 0; i<matrix.length; i++) {
    if(i%2 !=0) {
      matrix[i] = matrix[i].reverse();
    }
    else {
      matrix[i];
    }
  }
  var result = JSON.parse("[" + matrix + "]");
      return result;
}
    }