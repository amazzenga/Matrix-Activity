const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
  let before = mtrx;
  for(var a=0;a<p-1;a++){
    before = Matrix(before.prod(mtrx));
  }
  return before;
}


//testing code
let B = power(A,10);
console.log(power(A,10));
