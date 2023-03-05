const container = document.querySelector(".container")
const element = document.querySelector(".container__element")

const halfOfElementWidth = element.offsetWidth / 2
const halfOfElementHeight = element.offsetHeight / 2

const changeElementPositionOnClick = (e) => {
	const newPositionX = e.clientX - halfOfElementWidth
	const newPositionY = e.clientY - halfOfElementHeight
	element.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`
}

window.addEventListener("click", changeElementPositionOnClick)
