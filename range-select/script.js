const containerItemsObj = document.getElementsByClassName("container__item")
const containerItems = Array.from(containerItemsObj)

let counterOfClicks = 0

const setColorsToItems = () => {
	containerItems.forEach(
		(item, i) => (item.style.backgroundColor = containerItemBgColor[i])
	)
}

const setColorsToRight = (item1, item2) => {
	for (let j = item1; j <= item2; j++) {
		containerItemBgColor[j] = "red"
	}
}

const setColorsToLeft = (item1, item2) => {
	for (let j = item2; j <= item1; j++) {
		containerItemBgColor[j] = "red"
	}
}

const resetColors = () => {
	for (let i = 0; i < containerItemBgColor.length; i++) {
		containerItemBgColor[i] = "green"
	}
}

const clickOnItem = (e) => {
	counterOfClicks++
	if (counterOfClicks === 1) {
		containerItemBgColor[e.target.id] = "red"
		setColorsToItems()
	}
	if (counterOfClicks === 2) {
		containerItemBgColor.forEach((item, i) => {
			const firstItem = i
			const secondItem = e.target.id
			if (item === "red" && firstItem < secondItem) {
				setColorsToRight(firstItem, secondItem)
			}
			if (item === "red" && firstItem > secondItem) {
				setColorsToLeft(firstItem, secondItem)
			}
		})
		setColorsToItems()
		resetColors()
	}
	if (counterOfClicks > 2) {
		counterOfClicks = 0
		clickOnItem(e)
	}
}

containerItems.forEach((item) => {
	item.style.backgroundColor = "green"
	item.addEventListener("click", clickOnItem)
})

const containerItemBgColor = containerItems.map(
	(item) => item.style.backgroundColor
)
