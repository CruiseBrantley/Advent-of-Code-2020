const input = require('./data')
const splitRegex = /[\r\n]+/
const matchRegex = /(\d+)-(\d+) (\w): (\w+)/

const splitArray = input.split(splitRegex)
let numValid = 0

for (const item of splitArray) {
  const [, min, max, letterToMatch, stringBeingMatched] = Array.from(matchRegex.exec(item))
  const numberOfOccurrences = (stringBeingMatched.match(new RegExp(letterToMatch, 'g')) || []).length
  if (numberOfOccurrences >= min && numberOfOccurrences <= max) numValid++
}

console.log('Part 1:', numValid)
numValid = 0

for (const item of splitArray) {
  const [, min, max, letterToMatch, stringBeingMatched] = Array.from(matchRegex.exec(item))
  const matchMin = stringBeingMatched[min - 1] === letterToMatch
  const matchMax = stringBeingMatched[max - 1] === letterToMatch
  if (matchMin ^ matchMax) numValid++
}

console.log('Part 2:', numValid)
