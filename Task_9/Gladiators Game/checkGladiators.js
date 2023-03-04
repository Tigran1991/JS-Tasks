const X = 0,
	Y = 1
const CHECKED_GLADIATORS = 2

export default function checkGladiators(container, gladiators) {
	if (utils.isElementNotExist(".arena_field")) {
		utils.changeContainerBackground(
			container,
			"url('/image/wallpaper3.jpg') center / cover no-repeat"
		)
		const allGladiators = gladiators.filter((element) => element.health > 0)

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
			const gladiatorsIndexes = generateRandomIndexes(allGladiators.length)
			console.log(gladiatorsIndexes)
			const checkedGladiators = gladiatorsIndexes.map((i) => allGladiators[i])
			checkedGladiators.forEach((gladiator, i) => {
				if (i === 0) gladiator.status = "hitter"
				else if (i === 1) gladiator.status = "kiker"
			})
			return checkedGladiators
		}

		const fightingGladiators = checkRandomGladiators()

		const drawCheckedGladiatorsInArena = () => {
			fightingGladiators.forEach((gladiator) => {
				const gladiatorCharacter = utils.createCurrentGladiator(
					gladiator,
					"current_gladiator"
				)
				arena.appendChild(gladiatorCharacter)
			})
		}

		drawCheckedGladiatorsInArena()

		utils.hideCheckedGladiatorsFromGladiatorsField(gladiatorsIndexes)

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

		const deleteGladiatorsField = () => {
			if (document.getElementsByClassName("gladiator") !== null) {
				const gladiatorElements = Array.from(
					document.getElementsByClassName("gladiator")
				)
				gladiatorElements.forEach((element) => {
					return element.remove()
				})
			}
		}

		const updateGladiatorsField = () => {
			deleteGladiatorsField()
			const updatedList = updateGladiatorsListData()
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
		}

		const updateGladiators = (gladiators, index) => {
			const currentGladiators = Array.from(
				document.getElementsByClassName("current_gladiator")
			)
			currentGladiators.forEach((currentGladiator) => currentGladiator.remove())
			gladiators.forEach((gladiator, i) => {
				const gladiatorCharacter = utils.createCurrentGladiator(
					gladiator,
					"current_gladiator"
				)
				arena.appendChild(gladiatorCharacter)
				if (gladiator.status === "kiker") {
					gladiator.status = "hitter"
				} else {
					gladiator.status = "kiker"
				}
			})
		}

		const hitTheGladiator = () => {
			const hittersIndex = fightingGladiators.findIndex(
				(gladiator) => gladiator.status === "hitter"
			)
			const kikersIndex = fightingGladiators.findIndex(
				(gladiator) => gladiator.status === "kiker"
			)
			const hitter = fightingGladiators[hittersIndex]
			const kiker = fightingGladiators[kikersIndex]
			if (kiker.health > 0) {
				kiker.health -= hitter.power
				updateGladiators(fightingGladiators, kikersIndex)
			}
			if (kiker.health <= 0 || hittersIndex === 1) updateGladiatorsField()
		}

		hitBtn.addEventListener("click", hitTheGladiator)
	}
}
