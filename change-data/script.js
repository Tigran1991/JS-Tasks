const objectOri = {
	1: {
		group: "Clothes",
		brand: {
			0: {
				brand_id: "12",
				brand_name: "Adidas",
			},
			1: {
				brand_id: "15",
				brand_name: "Zara",
			},
		},
	},
	2: {
		group: "Cars",
		brand: {
			0: {
				brand_id: "43",
				brand_name: "Ferrari",
			},
			1: {
				brand_id: "51",
				brand_name: "Bmw",
			},
		},
	},
}

// const changeData = (obj) => {
// 	let n = 0
// 	const changedObj = {}
// 	const objValues = Object.values(obj)
// 	objValues.forEach((element) => {
// 		const brandObj = element.brand
// 		const group = element.group
// 		for (const key in brandObj) {
// 			if (Object.hasOwnProperty.call(brandObj, key)) {
// 				const element = brandObj[key]
// 				element.group = group
// 				changedObj[n] = element
// 				n++
// 			}
// 		}
// 	})
// 	return changedObj
// }

const changeData = (obj) => {
	return Object.values(obj)
}

console.log(changeData(objectOri))
