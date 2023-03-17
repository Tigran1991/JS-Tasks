// 7.	Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit. To convert temperatures 	in degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F .

// const temperatureInCelsius = prompt("What is temperature now in Celsius?")
// const temperatureInFahrenheit = temperatureInCelsius * 1.8 + 32
// console.log("Temperature in Celsius", temperatureInCelsius)
// console.log("Temperature in Fahrenheit", temperatureInFahrenheit.toString())

// 8.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

// const num1 = prompt("First number is ")
// const num2 = prompt("Second number is ")

// if (num1 % num2 === 0 || num2 % num1 === 0) {
// 	alert(1)
// } else {
// 	alert(0)
// }

// 9.	Given three numbers. Find the maximum one.

// const num1 = 1,
// 	num2 = 2,
// 	num3 = 3
// const arr = [num1, num2, num3]

// const getMaxValue = (arr) => {
// 	let maxValue = num1
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > maxValue) {
// 			maxValue = arr[i]
// 		}
// 	}
// 	return maxValue
// }

// const max = getMaxValue(arr)
// console.log(max)

// 14.  	Print all numbers between 1 and 10.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((number) => console.log(number))

// 15.	Print all numbers between 1 and 10 except 6.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((number) => {
// 	if (number !== 6) console.log(number)
// })

// 16.	Print all even numbers between 1 and 10.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((number) => {
// 	if (number % 2 === 0) console.log(number)
// })

// 17.	Calculate the sum of all numbers between 1 and 10 (using loop).

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = numbers.reduce((acc, el) => acc + el, 0)

// console.log(sum)

// 18.	Calculate the sum of all numbers between 1 and 10 except 8.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = numbers.reduce((acc, el) => {
// 	if (el !== 8) {
// 		return acc + el
// 	}
// 	return acc
// }, 0)

// console.log(sum)

// 19.	Calculate the sum of all odd numbers between 1 and 10.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumOfOddNumbers = numbers.reduce((acc, number) => {
// 	if (number % 2 !== 0) {
// 		return acc + number
// 	}
// 	return acc
// }, 0)

// console.log(sumOfOddNumbers)

// 20.	Calculate the sum of squares of all numbers between 1 and 10.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumOfNumberSquare = numbers.reduce(
// 	(acc, number) => acc + Math.pow(number, 2),
// 	0
// )

// console.log(sumOfNumberSquare)

// 22.	Given five numbers as input. Calculate and print the average of the numbers.

// const numbers = [1, 2, 3, 4, 5]

// const average =
// 	numbers.reduce((acc, currentNum) => acc + currentNum, 0) / numbers.length

// console.log(average)
