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


function powerE(mtrx,p){
  let before=mtrx;
  if(p%2==0){
    let half = powerE(mtrx,p/2);
    return
  }
  else if(p%2==1){
    let bighalf = Math.ceil(powerE(mtrx,p/2));
    let smallhalf = Math.floor(powerE(mtrx,p/2));
  }
  else{
    return A
  }
}
