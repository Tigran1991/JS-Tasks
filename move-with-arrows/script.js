const container = document.querySelector(".container")
const directionTop = document.querySelector(".container__direction-top")
const directionBottom = document.querySelector(".container__direction-bottom")
const element = document.querySelector(".container__element")
const rect = element.getBoundingClientRect()

const keysdown = {}

const moveElement = (e) => {
	keysdown[e.which] = true
	if (keysdown["38"] && keysdown["37"]) {
		rect.x -= 1
		rect.y -= 1
	} else if (keysdown["38"] && keysdown["39"]) {
		rect.x += 1
		rect.y -= 1
	} else if (keysdown["40"] && keysdown["37"]) {
		rect.x -= 1
		rect.y += 1
	} else if (keysdown["40"] && keysdown["39"]) {
		rect.x += 1
		rect.y += 1
	} else if (keysdown["39"]) {
		rect.x += 1
	} else if (keysdown["40"]) {
		rect.y += 1
	} else if (keysdown["37"]) {
		rect.x -= 1
	} else if (keysdown["38"]) {
		rect.y -= 1
	}
	element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
}

window.addEventListener("keydown", moveElement, false)

const setKeyUp = (e) => (keysdown[e.which] = false)

window.addEventListener("keyup", setKeyUp, false)
