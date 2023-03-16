const cardsContainer = document.querySelector(".cards-container")
const cardsContainerList = document.querySelector(".cards-container__list")
const form = document.querySelector(".form")
const input = document.querySelector(".form__input")

const startGame = (e) => {
	e.preventDefault()

	const countOfCards = input.value * 2
	const cardNumbers = []

	const generateRandomNumber = () => {
		const generatedNumber = utils.getRandomIndex(1, 4)
		if (cardNumbers.includes(generatedNumber)) {
			const filteredNumbers = cardNumbers.filter(
				(item) => item === generatedNumber
			)
			if (filteredNumbers.length < 2) {
				cardNumbers.push(generatedNumber)
			} else {
				generateRandomNumber()
			}
		} else {
			cardNumbers.push(generatedNumber)
		}
	}

	const generateRandomNumbersInRangeForCards = () => {
		for (let i = 0; i < countOfCards; i++) {
			generateRandomNumber()
		}
		return cardNumbers
	}

	const cards = generateRandomNumbersInRangeForCards()

	const createCardElements = () => {
		const card = document.createElement("div")
		card.setAttribute("class", "card")
		return card
	}

	const createFrontElements = () => {
		const card = document.createElement("div")
		card.setAttribute("class", "thefront")
		return card
	}

	const createBackElements = (text) => {
		const card = document.createElement("div")
		card.setAttribute("class", "theback")
		const number = document.createElement("p")
		number.innerText = text
		card.appendChild(number)
		return card
	}

	const addCards = () => {
		cards.forEach((card) => {
			const cardElement = createCardElements()
			const cardFrontElement = createFrontElements()
			const cardBackElement = createBackElements(card)
			cardsContainer.appendChild(cardElement)
			cardElement.appendChild(cardFrontElement)
			cardElement.appendChild(cardBackElement)
			cardElement.addEventListener(
				"click",
				() => (cardElement.style.transform = "rotateY(180deg)")
			)
		})

		cardsContainer.style.width = `${countOfCards * 150}px`
		cardsContainer.style.height = "240px"
	}

	addCards()
}

form.addEventListener("submit", startGame)
