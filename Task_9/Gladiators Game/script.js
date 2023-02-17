const makeGame = () => {
	const container = document.querySelector(".container")
	const form = document.querySelector("form")
	const input = document.querySelector("input")

	const playGame = (e) => {
		e.preventDefault()
		const numberOfGladiators = Number(input.value)
		const gladiators = []

		const getRandomNumberInRange = (min, max) =>
			Math.floor(Math.random() * (max - min)) + min

		const createGladiator = (nameIndex) => {
			return {
				name: `gladiator${nameIndex}`,
				health: getRandomNumberInRange(80, 150),
				power: getRandomNumberInRange(5, 15),
			}
		}

		const createGladiatorsList = () => {
			for (let i = 0; i < numberOfGladiators; i++) {
				const currentGladiator = createGladiator(i)
				gladiators.push(currentGladiator)
			}
			return gladiators
		}

		const gladiatorsList = createGladiatorsList()

		const createGladiatorsField = () => {
			const gladiatorsField = document.createElement("div")
			gladiatorsField.setAttribute("class", "gladiators_field")
			container.appendChild(gladiatorsField)
			return gladiatorsField
		}

		const createCheckGladiatorsBtn = () => {
			const btn = document.createElement("button")
			btn.setAttribute("class", "check_gladiators")
			btn.innerText = "Check Gladiators"
			container.appendChild(btn)
			return btn
		}

		const gladiatorsField = createGladiatorsField()
		const checkGladiatorsBtn = createCheckGladiatorsBtn()

		const drawGladiatorsInGladiatorsField = (field, list) => {
			const createCurrentGladiator = (gladiatorsData) => {
				const { name, health, power } = gladiatorsData
				const currentGladiator = document.createElement("div")
				currentGladiator.setAttribute("class", "current_gladiator")

				const createGladiatorsInfo = (nodeElement, text) => {
					const info = document.createElement(nodeElement)
					info.setAttribute("class", `${info}`)
					info.innerText = text
					currentGladiator.appendChild(info)
					return info
				}

				const gladiatorsName = createGladiatorsInfo("h3", `name - ${name}`)
				const gladiatorHelath = createGladiatorsInfo("h4", `health - ${health}`)
				const gladiatorPower = createGladiatorsInfo("h4", `power - ${power}`)

				return currentGladiator
			}

			list.forEach((gladiator) => {
				const gladiatorCharacter = createCurrentGladiator(gladiator)
				field.appendChild(gladiatorCharacter)
			})
		}

		const displayGladiatorsOnScreen = drawGladiatorsInGladiatorsField(
			gladiatorsField,
			gladiatorsList
		)

		const createArena = () => {
			const arena = document.createElement("div")
			arena.setAttribute("class", "arena")
			container.appendChild(arena)
			return arena
		}

		const checkGladiators = () => {
			const checkRandomGladiatorIndex = () => {
				const checkedGladiatorsIndexes = []
				for (let i = 0; i < 2; i++) {
					const randomIndex = getRandomNumberInRange(0, gladiatorsList.length)
					checkedGladiatorsIndexes.push(randomIndex)
				}
				return checkedGladiatorsIndexes
			}

			const checkRandomGladiators = () => {
				const gladiatorsIndexes = checkRandomGladiatorIndex()

				const checkedGladiators = gladiatorsIndexes.map((index) => {
					return gladiatorsList[index]
				})

				return checkedGladiators
			}

			const checkedGladiatorsList = checkRandomGladiators()

			const gladiatorsArena = createArena()

			const drawCheckedGladiatorsInArena = () => {
				return drawGladiatorsInGladiatorsField(
					gladiatorsArena,
					checkedGladiatorsList
				)
			}

			return drawCheckedGladiatorsInArena()
		}

		checkGladiatorsBtn.addEventListener("click", checkGladiators)
	}

	form.addEventListener("submit", playGame)
}

makeGame()
