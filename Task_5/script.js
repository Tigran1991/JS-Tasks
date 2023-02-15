// 1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։

// const checkStringAndPrint = () => {
// 	const enteredString = prompt("Please enter string")
// 	const firstLetterOfString = enteredString.charAt(0)

// 	const reverseString = (str) => {
// 		if (str === "") {
// 			return ""
// 		} else {
// 			return reverseString(str.substr(1)) + str.charAt(0)
// 		}
// 	}

// 	if (firstLetterOfString === "a" || firstLetterOfString === "o") {
// 		return alert(enteredString)
// 	} else {
// 		const reversedString = reverseString(enteredString)
// 		return alert(reversedString)
// 	}
// }

// checkStringAndPrint()

// 2. Պահանջել մուտքագրել ծածկագիր։ Եթե ծածկագիրը պարունակում է 6-ից 12-ից նիշ և պարունակում է թվանշաններ, տառեր և հետևյալ սիմվոլներից մեկը "%", տպել, որ ծածկագիրն ուժեղ է։ Հակառակ դեպքում զգուշացրեք օգտատիրոջը, որ ծածկագիրը պետք է փոխվի։

// const checkPassword = () => {
// 	const password = prompt("Please enter your password")

// 	const passwordLength = password.length
// 	const passwordContainDigits = () => {
// 		return /\d/.test(password)
// 	}
// 	const passwordContainLetters = () => {
// 		return /[a-zA-Z]/g.test(password)
// 	}
// 	const passwordContainSymbols = () => {
// 		return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
// 	}

// 	if (
// 		passwordLength > 6 &&
// 		passwordLength < 12 &&
// 		passwordContainDigits &&
// 		passwordContainLetters &&
// 		passwordContainSymbols
// 	) {
// 		return alert("Your password is strength")
// 	} else {
// 		alert("Please enter strength password")
// 		return checkPassword()
// 	}
// }

// checkPassword()

// 3. Տրված է սթրինգ։ Տպեք նոր սթրինգ, որը կպարունակի օրիգինալ սթրինգի բոլոր տառերը կրկնապատկված։
//Օրինակ, եթե ունենք հետևյալ սթրինգը՝ Monty, պետք է ստանանք MMoonnttyy

// const str = "Monty"

// const doubleLeters = (string) => {
// 	let updatedStr = ""
// 	for (let i = 0; i < string.length; i++) {
// 		const doubleCurrentLetter = string[i] + string[i]
// 		updatedStr += doubleCurrentLetter
// 	}
// 	return updatedStr
// }

// console.log(doubleLeters(str))

// 4. # Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
// Տրված են a և b սթրինգերը։ Գտնել, թե քանի անգամ է դրանց մեջ նույն դիրքում հանդիպում 2 երկարությամբ նույն ենթասթրինգերը հանդիպում։

// const str1 = "xxcaazz"
// const str2 = "xxbaaz"

// const findMatches = (string1, string2) => {
// 	let arrayOfStr1 = string1.split("")
// 	let arrayOfStr2 = string2.split("")

// 	let arr1 = []
// 	let arr2 = []

// 	for (let i = 0; i < arrayOfStr1.length - 1; i += 2) {
// 		arr1.push(arrayOfStr1[i] + arrayOfStr1[i + 1])
// 	}

// 	for (let j = 0; j < arrayOfStr2.length - 1; j += 2) {
// 		arr2.push(arrayOfStr2[j] + arrayOfStr2[j + 1])
// 	}

// 	let count = 0
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === arr2[i]) {
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(findMatches(str1, str2))

// 5․ Տրված է թվերի զանգված։ Ֆիլտրել և ստանալ նոր զանգված, որտեղ բոլոր էլեմենտները մեծ կլինեն 6-ից։

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filteredArr = arr.filter((number) => number > 6)

// console.log(filteredArr)

// 6. Տրված է թվերի զանգված։ Բոլոր էլեմենտները մեծացնել 5 անգամ։

// let arr = [1, 2, 3, 4]

// let updatedArray = arr.map((number) => number * 5)

// console.log(updatedArray)

// 7․ Տրված է օգտատերերի օբյեկտների զանգված․
let arr = [
	{ name: "John", age: 30 },
	{ name: "Lilit", age: 25 },
	{ name: "Ani", age: 27 },
	,
	{ name: "Karen", age: 20 },
	{ name: "Aram", age: 32 },
	{ name: "Luse", age: 17 },
]

// ա) գտնել օգտատերերի միջին տարիքը

// const findAverageAgeOfMembers = (array) => {
// 	const filteredArray = array.filter((element) => element !== "undefined")
// 	const membersAges = filteredArray.map((member) => member.age)
// 	const averageAgeOfmembers =
// 		membersAges.reduce((acc, currentAge) => acc + currentAge, 0) /
// 		membersAges.length
// 	return averageAgeOfmembers
// }

// console.log(findAverageAgeOfMembers(arr))

// բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։

// const findAverageAgeOfMembers = (array) => {
// 	const filteredArray = array.filter((member) => member.age > 23)
// 	return filteredArray
// }

// console.log(findAverageAgeOfMembers(arr))

// 8․ Տրված է հետևյալ օբյեկտը
let person = {
	id: 1,
	firstName: "Avetiq",
	lastName: "Avetiq",
	age: 30,
	address: "Komitas 15",
	city: "Ijevan",
	isAdmin: true,
}

// ա) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի բանալիները(keys)
// let objectKeys = Object.keys(person)
// console.log(objectKeys)

// բ) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի արժեքները(values)

// let objectValues = Object.values(person)
// console.log(objectValues)
