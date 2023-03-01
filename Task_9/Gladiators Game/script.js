import playGame from "./playGame.js"

const newGame = () => {
	const container = document.querySelector(".container")
	const form = document.querySelector(".form")
	const input = document.querySelector(".input_gladiator")

	container.style.opacity = "1"

	const makeGame = (e) => {
		e.preventDefault()
		if (input.value === "") {
			alert("Please enter number of gladiators !")
		} else {
			playGame(container, input)
		}
	}

	form.addEventListener("submit", makeGame)
}

newGame()
