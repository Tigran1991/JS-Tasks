const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const sliders = document.querySelectorAll(".slider")
const scrollableImages = document.querySelectorAll(".scrollable__image")
const dots = document.querySelectorAll(".dot")

sliders.forEach((slider, index) => {
	slider.style.transform = `translateX(${index * 100}%)`
})

let currentSlider = 0
let maxSlide = scrollableImages.length - 1

const updateSliderImages = () => {
	sliders.forEach(
		(slider, index) =>
			(slider.style.transform = `translateX(${100 * (index - currentSlider)}%)`)
	)
}

const updateSliderDots = () => {
	dots.forEach((dot, index) => {
		if (currentSlider === index) {
			dot.style.backgroundColor = "#333"
		} else {
			dot.style.backgroundColor = "#fff"
		}
	})
}

const updateSlider = () => {
	updateSliderImages()
	updateSliderDots()
}

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentSlider = index
		updateSlider()
	})

	if (index === 0) {
		dot.style.backgroundColor = "#333"
	} else {
		dot.style.backgroundColor = "#fff"
	}
})

previous.addEventListener("click", () => {
	if (currentSlider === 0) {
		currentSlider = maxSlide
	} else {
		currentSlider -= 1
	}

	updateSlider()
})

next.addEventListener("click", () => {
	if (currentSlider === maxSlide) {
		currentSlider = 0
	} else {
		currentSlider++
	}

	updateSlider()
})
