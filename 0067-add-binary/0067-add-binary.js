var addBinary = function (a, b) {
  let x = BigInt("0b" + a);
  let y = BigInt("0b" + b);
  return (x + y).toString(2);
};
