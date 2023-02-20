const X = 0,
	Y = 1
const HEALTH_MIN = 80
const HEALTH_MAX = 150
const POWER_MIN = 5
const POWER_MAX = 15
const CHECKED_GLADIATORS = 2

const playGame = (inputElement) => {
	const container = document.querySelector(".container")
	const numberOfGladiators = Number(inputElement.value)
	const gladiatorsInitialList = new Array(numberOfGladiators).fill({})

	const createGladiatorsListData = () => {
		const createGladiatorsData = (nameIndex) => {
			return {
				name: `gladiator_${nameIndex}`,
				health: REUSABLE.getRandomNumberInRange(HEALTH_MIN, HEALTH_MAX),
				power: REUSABLE.getRandomNumberInRange(POWER_MIN, POWER_MAX),
			}
		}

		const gladiatorsList = gladiatorsInitialList.map((gladiator, index) => {
			return createGladiatorsData(index)
		})

		return gladiatorsList
	}

	const gladiatorsListData = createGladiatorsListData()
	console.log(gladiatorsListData)

	const createGladiatorField = () => {
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

	const gladiatorsField = createGladiatorField()
	const checkGladiatorsBtn = createCheckGladiatorsBtn()

	const createCurrentGladiator = (gladiatorsData, divClassName) => {
		const { name, health, power } = gladiatorsData
		const currentGladiator = document.createElement("div")
		currentGladiator.setAttribute("class", `${divClassName}`)

		const setGladiatorsData = (nodeElement, className, text) => {
			const info = document.createElement(nodeElement)
			info.setAttribute("class", className)
			info.innerText = text
			currentGladiator.appendChild(info)
			return info
		}

		const gladiatorsName = setGladiatorsData(
			"h3",
			"gladiators_name",
			`name - ${name}`
		)

		const gladiatorHelath = setGladiatorsData(
			"h4",
			"gladiators_health",
			`health - ${health}`
		)

		const gladiatorPower = setGladiatorsData(
			"h4",
			"gladiators_power",
			`power - ${power}`
		)

		return currentGladiator
	}

	const drawGladiatorsInGladiatorsField = () => {
		gladiatorsListData.forEach((gladiator) => {
			const gladiatorCharacter = createCurrentGladiator(gladiator, "gladiator")
			gladiatorsField.appendChild(gladiatorCharacter)
		})
	}

	const displayGladiatorsOnScreen = drawGladiatorsInGladiatorsField()

	const checkGladiators = () => {
		const createArenaField = () => {
			const field = document.createElement("div")
			field.setAttribute("class", "arena_field")
			container.appendChild(field)
			return field
		}

		const arenaField = createArenaField()

		const createArena = () => {
			const arena = document.createElement("div")
			arena.setAttribute("class", "arena")
			arenaField.appendChild(arena)
			return arena
		}

		const arena = createArena()

		const addButtonToArenaField = (field) => {
			const btn = document.createElement("button")
			btn.setAttribute("class", "strike_btn")
			btn.innerText = "Strike"
			field.appendChild(btn)
			return btn
		}

		const hitBtn = addButtonToArenaField(arenaField)

		const gladiatorsIndexes = new Array(CHECKED_GLADIATORS).fill(X)
		const checkedGladiatorsRange = gladiatorsListData.length

		gladiatorsIndexes[X] = REUSABLE.getRandomNumberInRange(
			X,
			checkedGladiatorsRange
		)

		const checkRandomGladiatorsIndexes = () => {
			gladiatorsIndexes[Y] = REUSABLE.getRandomNumberInRange(
				X,
				checkedGladiatorsRange
			)
			if (gladiatorsIndexes[X] === gladiatorsIndexes[Y]) {
				checkRandomGladiatorsIndexes()
			}
			return gladiatorsIndexes
		}

		const checkRandomGladiators = () => {
			const gladiatorsIndexes = checkRandomGladiatorsIndexes()

			const checkedGladiators = gladiatorsIndexes.map((index, i) => {
				if (i === X) {
					gladiatorsListData[index].borderColor = "red"
				}
				return gladiatorsListData[index]
			})

			return checkedGladiators
		}

		const checkedGladiatorsListData = checkRandomGladiators()

		const drawCheckedGladiatorsInArena = () => {
			checkedGladiatorsListData.forEach((gladiator) => {
				const gladiatorCharacter = createCurrentGladiator(
					gladiator,
					"current_gladiator"
				)
				if (gladiator.borderColor === "red") {
					gladiatorCharacter.style.border = "1px solid red"
				}
				arena.appendChild(gladiatorCharacter)
			})
		}

		const hideCheckedGladiatorsFromGladiatorsField = () => {
			const currentgladiatorsListData =
				document.getElementsByClassName("gladiator")
			Array.from(currentgladiatorsListData).forEach((gladiator, i) => {
				if (i === gladiatorsIndexes[0] || i === gladiatorsIndexes[1]) {
					gladiator.style.visibility = "hidden"
				}
			})
		}

		const drawArena = drawCheckedGladiatorsInArena()

		hideCheckedGladiatorsFromGladiatorsField()

		const orderOfAction = [
			[0, 1],
			[1, 0],
		]

		const updateGladiatorsInArena = (updatedHealth, gladiatorsIndex) => {
			checkedGladiatorsListData[gladiatorsIndex].health = updatedHealth

			const updateGladiators = () => {
				checkedGladiatorsListData.forEach((gladiator, i) => {
					const currentGladiatorElements = Array.from(
						document.getElementsByClassName("current_gladiator")
					)
					currentGladiatorElements[gladiatorsIndex].remove()
					const gladiatorCharacter = createCurrentGladiator(
						gladiator,
						"current_gladiator"
					)
					if (gladiator.borderColor === "red") {
						gladiatorCharacter.style.border = "1px solid red"
					}
					arena.appendChild(gladiatorCharacter)
				})
			}

			updateGladiators()
		}

		const updateGladiatorsListData = () => {
			gladiatorsListData.forEach((gladiator) => {
				if (gladiator.health > 0) {
					const gladiatorCharacter = createCurrentGladiator(
						gladiator,
						"gladiator"
					)
					gladiatorsField.appendChild(gladiatorCharacter)
				}
			})
		}

		const countGladiatorsHealth = (hiter, kiker) => {
			const updatedGladiatorsHealth =
				checkedGladiatorsListData[kiker].health -
				checkedGladiatorsListData[hiter].power
			return updatedGladiatorsHealth
		}

		const hitTheGladiator = () => {
			if (orderOfAction.length !== 0) {
				const hitersIndex = orderOfAction[0][0]
				const kikersIndex = orderOfAction[0][1]
				const updatedHealth = countGladiatorsHealth(hitersIndex, kikersIndex)
				updateGladiatorsInArena(updatedHealth, kikersIndex)
				orderOfAction.shift()
			}
			if (orderOfAction.length === 0) {
				setTimeout(() => {
					if (document.getElementsByClassName("gladiator") !== null) {
						const gladiatorElements = Array.from(
							document.getElementsByClassName("gladiator")
						)
						gladiatorElements.forEach((element) => {
							return element.remove()
						})
					}
					updateGladiatorsListData()
					document.querySelector(".arena_field").remove()
					document.querySelector("body").style.background =
						"url('/image/background-wallpaper2.jpg') center / cover no-repeat"
				}, 1000)
			}
		}

		hitBtn.addEventListener("click", hitTheGladiator)
	}

	checkGladiatorsBtn.addEventListener("click", checkGladiators)
}

const newGame = () => {
	const form = document.querySelector(".form")
	const input = document.querySelector(".input_gladiator")

	const makeGame = (e) => {
		e.preventDefault()
		if (input.value === "") {
			alert("Please enter number of gladiators !")
		} else {
			playGame(input)
		}
	}

	form.addEventListener("submit", makeGame)
}

newGame()
