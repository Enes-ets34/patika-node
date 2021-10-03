let r = 5;
let pi = 3.14;
let circleCircumference = () => {
  let result = pi * r * 2;
  console.log("result :>> ", result);
};

let circleArea = () => {
  let result = pi * Math.pow(r, 2);
  console.log("result :>> ", result);
};

module.exports = {
  circleCircumference,
  circleArea,   
};  
