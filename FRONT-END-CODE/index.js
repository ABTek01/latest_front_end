console.log('javascript code')

// .trim() method deletes white space.
console.log(' new string '.trim())

// built in objects

// js Math object
Math.random() // generates a random number between 0 & 1
Math.floor() //rounds a number down to the nearest whole number

var randomCount = Math.floor(Math.random() * 100) //creates a random number between  0 and 100
console.log(randomCount)

// returns the smallest integer greater than or equal to a decimal number.
var greaterThanOrequalToDec = Math.ceil(45.5)
console.log(greaterThanOrequalToDec)

greaterThanOrequalToDec = Math.ceil(45.4)
console.log(greaterThanOrequalToDec)

greaterThanOrequalToDec = Math.ceil(45.3)
console.log(greaterThanOrequalToDec)

greaterThanOrequalToDec = Math.ceil(44.5)
console.log(greaterThanOrequalToDec)

greaterThanOrequalToDec = Math.ceil(44.1)
console.log(greaterThanOrequalToDec)

// a method on the built-in Number object that checks if a number is an integer.

//verify a variable is a number.
var verifyIsNumber = Number.isInteger(greaterThanOrequalToDec)
console.log(verifyIsNumber)

//'let' variable keyword preferred over 'var'
let changeMe = true
changeMe = false
console.log(changeMe)

// const CONSTANTVAR = 'constant'
// CONSTANTVAR = 'not a constant'
// console.log(CONSTANTVAR)
console.log('constant variable cannot be directly changed')


// mathematical assignment operators
let newVal = 1
newVal += 1
console.log(newVal)

newVal -= 1
console.log(newVal)

newVal *= 1
console.log(newVal)

newVal /= 1
console.log(newVal)

// increment and decrement operators
// ++, --

newVal ++
console.log(newVal)

newVal -- 
console.log(newVal)

// string concatenation & interpolation with variables
let favoriteProgrammingLanguages = ['javascript', 'python', 'kotlin']

console.log('favorite programming languages in order: ' + favoriteProgrammingLanguages[0] + ', ' + favoriteProgrammingLanguages[1] + ', ' + favoriteProgrammingLanguages[2] + '.'
)

console.log(
    `favorite programming languages in order (interpolation): ${favoriteProgrammingLanguages[0]}, ${favoriteProgrammingLanguages[1]}, ${favoriteProgrammingLanguages[2]}.`
)

// typeof operator; used to return datatype of a value.
let myNewVar = ''
console.log(typeof myNewVar)

//conditional statements; if, else if, else.
console.log('test')

let intArr = [0, 1, 2, 3, 4, 5]
let intArrSum = intArr.reduce((acc, currentVal) =>{
    return acc + currentVal
}, intArr[0])
console.log()
console.log(intArrSum)
console.log(intArrSum / intArr.length)
 
//verify average calculation.
console.log(15 / 6)













































































