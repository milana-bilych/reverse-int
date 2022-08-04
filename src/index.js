module.exports = function reverse (n) {

  let str = String(Math.abs(n));
  let arr = str.split('');

  return (arr.reverse()).join('');
}