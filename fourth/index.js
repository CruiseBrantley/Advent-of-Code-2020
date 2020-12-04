const input = require('./data')
const splitValues = /(\w+):(#?\w+)/g
const splitArray = input.split(/\n\n/m)

const passports = []
splitArray.forEach((entry, index) => {
  passports[index] = {}
  entry = entry.replace('\n', ' ')
  entry.match(splitValues).forEach(field => {
    const splitField = field.split(':')
    passports[index][splitField[0]] = splitField[1]
  })
})

function isValid (test) {
  return 'byr' in test && 'iyr' in test && 'eyr' in test && 'hgt' in test && 'hcl' in test && 'ecl' in test && 'pid' in test ? 1 : 0
}

function isValidTwo (test) {
  if (!isValid(test)) return 0
  if (!(test.byr >= 1920 && test.byr <= 2002)) return 0
  if (!(test.iyr >= 2010 && test.iyr <= 2020)) return 0
  if (!(test.eyr >= 2020 && test.eyr <= 2030)) return 0
  if (!test.hgt.match(/((1[5-8][0-9]|19[0-3])cm|((59|6[0-9]|7[0-6])in))\b/)) return 0
  if (!test.hcl.match(/^#\w{6}$/)) return 0
  if (!test.ecl.match(/(amb|blu|brn|gry|grn|hzl|oth)\b/)) return 0
  if (!test.pid.match(/^\d{9}$/)) return 0
  return 1
}

console.log('Part 1:', passports.reduce((acc, cur) => acc + isValid(cur), 0))
console.log('Part 2:', passports.reduce((acc, cur) => acc + isValidTwo(cur), 0))
