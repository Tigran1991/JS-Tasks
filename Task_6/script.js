// 1․ Ստեղծել ֆունկցիա, որը կվերցնի զանգված որպես արգումենտ (սթրինգերի) և կվերադարձնի մեկ այլ լիստ, որը կպարունակի այդ լիստի բոլոր այն բառերը, որոնք սկվում են ձայնավորով։

// const getWordsThatBeginWithVowel = (words) => {
// 	const vowels = /^[aeiou]$/i
// 	const wordsThatBeginWithVowel = words.filter((word) =>
// 		vowels.test(word.charAt(0))
// 	)
// 	return wordsThatBeginWithVowel
// }

// console.log(
// 	getWordsThatBeginWithVowel([
// 		"this",
// 		"is",
// 		"some",
// 		"words",
// 		"for",
// 		"this",
// 		"task",
// 	])
// )

// 2․ Ստեղծել ֆունկցիա, որը որպես արգումենտ ընդունած թիվը կստուգի և կասի այն պարզ թիվ է թե ոչ

// const checkTheClarityOfTheNumber = (number) => {
// 	const squareRootOfNumber = Math.sqrt(number)
// 	if (number === 1) {
// 		return "This is Simple number"
// 	}
// 	for (let i = 2; i < number; i++) {
// 		if (number % i === 0) {
// 			return "This is not Simple number"
// 		} else {
// 			return "This is Simple number"
// 		}
// 	}
// }

// console.log(checkTheClarityOfTheNumber(24))

// 3․ Գրել ֆունկցիա, որը կտպի True, եթե լիստի բոլոր էլեմենտները 1 կամ 4 են։ Հակառակ դեպքում տպել False:

// const isAllNumbersOneOrFour = (numbers) => {
// 	const filteredNumbers = numbers.filter(
// 		(number) => number !== 1 && number !== 4
// 	)

// 	const checkNumbers = () => {
// 		if (filteredNumbers.length === 0) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}

// 	return checkNumbers()
// }

// console.log(isAllNumbersOneOrFour([1, 1, 4, 4]))

// 4. Ստեղծել ֆունկցիա, որը կստեղծի և կտպի լիստ, որի արժեքները [1, 30] միջակայքում գտնվող թվերի քառակուսիներն են

// const generateAndPrintNumbersList = () => {
// 	let list = []
// 	for (let i = 1; i <= 30; i++) {
// 		list.push(i)
// 	}

// 	const listOfSquareNumbers = list.map((number) => number * number)
// 	return listOfSquareNumbers
// }

// console.log(generateAndPrintNumbersList())

// 5․ Ստեղծել ֆունկցիա, որը կվերցնի մեկ արգումենտ՝ n: Վերադարձնել n երկարությամբ լիստ, որը կպարունակի (-100, 400) միջակայքում գտնվող պատահական թվեր։

// const generateListOfRandomNumbers = (n) => {
//     const list = []

// 	const getRandomNumberInRange = (min, max) => {
// 		return Math.floor(Math.random() * (max - min) + min)
// 	}

// 	const addRandomNumbersToList = () => {
// 		for (let i = 0; i < n; i++) {
// 			list.push(getRandomNumberInRange(-100, 400))
// 		}
// 		return list
// 	}

// 	return addRandomNumbersToList()
// }

// console.log(generateListOfRandomNumbers(3))

// 6. Ստեղծել ֆունկցիա, որը կգումարի տրված լիստի բոլոր թվերը և կվերադարձնի այն։ Եթե տարրերից մեկը 13 է, դադարեցնել հաշվարկը
//# և վերադարձնել մինչև այդ պահը հաշված գումարը։

// const sumNumbersOfList = (numbers) => {
// 	let sum = 0
// 	for (let i = 0; i < numbers.length; i++) {
// 		let currentNumber = numbers[i]
// 		if (currentNumber !== 13) sum += currentNumber
// 		else break
// 	}
// 	return sum
// }

// console.log(sumNumbersOfList([10, 20, 30, 40]))
// console.log(sumNumbersOfList([10, 13, 30, 40]))
