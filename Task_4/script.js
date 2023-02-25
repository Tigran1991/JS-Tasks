// 1․ Տրված են երկու թվեր, տպեք դրանցից մեծը

// const num1 = 1
// const num2 = 2

// let max = Math.max(num1, num2)
// console.log(max)

// 2․ Տրված է բնական թիվ։ Ստուգեք արդյոք վերջին թվանշանը 2 է։

// const num = 22
// let lastDigit = num % 10

// if (lastDigit === 2) {
// 	console.log("True, last digit is 2")
// } else {
// 	console.log("False, last digit is not 2")
// }

// 3․ Տրված է երկու հեռավորություն, մեկը կիլոմետրով, մյուսը մետրով։ Գտեք որն է ավելի մեծ։

// const meter = 1
// const kilometer = 1000 * meter

// let firstDistance = 4 * meter
// let secondDistance = 2 * kilometer

// console.log(firstDistance)
// console.log(secondDistance)

// if (firstDistance > secondDistance) {
// 	console.log(`firstDistance is greater`)
// } else {
// 	console.log("secondDistance is greater")
// }

arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45]

// 4․ Գտնել զանգվածի երկարություն

// console.log(arr.length)

// 5. Տպել զանգվածի բոլոր էլեմենտները

// arr.forEach((element) => console.log(element))

// 6․ Գտնել զանգվածի բոլոր թվերի գումարը

// const sum = arr.reduce((acc, el) => acc + el, 0)

// console.log(sum)

// 7․ Գտնել թե քանի 1 կա զանգվածում

// const countOfOne = arr.reduce((acc, el, i) => {
// 	if (el === 1) {
// 		return acc + 1
// 	}
// 	return acc
// }, 0)

// console.log(countOfOne)

// 8․ Գտնել զույգ թվերի քանակը

// let count = 0

// arr.forEach((element, i) => {
// 	if (element % 2 === 0) {
// 		count++
// 	}
// 	if (i === arr.length - 1) {
// 		return console.log(count)
// 	}
// })

// 9․ Գտնել կենտ էլեմենտների քանակը

// let count = 0

// arr.forEach((element, i) => {
// 	if (element % 2 !== 0) {
// 		count++
// 	}
// 	if (i === arr.length - 1) {
// 		return console.log(count)
// 	}
// })

// 10․ Գտնել զանգվածի մինիմում արժեքը

// const getMinValue = (array) => {
// 	let minValue = arr[0]
// 	for (let i = 1; i < array.length; i++) {
// 		const currentValue = arr[i]
// 		if (minValue < currentValue) {
// 			continue
// 		} else {
// 			minValue = currentValue
// 		}
// 	}
// 	return console.log(minValue)
// }

// getMinValue(arr)

// 11․ Գտնել զանգվածի մաքսիմում արժեքը

// const getMaxValue = (array) => {
// 	let maxValue = arr[0]
// 	for (let i = 1; i < array.length; i++) {
// 		const currentValue = arr[i]
// 		if (maxValue > currentValue) {
// 			continue
// 		} else {
// 			maxValue = currentValue
// 		}
// 	}
// 	return console.log(maxValue)
// }

// getMaxValue(arr)

// 12. Գտնել զանգվածի էլեմենտների քառակուսիների գումարը

// let sumOfElementsSquare = arr.reduce(
// 	(acc, current, i) => acc + Math.pow(current, 2),
// 	0
// )

// console.log(sumOfElementsSquare)

// 13*․ Շուռ տալ զանգվածը, այնպես որ վերջին արժեքը դառնա առաջինը, իսկ առաջին դառնա վերջինը և այդպես շարունակ

// const invertedArr = arr.reverse()
// console.log(invertedArr)

// 14*․ Դասավորել աճման կարգով

// const sortedArray = arr.sort((a, b) => a - b)
// console.log(sortedArray)

arr = ["Hello", 15, "World", true, 89, 157, [1, 3, 7]]

// 15. Գտնել զանգվախի էլեմենտներից քանիսի տիպն է number

// const findCountOfNumberTypes = () => {
// 	const numberTypeElements = arr.filter((element) => {
// 		if (typeof element === "number") {
// 			return element
// 		}
// 	})
// 	return numberTypeElements.length
// }

// console.log(findCountOfNumberTypes())

// 16. Գտնել զանգվածի էլեմենտներից քանիսն են բուլյան տիպի

// const findCountOfBooleanTypes = () => {
// 	const booleanTypeElements = arr.filter((element) => {
// 		if (typeof element === "boolean") {
// 			return element
// 		}
// 	})
// 	return booleanTypeElements.length
// }

// console.log(findCountOfBooleanTypes())

// 17․ Տպել զանգվածի վերջին էլեմենտի բոլոր էլեմենտները

// const lastElementOfArray = arr[arr.length - 1]

// lastElementOfArray.forEach((element) => console.log(element))

// 18․ Տպել զանգվախի վերջին էլեմենտի բոլոր էլեմենտների գումարը

// const lastElementOfArray = arr[arr.length - 1]
// const sumOfArrayLastElementItems = lastElementOfArray.reduce(
// 	(acc, current) => acc + current,
// 	0
// )

// console.log(sumOfArrayLastElementItems)

// 19․ Տպել միայն զույգ ինդեքս ունեցող անդամները

// arr.forEach((element, index) => {
// 	if (index % 2 === 0 && index !== 0) {
// 		console.log(element)
// 	}
// })

// 20․ Օգտատերը ներմուծում է թիվ։ ներմուծված թվին համապատասխան տպել Ամիսը։ Չօգտագործել if

// const number = prompt("Enter number")

// switch (number) {
// 	case "1":
// 		console.log("January")
// 		break
// 	case "2":
// 		console.log("February")
// 		break
// 	case "3":
// 		console.log("March")
// 		break
// 	case "4":
// 		console.log("Abril")
// 		break
// 	case "5":
// 		console.log("May")
// 		break
// 	case "6":
// 		console.log("June")
// 		break
// 	case "7":
// 		console.log("July")
// 		break
// 	case "8":
// 		console.log("August")
// 		break
// 	case "9":
// 		console.log("September")
// 		break
// 	case "10":
// 		console.log("October")
// 		break
// 	case "11":
// 		console.log("November")
// 		break
// 	case "12":
// 		console.log("December")
// 		break
// 	default:
// 		console.log("Sorry but there is no month corresponding to entered number")
// }

// 21. Օգտատերը ներմուծում է թվեր։ Այդ թվերը ավելացրեք զանգվածում այնքան ժամանակ մինչև չգրի "exit"

// const array = []

// const enterNumbersToArray = () => {
// 	let enteredValue = prompt("Enter Number")
// 	if (enteredValue && enteredValue !== "exit") {
// 		array.push(Number(enteredValue))
// 		return enterNumbersToArray()
// 	} else if (enteredValue === "exit") {
// 		return console.log(array)
// 	} else if (enteredValue === "") {
// 		alert("Please enter number values")
// 		return enterNumbersToArray()
// 	}
// }

// enterNumbersToArray()

// 22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
// ա) երկարությունը և տպել առաջինն է մեծ թե երկրորդը

// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4, 5, 6]

// const compareArrayLengths = (array1, array2) => {
// 	const lengthOfArray1 = arr1.length
// 	const lengthOfArray2 = arr2.length
// 	return lengthOfArray1 > lengthOfArray2
// 		? console.log("First Array greather than Second Array")
// 		: console.log("Second Array greather than First Array")
// }

// compareArrayLengths(arr1, arr2)

// բ) էլեմենտների գումարը և տպել առաջինն է մեծ թե երկրորդը

// const compareSumOfArrayElements = () => {
// 	const arr1 = [1, 2, 3, 4]
// 	const arr2 = [1, 2, 3, 4, 5, 6]

// 	const sumOfArrayElements = (array) => {
// 		const sum = array.reduce((acc, current) => acc + current, 0)
// 		return sum
// 	}

// 	const sumOfFirstArrayElements = sumOfArrayElements(arr1)
// 	const sumOfSecondArrayElements = sumOfArrayElements(arr2)

// 	if (sumOfFirstArrayElements > sumOfSecondArrayElements) {
// 		return console.log(
// 			"Sum of First Array elements is greather than Sum of Second Array Elements"
// 		)
// 	} else {
// 		return console.log(
// 			"Sum of Second Array elements is greather than Sum of First Array Elements"
// 		)
// 	}
// }

// compareSumOfArrayElements()
