let book = {
	author: "Bill Gates",
	title: "The Road Ahead",
	readingStatus: true,
}

// 1. Զանգվածով ստանալ վերը նշված օբյեկտի key-երը

const keys = Object.keys(book)
console.log(keys)

// 2. Զանգվածով ստանալ վերը նշված օբյեկտի value-ները

const values = Object.values(book)
console.log(values)

// 3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ օբյեկտ, որտեղ key-երը
//առաջին զանգվածի էլեմենտներն են, իսկ value-ները 2րդ զանգվածի։

const objectKeys = ["author", "title", "readingStatus"]
const objectValues = ["Bill Gates", "The Road Ahead", true]

const getObject = () => {
	let book = {}
	for (let i = 0; i < objectKeys.length; i++) {
		const key = objectKeys[i]
		const value = objectValues[i]
		book[key] = value
	}
	return book
}

console.log(getObject())

// 4․
let library = [
	{
		title: "The Road Ahead",
		author: "Bill Gates",
		libraryID: 1254,
	},
	{
		title: "Walter Isaacson",
		author: "Steve Jobs",
		libraryID: 4264,
	},
	{
		title: "Mockingjay: The Final Book of The Hunger Games",
		author: "Suzanne Collins",
		libraryID: 3245,
	},
]

// Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId-ի։

const library1 = library.sort((a, b) => a.libraryID - b.libraryID)
console.log(library1)

// 5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները
// [NaN, 0, 15, false, -22, '',undefined, 47,  null]

let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null]

const deleteElementsFromArray = () => {
	const elementsToBeDeleted = [null, 0, "", "", undefined, false]
	const filteredArr = arr.filter(
		(element) => !elementsToBeDeleted.includes(element)
	)
	return filteredArr
}

console.log(deleteElementsFromArray())
