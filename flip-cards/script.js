const cardsContainer = document.querySelector(".cards-container")
const cardsContainerList = document.querySelector(".cards-container__list")
const form = document.querySelector(".form")
const input = document.querySelector(".form__input")

const X = 0,
	Y = 1
const cardNumbers = []
const selectedCards = []

const startGame = (e) => {
	e.preventDefault()

	const range = Number(input.value) + Y
	const countOfCards = input.value * 2

	const filterRepetitiveNumbers = (number) =>
		cardNumbers.filter((item) => item === number)

	const generateRandomNumber = () => {
		const generatedNumber = utils.getRandomNumber(Y, range)
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

	const makeComparison = (index1, index2) => {
		const elements = Array.from(document.getElementsByClassName("theback"))
		if (cardNumbers[index1] === cardNumbers[index2]) {
			elements[index1].style.backgroundColor = "#fff"
			elements[index2].style.backgroundColor = "#fff"
			selectedCards.length = X
		} else {
			const elements = Array.from(document.getElementsByClassName("card"))
			setTimeout(() => {
				elements[index1].style.transform = "rotateY(0deg)"
				elements[index2].style.transform = "rotateY(0deg)"
			}, 1000)
			selectedCards.length = X
		}
	}

	const selectCards = (e, card) => {
		card.style.transform = "rotateY(180deg)"
		selectedCards.push(e.target.parentNode.id)
		if (selectedCards.length === 2) {
			const firstCardIndex = Number(selectedCards[X])
			const secondCardIndex = Number(selectedCards[Y])
			makeComparison(firstCardIndex, secondCardIndex)
		}
	}

	const createCardElement = (currentCard, index) => {
		const card = utils.createCard(index)
		const cardFront = utils.createCardFront()
		const cardBack = utils.createCardBack(currentCard)
		cardsContainer.appendChild(card)
		card.appendChild(cardFront)
		card.appendChild(cardBack)
		return card
	}

	const addCards = () => {
		cards.forEach((item, i) => {
			const card = createCardElement(item, i)
			card.addEventListener("click", (e) => selectCards(e, card))
		})

		cardsContainer.style.width = `${countOfCards * 150}px`
		cardsContainer.style.height = "240px"
	}

	addCards()
}

form.addEventListener("submit", startGame)
