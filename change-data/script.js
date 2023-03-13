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

for (const key in objectOri) {
	if (Object.hasOwnProperty.call(objectOri, key)) {
		const element = objectOri[key]
		console.log(element)
	}
}
