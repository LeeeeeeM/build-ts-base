function isEven(x) {
  return x % 2 === 0
}

function isOdd(x) {
  return !isEven(x)
}

module.exports = isOdd

module.exports.isEven = isEven