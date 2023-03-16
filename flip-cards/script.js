const cardsContainer = document.querySelector(".cards-container")
const cardsContainerList = document.querySelector(".cards-container__list")
const form = document.querySelector(".form")
const input = document.querySelector(".form__input")

const startGame = (e) => {
	e.preventDefault()

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

	const createBackElements = () => {
		const card = document.createElement("div")
		card.setAttribute("class", "theback")
		return card
	}

	const addCardsToList = () => {
		const countOfCards = input.value * 2
		for (let i = 0; i < countOfCards; i++) {
			const cardElement = createCardElements()
			const cardFrontElement = createFrontElements()
			const cardBackElement = createBackElements()
			cardsContainer.appendChild(cardElement)
			cardElement.appendChild(cardFrontElement)
			cardElement.appendChild(cardBackElement)
			cardElement.addEventListener(
				"click",
				() => (cardElement.style.transform = "rotateY(180deg)")
			)
		}
		cardsContainer.style.width = `${countOfCards * 150}px`
		cardsContainer.style.height = "240px"
	}

	addCardsToList()
}

form.addEventListener("submit", startGame)
