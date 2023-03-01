const X = 0,
	Y = 1
const CHECKED_GLADIATORS = 2

export default function checkGladiators(container, gladiators) {
	if (utils.isElementNotExist(".arena_field")) {
		utils.changeContainerBackground(
			container,
			"url('/image/wallpaper3.jpg') center / cover no-repeat"
		)
		const list = gladiators.filter((element) => element.health > 0)

		const arenaField = utils.createArenaField(container)
		const arena = utils.createArena(arenaField)
		const hitBtn = utils.addButtonToArenaField(arenaField)

		const gladiatorsIndexes = new Array(CHECKED_GLADIATORS).fill(X)

		const generateRandomIndexes = (range) => {
			gladiatorsIndexes[X] = utils.getRandomNumberInRange(X, range)
			gladiatorsIndexes[Y] = utils.getRandomNumberInRange(X, range)
			if (gladiatorsIndexes[X] === gladiatorsIndexes[Y])
				generateRandomIndexes(range)
			return gladiatorsIndexes
		}

		const checkRandomGladiators = () => {
			const gladiatorsIndexes = generateRandomIndexes(list.length)
			const checkedGladiators = gladiatorsIndexes.map((index) => {
				return list[index]
			})
			return checkedGladiators
		}

		const checkedGladiators = checkRandomGladiators()

		const drawCheckedGladiatorsInArena = () => {
			checkedGladiators.forEach((gladiator) => {
				const gladiatorCharacter = utils.createCurrentGladiator(
					gladiator,
					"current_gladiator"
				)
				arena.appendChild(gladiatorCharacter)
			})
		}

		drawCheckedGladiatorsInArena()

		utils.hideCheckedGladiatorsFromGladiatorsField(gladiatorsIndexes)

		const updateGladiators = (index) => {
			checkedGladiators.forEach((gladiator, i) => {
				const currentGladiatorElements = Array.from(
					document.getElementsByClassName("current_gladiator")
				)
				currentGladiatorElements[index].remove()
				const gladiatorCharacter = utils.createCurrentGladiator(
					gladiator,
					"current_gladiator"
				)
				arena.appendChild(gladiatorCharacter)
			})
		}

		const updateGladiatorsInArena = (updatedHealth, gladiatorsIndex) => {
			checkedGladiators[gladiatorsIndex].health = updatedHealth
			updateGladiators(gladiatorsIndex)
		}

		const updateGladiatorsListData = () => {
			const list = gladiators.filter((element) => element.health > 0)
			list.forEach((gladiator) => {
				const gladiatorCharacter = utils.createCurrentGladiator(
					gladiator,
					"gladiator"
				)
				document
					.querySelector(".gladiators_field")
					.appendChild(gladiatorCharacter)
			})
			return list
		}

		const countGladiatorsHealth = (hiter, kiker) => {
			const updatedGladiatorsHealth =
				checkedGladiators[kiker].health - checkedGladiators[hiter].power
			return updatedGladiatorsHealth
		}

		const createWinnerGladiator = () => {
			const winner = document.createElement("div")
			winner.setAttribute("class", "winner")
			container.appendChild(winner)
			return winner
		}

		const showWinnerGladiator = (winner, element) => {
			container.style.background =
				"url('/image/wallpaper4.jpg') center / cover no-repeat"
			const winnerText = document.createElement("h2")
			winnerText.setAttribute("class", "winnerText")
			winnerText.innerText = `${winner.name} is Win !`
			element.appendChild(winnerText)
		}

		const updateGladiatorsField = () => {
			setTimeout(() => {
				if (document.getElementsByClassName("gladiator") !== null) {
					const gladiatorElements = Array.from(
						document.getElementsByClassName("gladiator")
					)
					gladiatorElements.forEach((element) => {
						return element.remove()
					})
				}
				const updatedList = updateGladiatorsListData()
				console.log(document.querySelector(".arena_field"))
				document.querySelector(".arena_field").remove()
				utils.changeContainerBackground(
					container,
					"url('/image/background-wallpaper2.jpg') center / cover no-repeat"
				)
				if (updatedList.length === 1) {
					document.querySelector(".check_gladiators").remove()
					document.querySelector(".gladiators_field").remove()
					const winner = createWinnerGladiator()
					showWinnerGladiator(updatedList[X], winner)
				}
			}, 1000)
		}

		const orderOfAction = [
			[0, 1],
			[1, 0],
		]

		const hitTheGladiator = () => {
			if (orderOfAction.length !== 0 && checkedGladiators[Y].health > 0) {
				const hitersIndex = orderOfAction[0][0]
				const kikersIndex = orderOfAction[0][1]
				const updatedHealth = countGladiatorsHealth(hitersIndex, kikersIndex)
				updateGladiatorsInArena(updatedHealth, kikersIndex)
				if (checkedGladiators[Y].health <= 0) {
					updateGladiatorsField()
				}
				orderOfAction.shift()
			}
			if (orderOfAction.length === 0) {
				updateGladiatorsField()
			}
		}

		hitBtn.addEventListener("click", hitTheGladiator)
	}
}
