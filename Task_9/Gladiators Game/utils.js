const utils = {
	changeContainerBackground: (container, props) => {
		container.style.background = props
	},
	getRandomNumberInRange: (min, max) =>
		Math.floor(Math.random() * (max - min)) + min,

	isElementNotExist: (elementClassName) =>
		document.querySelector(elementClassName) === null,

	createGladiatorsField: (container) => {
		if (document.querySelector(".gladiators_field") === null) {
			const gladiatorsField = document.createElement("div")
			gladiatorsField.setAttribute("class", "gladiators_field")
			container.appendChild(gladiatorsField)
			return gladiatorsField
		}
	},
	createCurrentGladiator: (gladiator, divClassName) => {
		const { name, health, power } = gladiator
		const currentGladiator = document.createElement("div")
		currentGladiator.setAttribute("class", `${divClassName}`)
		const gladiatorName = utils.createGladiatorElement(
			"h3",
			"gladiators_name",
			`name - ${name}`
		)
		currentGladiator.appendChild(gladiatorName)
		const gladiatorHealth = utils.createGladiatorElement(
			"h4",
			"gladiators_health",
			`health - ${health}`
		)
		currentGladiator.appendChild(gladiatorHealth)
		const gladiatorPower = utils.createGladiatorElement(
			"h4",
			"gladiators_power",
			`power - ${power}`
		)
		currentGladiator.appendChild(gladiatorPower)
		return currentGladiator
	},
	createGladiatorElement: (nodeElement, className, text) => {
		const gladiatorElement = document.createElement(nodeElement)
		gladiatorElement.setAttribute("class", className)
		gladiatorElement.innerText = text
		return gladiatorElement
	},
	createCheckGladiatorsBtn: (container) => {
		if (document.querySelector(".check_gladiators") === null) {
			const btn = document.createElement("button")
			btn.setAttribute("class", "check_gladiators")
			btn.innerText = "Check Gladiators"
			container.appendChild(btn)
			return btn
		}
	},
	createArenaField: (container) => {
		const field = document.createElement("div")
		field.setAttribute("class", "arena_field")
		container.appendChild(field)
		return field
	},
	createArena: (element) => {
		const arena = document.createElement("div")
		arena.setAttribute("class", "arena")
		element.appendChild(arena)
		return arena
	},
	addButtonToArenaField: (element) => {
		const btn = document.createElement("button")
		btn.setAttribute("class", "strike_btn")
		btn.innerText = "Strike"
		element.appendChild(btn)
		return btn
	},

	hideCheckedGladiatorsFromGladiatorsField: (indexes) => {
		const currentGladiators = Array.from(
			document.getElementsByClassName("gladiator")
		)
		currentGladiators.forEach((gladiator, i) => {
			if (i === indexes[0] || i === indexes[1]) {
				gladiator.style.visibility = "hidden"
			}
		})
	},
}
