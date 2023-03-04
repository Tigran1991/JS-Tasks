const todo = () => {
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
				if (item === "red" && i < e.target.id) {
					for (let j = i; j <= e.target.id; j++) {
						containerItemBgColor[j] = "red"
					}
				}
				if (item === "red" && i > e.target.id) {
					for (let j = e.target.id; j <= i; j++) {
						containerItemBgColor[j] = "red"
					}
				}
			})
			containerItems.forEach(
				(item, i) => (item.style.backgroundColor = containerItemBgColor[i])
			)

			for (let i = 0; i < containerItemBgColor.length; i++) {
				containerItemBgColor[i] = "green"
			}
		}
		if (counterOfClicks > 2) {
			counterOfClicks = 0
			console.log(containerItemBgColor)
			clickOnItem(e, todo)
		}
	}

	containerItems.forEach((item) => {
		item.style.backgroundColor = "green"
		item.addEventListener("click", clickOnItem)
	})

	const containerItemBgColor = containerItems.map(
		(item) => item.style.backgroundColor
	)
}

todo()
