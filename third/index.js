const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)

function findTrees (x, y) {
  let xPos = 0, yPos = 0, trees = 0
  while (yPos < splitArray.length - 1) {
    yPos += y
    xPos += x
    if (xPos > splitArray[yPos].length - 1) xPos = xPos - splitArray[yPos].length
    if (splitArray[yPos][xPos] === '#') trees++
  }
  return trees
}

console.log('First Part:', findTrees(3, 1))
console.log('Second Part:', findTrees(1, 1) * findTrees(3, 1) * findTrees(5, 1) * findTrees(7, 1) * findTrees(1, 2))
