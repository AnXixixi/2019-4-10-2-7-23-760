module.exports = function main(inputs) {
  // write your code here...
  let {distance, parkTime} = inputs
  let price = null
  if (distance <= 2) {
    price = 6
  } else if (distance <= 8) {
    price = 6 + 0.8 * (distance - 2)
  } else {
    price = 10.8 + (distance - 8) * 1.2
  }
  price += 0.25 * parkTime
  return Math.round(price);
};
