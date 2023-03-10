const container = document.querySelector(".container")
const directionTop = document.querySelector(".container__direction-top")
const directionBottom = document.querySelector(".container__direction-bottom")
const element = document.querySelector(".container__element")
const rect = element.getBoundingClientRect()

const directionByIndex = {
	37: "left",
	38: "up",
	39: "right",
	40: "bottom",
}

const left = "37"
const up = "38"
const right = "39"
const bottom = "40"
const keysdown = {}
const step = 1

const determineDirections = (directions) => {
	for (let key in keysdown) {
		if (keysdown[key] === true) {
			directions.push(key)
		}
	}
}

const moveElement = (e) => {
	const elementDirections = []
	keysdown[e.which] = true
	if (keysdown[up] && keysdown[left]) {
		rect.x -= 1
		rect.y -= 1
	} else if (keysdown[up] && keysdown[right]) {
		rect.x += 1
		rect.y -= 1
	} else if (keysdown[bottom] && keysdown[left]) {
		rect.x -= 1
		rect.y += 1
	} else if (keysdown[bottom] && keysdown[right]) {
		rect.x += 1
		rect.y += 1
	} else if (keysdown[right]) {
		rect.x += 1
	} else if (keysdown[bottom]) {
		rect.y += 1
	} else if (keysdown[left]) {
		rect.x -= 1
	} else if (keysdown[up]) {
		rect.y -= 1
	}
	determineDirections(elementDirections)
	directionTop.innerText = directionByIndex[elementDirections[0]]
	directionBottom.innerText =
		directionByIndex[elementDirections[1]] !== undefined
			? directionByIndex[elementDirections[1]]
			: ""
	element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
}

window.addEventListener("keydown", moveElement, false)

const setKeyUp = (e) => (keysdown[e.which] = false)

window.addEventListener("keyup", setKeyUp, false)
