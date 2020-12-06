const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)

const decimalValues = splitArray.map(
  cur => {
    const row = cur.slice(0, 7)
    const col = cur.slice(7)
    const binaryRow = Array.from(row).reduce((acc, cur) => acc + (cur === 'F' ? '0' : '1'), '')
    const binaryCol = Array.from(col).reduce((acc, cur) => acc + (cur === 'L' ? '0' : '1'), '')
    return parseInt(binaryRow + binaryCol, 2)
  }
)
const sortedValues = decimalValues.sort((a, b) => a - b)

function findMissing () {
  for (let i = 80; i <= 926; i++) {
    if (sortedValues[i - 80] !== i) return i
  }
}

console.log('First Part:', sortedValues[sortedValues.length - 1], 'Second Part:', findMissing())
