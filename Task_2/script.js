const form = document.querySelector(".form")
const formBtn = document.querySelector(".form-btn")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")

const addSearchInput = () => {
	form.innerHTML = `
        <input type="text" class="form-input" />
        <button class="input-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    `
}

formBtn.addEventListener("click", () => {
	formBtn.remove()
	addSearchInput()
})

const obj = [
	"url('/images/furniture1.jpg')",
	"url('/images/furniture2.jpg')",
	"url('/images/furniture3.jpg')",
]

// moveLeft.addEventListener("click", () => {
// 	if (
// 		document.querySelector(".scrollable__title").innerText === "Best Furnitures"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[2]
// 		document.querySelector(".scrollable__title").innerText =
// 			"Best Of The Best Furniture"
// 	} else if (
// 		document.querySelector(".scrollable__title").innerText ===
// 		"Best Of The Best Furniture"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[1]
// 		document.querySelector(".scrollable__title").innerText = "Furniture"
// 	} else if (
// 		document.querySelector(".scrollable__title").innerText === "Furniture"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[0]
// 		document.querySelector(".scrollable__title").innerText = "Best Furnitures"
// 	}
// })

// moveRight.addEventListener("click", () => {
// 	console.log(document.querySelector(".scrollable__title").innerText)
// 	if (
// 		document.querySelector(".scrollable__title").innerText === "Best Furnitures"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[1]
// 		document.querySelector(".scrollable__title").innerText = "Furniture"
// 	} else if (
// 		document.querySelector(".scrollable__title").innerText === "Furniture"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[2]
// 		document.querySelector(".scrollable__title").innerText =
// 			"Best Of The Best Furniture"
// 	} else if (
// 		document.querySelector(".scrollable__title").innerText ===
// 		"Best Of The Best Furniture"
// 	) {
// 		document.querySelector(".scrollable").style.backgroundImage = obj[0]
// 		document.querySelector(".scrollable__title").innerText = "Best Furnitures"
// 	}
// })

const scrollableImages = document.querySelectorAll(".scrollable__image")

scrollableImages.forEach((image, index) => {
	image.style.transform = `translateX(${index * 100}%)`
})

let currentSlide = 0
let maxSlide = scrollableImages.length - 1

previous.addEventListener("click", () => {
	if (currentSlide === 0) {
		currentSlide = maxSlide
	} else {
		currentSlide -= 1
	}

	scrollableImages.forEach(
		(image, index) =>
			(image.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
	)
})

next.addEventListener("click", () => {
	if (currentSlide === maxSlide) {
		currentSlide = 0
	} else {
		currentSlide++
	}

	scrollableImages.forEach(
		(image, index) =>
			(image.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
	)
})
