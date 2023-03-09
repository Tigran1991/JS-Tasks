const container = document.querySelector(".container")
const directionTop = document.querySelector(".container__direction-top")
const directionBottom = document.querySelector(".container__direction-bottom")
const element = document.querySelector(".container__element")
const rect = element.getBoundingClientRect()

const directions = []
const keysdown = {}

window.addEventListener(
	"keydown",
	function (e) {
		console.log(e.which)
		keysdown[e.which] = true
		if (keysdown["38"] === true && keysdown["37"] === true) {
			rect.x -= 1
			rect.y -= 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["38"] === true && keysdown["39"] === true) {
			rect.x += 1
			rect.y -= 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["40"] === true && keysdown["37"] === true) {
			rect.x -= 1
			rect.y += 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["40"] === true && keysdown["39"] === true) {
			rect.x += 1
			rect.y += 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["39"] === true) {
			rect.x += 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["40"] === true) {
			rect.y += 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["37"] === true) {
			rect.x -= 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		} else if (keysdown["38"] === true) {
			rect.y -= 1
			element.style.transform = `translate(${rect.x}px, ${rect.y}px)`
		}
	},
	false
)

window.addEventListener(
	"keyup",
	function (e) {
		keysdown[e.which] = false
	},
	false
)
