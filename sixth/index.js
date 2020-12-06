const input = require('./data')
const splitGroups = input.split(/\n\n/m)
const splitValues = splitGroups.map(group => group.split(/\n/g))

let totalValue = 0
let totalAgreedValue = 0
splitValues.forEach(group => {
  const groupSetValues = new Set()
  const groupObjectValues = {}
  group.forEach((member, idx) => Array.from(member).forEach(item => {
    groupSetValues.add(item)
    if (!(item in groupObjectValues)) groupObjectValues[item] = []
    groupObjectValues[item].push(idx)
  }))
  totalValue += groupSetValues.size
  for (const value in groupObjectValues) {
    if (groupObjectValues[value].length === group.length) totalAgreedValue += 1
  }
})
console.log('Part 1:', totalValue)
console.log('Part 2:', totalAgreedValue)
