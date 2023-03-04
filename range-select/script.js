const containerItemsObj = document.getElementsByClassName("container__item")
const containerItems = Array.from(containerItemsObj)

let counterOfClicks = 0

const clickOnItem = (e) => {
	counterOfClicks++
	if (counterOfClicks === 1) {
		containerItemBgColor[e.target.id] = "red"
		containerItems.forEach(
			(item, i) => (item.style.backgroundColor = containerItemBgColor[i])
		)
	}
	if (counterOfClicks === 2) {
		containerItemBgColor.forEach((item, i) => {
			if (item === "red") {
				for (let j = i; j <= e.target.id; j++) {
					containerItemBgColor[j] = "red"
				}
			}
		})
		containerItems.forEach(
			(item, i) => (item.style.backgroundColor = containerItemBgColor[i])
		)
	}
}

containerItems.forEach((item) => {
	item.style.backgroundColor = "green"
	item.addEventListener("click", clickOnItem)
})

console.log(containerItems)

const containerItemBgColor = containerItems.map(
	(item) => item.style.backgroundColor
)

console.log(containerItemBgColor)
