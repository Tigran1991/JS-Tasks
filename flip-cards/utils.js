const utils = {
	getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min)) + min,

	createCard: (id) => {
		const card = document.createElement("div")
		card.setAttribute("class", "card")
		card.setAttribute("id", id)
		return card
	},

	createCardFront: () => {
		const card = document.createElement("div")
		card.setAttribute("class", "thefront")
		return card
	},

	createCardBack: (text) => {
		const card = document.createElement("div")
		card.setAttribute("class", "theback")
		const number = document.createElement("p")
		number.innerText = text
		card.appendChild(number)
		return card
	},
}
