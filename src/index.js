module.exports = function reverse (n) {
  return (Math.abs((n.toString().replace("-", "").split('').reverse().join(''))));
}
