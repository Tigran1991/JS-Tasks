<div class="product__item1 product">
					<img src="./images/paharan1.jpg" class="furniture" alt="" />
					<h3 class="title">Title</h3>
					<p class="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						ratione odit accusantium modi, eveniet aliquam ducimus tempora ipsa
						commodi voluptatum voluptatibus explicabo fugiat vero ullam velit
						hic nobis praesentium ipsam!
					</p>
					<button class="btn">more</button>
				</div>
				<div class="product__item2 product">
					<img src="./images/furniture5.jpg" class="furniture" alt="" />
					<h3 class="title">Title</h3>
					<p class="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus numquam non harum exercitationem vel consectetur eum
						dignissimos alias adipisci, ullam amet aliquid consequuntur id neque
						consequatur esse. Facere labore ut dolorem mollitia porro nihil
						voluptate. Consequatur ipsam nesciunt neque ipsum, assumenda
						excepturi laborum libero dolorum tempore fugit eligendi! Quas
						commodi, fugit inventore repellendus aperiam saepe ipsa delectus qui
						repellat ad!
					</p>
					<button class="btn">more</button>
				</div>
				<div class="product__item3 product">
					<img src="./images/furniture6.jpg" class="furniture" alt="" />
					<h3 class="title">Title</h3>
					<p class="text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
						deleniti, voluptate dicta iste totam excepturi repellat explicabo
						quam, omnis reiciendis aliquid non autem aut tempora amet odit sint
						nihil voluptates, enim molestiae magnam! Error excepturi doloribus
						mollitia voluptas culpa commodi?
					</p>
					<button class="btn">more</button>
				</div>
				<div class="product__item4 product">
					<img src="./images/furniture7.jpg" class="furniture" alt="" />
					<h3 class="title">Title</h3>
					<p class="text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
						expedita pariatur velit sit quisquam nihil dolores nisi a asperiores
						dolorum!
					</p>
					<button class="btn">more</button>
				</div>

.products {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 40px;
	grid-row-gap: 40px;
	width: 90%;
	height: fit-content;
}

.furniture {
	width: 100%;
	height: 100%;
	grid-area: 1 / 1 / 4 / 2;
}

.title {
	grid-area: 1 / 2 / 2 / 3;
	width: 100%;
	height: 100%;
}

.text {
	grid-area: 2 / 2 / 3 / 3;
	width: 100%;
	height: 100%;
}

.btn {
	grid-area: 3 / 2 / 4 / 3;
	width: 40%;
	height: 100%;
	border: 1px solid #999999;
	border-radius: 20px;
	outline: none;
	cursor: pointer;
}

.product {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 11% 72% 11%;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	height: 400px;
	border: 1px solid #a1a1a1;
	border-radius: 3px;
	padding: 10px;
}

.product__item1 {
	grid-area: 1 / 1 / 2 / 2;
	background: url("./images/atorner/1.jpg") center / cover no-repeat;
}

.product__item2 {
	grid-area: 1 / 2 / 2 / 3;
}

.product__item3 {
	grid-area: 2 / 1 / 3 / 2;
}

.product__item4 {
	grid-area: 2 / 2 / 3 / 3;
}