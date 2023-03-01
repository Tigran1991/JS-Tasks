import checkGladiators from "./checkGladiators.js"

const HEALTH_MIN = 10
const HEALTH_MAX = 20
const POWER_MIN = 5
const POWER_MAX = 15

export default function playGame(containerElement, inputElement) {
	utils.changeContainerBackground(
		containerElement,
		"url('/image/wallpaper2.png') center / cover no-repeat"
	)
	const numberOfGladiators = Number(inputElement.value)
	const initialGladiators = new Array(numberOfGladiators).fill({})

	const createGladiator = (nameIndex) => {
		return {
			name: `gladiator_${nameIndex}`,
			health: utils.getRandomNumberInRange(HEALTH_MIN, HEALTH_MAX),
			power: utils.getRandomNumberInRange(POWER_MIN, POWER_MAX),
		}
	}

	const createGladiatorsData = () => {
		const gladiators = initialGladiators.map((gladiator, index) => {
			return createGladiator(index)
		})

		return gladiators
	}

	const gladiators = createGladiatorsData()

	const gladiatorsField = utils.createGladiatorsField(containerElement)

	const drawGladiatorsInGladiatorsField = () => {
		gladiators.forEach((gladiator) => {
			const gladiatorCharacter = utils.createCurrentGladiator(
				gladiator,
				"gladiator"
			)
			gladiatorsField.appendChild(gladiatorCharacter)
		})
	}

	drawGladiatorsInGladiatorsField()

	document.querySelector(".form").remove()

	const checkGladiatorsBtn = utils.createCheckGladiatorsBtn(containerElement)

	checkGladiatorsBtn.addEventListener("click", () =>
		checkGladiators(containerElement, gladiators)
	)
}
