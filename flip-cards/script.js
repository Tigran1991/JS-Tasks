const cardsContainer = document.querySelector(".cards-container")
const cardsContainerList = document.querySelector(".cards-container__list")
const form = document.querySelector(".form")
const input = document.querySelector(".form__input")

const startGame = (e) => {
	e.preventDefault()

	const MIN_RANGE = 1
	const range = Number(input.value) + 1
	const countOfCards = input.value * 2
	const cardNumbers = []

	const filterRepetitiveNumbers = (number) =>
		cardNumbers.filter((item) => item === number)

	const generateRandomNumber = () => {
		const generatedNumber = utils.getRandomNumber(MIN_RANGE, range)
		if (cardNumbers.includes(generatedNumber)) {
			const filteredNumbers = filterRepetitiveNumbers(generatedNumber)
			if (filteredNumbers.length < 2) {
				return cardNumbers.push(generatedNumber)
			} else {
				return generateRandomNumber()
			}
		} else {
			return cardNumbers.push(generatedNumber)
		}
	}

	const generateRandomNumbersInRangeForCards = () => {
		for (let i = 0; i < countOfCards; i++) {
			generateRandomNumber()
		}
		return cardNumbers
	}

	const cards = generateRandomNumbersInRangeForCards()

	const todo = []

	console.log(cardNumbers)

	const addCards = () => {
		cards.forEach((item, i) => {
			const card = utils.createCard(i)
			const cardFront = utils.createCardFront()
			const cardBack = utils.createCardBack(item)
			cardsContainer.appendChild(card)
			card.appendChild(cardFront)
			card.appendChild(cardBack)
			card.addEventListener("click", (e) => {
				card.style.transform = "rotateY(180deg)"
				todo.push(e.target.parentNode.id)
				if (todo.length === 2) {
					const index1 = Number(todo[0])
					const index2 = Number(todo[1])
					console.log(cardNumbers[index1])
					console.log(cardNumbers[index2])
					const elements = Array.from(
						document.getElementsByClassName("theback")
					)

					if (cardNumbers[index1] === cardNumbers[index2]) {
						console.log(elements[index1])
						elements[index1].style.backgroundColor = "#fff"
						elements[index1].style.color = "#333"
						elements[index2].style.backgroundColor = "#fff"
						elements[index2].style.color = "#333"
						todo.length = 0
					} else {
						const elements = Array.from(document.getElementsByClassName("card"))
						console.log(elements[index1])
						console.log(elements[index2])
						setTimeout(() => {
							elements[index1].style.transform = "rotateY(0deg)"
							elements[index2].style.transform = "rotateY(0deg)"
						}, 1000)
						todo.length = 0
					}
				}
			})
		})

		cardsContainer.style.width = `${countOfCards * 150}px`
		cardsContainer.style.height = "240px"
	}

	addCards()
}

form.addEventListener("submit", startGame)
