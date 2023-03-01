// 1․ Գրել ֆունկցիա, որը պարամետրով ստանում է n բնական թիվ և
// 1-3-ի դեպքում վերադարձնում է "Վատ",
// 4-6 - "Միջին"
// 7-8 - "Լավ"
// 9-10 - "Գերազանց"
// այլ դեպքերում "Սխալ գնահատական"։

const getGrades = (n) => {
	const getGradeValues = (a, b) => {
		const gradeValues = []
		for (let i = a; i <= b; i++) {
			gradeValues.push(i)
		}
		return gradeValues
	}

	const grades = {
		vat: getGradeValues(1, 3),
		mijin: getGradeValues(4, 6),
		lav: getGradeValues(7, 8),
		gerazanc: getGradeValues(9, 10),
	}

	const getGradesByN = () => {
		if (grades.vat.includes(n)) {
			return "Վատ"
		} else if (grades.mijin.includes(n)) {
			return "Միջին"
		} else if (grades.lav.includes(n)) {
			return "Լավ"
		} else if (grades.gerazanc.includes(n)) {
			return "Գերազանց"
		}
	}

	return getGradesByN()
}

console.log("1.", getGrades(10))

// 2. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում 0-ից n թվի
// միջև ընկած թվերի գումարը (n-ը ներառյալ)։

const sumOfRange = (n) => {
	const numbers = [...Array(n + 1).keys()]
	const sum = numbers.reduce((acc, current) => acc + current, 0)
	return sum
}

console.log("2.", sumOfRange(9))

// 3․ Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում n թվի ֆակտորյալը։

const getFactorialOfNumber = (n) => {
	if (n < 0) {
		return "The number must be positive"
	} else if (n === 0 || n === 1) {
		return 1
	} else {
		return n * getFactorialOfNumber(n - 1)
	}
}

console.log("3.", getFactorialOfNumber(10))

// 4 Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n ամբողջ թիվ և վերադարձնում true n-ը պարզ թիվ լինելու դեպքում,
// հակառակ դեպքում false:

const checkIsItPrimeNumber = (number) => {
	const checkIsPositiveNumberisPrime = () => {
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				return false
			} else {
				return true
			}
		}
	}

	if (number < 0) {
		return "The number must be positive"
	} else if (number === 1) true
	else checkIsPositiveNumberisPrime()
}

console.log("4.", checkIsItPrimeNumber(3))

// 5․ Գրել ֆունկցիա, որը պարամետրով ստանում է (x1, y1) և (x2, y2) կետերի կոորդինատները և վերադարձնում 2 կետերի
// միջև եղած հեռավորությունը:

const getDistanceBetweenTwoPoints = ([x1, y1], [x2, y2]) => {
	const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
	return distance
}

console.log("5.", getDistanceBetweenTwoPoints([1, 2], [3, 4]))

// 6. Գրել ֆունկցիա, որը պարամետրով ստանում է arr զանգված և վերադարձնում նոր զանգված առանց կրկնվող տարրերի։
// օր․ [ 4, 4, 7, 8, 9, 5, 5, 6] --> [ 4, 7, 8, 9, 5, 6 ]:

const getArrayWithoutRepeatingNumbers = (arr) => {
	const updatedArray = []
	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i]
		if (updatedArray.includes(currentElement)) continue
		else updatedArray.push(currentElement)
	}
	return updatedArray
}

console.log("6.", getArrayWithoutRepeatingNumbers([4, 4, 7, 8, 9, 5, 5, 6]))

// 7. https://edabit.com/challenge/8Qg78sf5SNDEANKti

const animals = (chicken, cows, pigs) => {
	const chickenLegs = chicken * 2
	const cowsLegs = cows * 4
	const pigsLegs = pigs * 4
	return chickenLegs + cowsLegs + pigsLegs
}

console.log("7.", animals(2, 3, 5))

// 8․ https://edabit.com/challenge/JesaFi5ntBEbGT8bu

const convert = (hours, minutes) => {
	const hourInSeconds = hours * 3600
	const minutesInSeconds = minutes * 60
	return hourInSeconds + minutesInSeconds
}

console.log(convert(1, 3))

// 9․ https://edabit.com/challenge/vvuAkYEAArrZvmp6X

let num3 = 7
let num4 = 12

console.log(num3.toString(2))
console.log(num4.toString(2))

// 10. https://edabit.com/challenge/3kcrnpHk7krNZdnKK

const binaryDigits = []

function binary(decimal) {
	if (decimal >= 1) {
		if (decimal % 2 === 0) {
			binaryDigits.unshift(0)
		} else {
			binaryDigits.unshift(1)
		}
		binary(Math.floor(decimal / 2))
	}
	let binaryRepresentation = ""

	for (let i = 0; i < binaryDigits.length; i++) {
		binaryRepresentation += binaryDigits[i]
	}

	return binaryRepresentation
}

console.log("10.", binary(20))

//11. https://edabit.com/challenge/Q3n42rEWanZSTmsJm

const minMax = (arr) => {
	const getMinValue = () => {
		let min = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i]
			else continue
		}
		return min
	}

	const getMaxValue = () => {
		let max = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i]
			else continue
		}
		return max
	}

	const minValue = getMinValue()
	const maxValue = getMaxValue()

	return [minValue, maxValue]
}

console.log("11.", "[1, 2, 3]", minMax([1, 2, 3]))
console.log(
	"11.",
	"[4, 6, 7, 3, 20, -2, 0, 11]",
	minMax([4, 6, 7, 3, 20, -2, 0, 11])
)

// 12. https://edabit.com/challenge/xsi99TwpGyFC8KS6d

const numberSplit = (num) => {
	let left
	let right
	const halfOfNumber = num / 2
	if (Number.isInteger(halfOfNumber)) {
		left = halfOfNumber
		right = halfOfNumber
	} else {
		left = Math.floor(halfOfNumber)
		right = Math.floor(halfOfNumber) + 1
	}

	return [left, right]
}

console.log("12.", numberSplit(20))
console.log("12.", numberSplit(81))
console.log("12.", numberSplit(-83))
