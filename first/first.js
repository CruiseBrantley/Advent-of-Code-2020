const input = require('./data')

const resultTwo = input => { for (const firstValue of input) for (const secondValue of input) if (firstValue + secondValue === 2020) return firstValue * secondValue }

const resultThree = input => { for (const firstValue of input) for (const secondValue of input) for (const thirdValue of input) if (firstValue + secondValue + thirdValue === 2020) return firstValue * secondValue * thirdValue }

console.log('First Part:', resultTwo(input), '\nSecond Part:', resultThree(input))
