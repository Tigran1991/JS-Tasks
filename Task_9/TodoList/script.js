const initialListOfTasks = new Array(0)
const listOfCompletedTasks = new Array(0)

const addTaskToTodoList = (input) => {
	const createListOfTasks = () => {
		initialListOfTasks.push({
			id: `${utils.generateRandomId()}`,
			taskText: input.value,
		})

		return initialListOfTasks
	}

	const listOfTasks = createListOfTasks()

	const updateCompletedTasksListAfterDone = (e) => {
		listOfTasks.forEach((task) => {
			if (task.id === e.target.parentNode.id) listOfCompletedTasks.push(task)
		})

		updateExecutionTasksList(e)
		drawCompletedTasksList(listOfCompletedTasks)
	}

	const updateExecutionTasksList = (e) => {
		const index = listOfTasks.findIndex(
			(task) => task.id === e.target.parentNode.id
		)
		listOfTasks.splice(index, 1)

		drawExecutionTasksList(listOfTasks)
	}

	const updateCompletedTasksList = (e) => {
		const index = listOfCompletedTasks.findIndex(
			(task) => task.id === e.target.parentNode.id
		)
		listOfCompletedTasks.splice(index, 1)
		drawCompletedTasksList(listOfCompletedTasks)
	}

	const createCompletedTasksListElements = (list) => {
		list.forEach((element) => {
			utils.createCompletedTaskElement(element)
		})
	}

	const createExecutionTasksListElements = (list) => {
		list.forEach((element) => {
			utils.createExecutionTaskElement(element)
		})
	}

	const addEventListenersToExecutionTasksButtons = () => {
		if (document.querySelector(".execution-task") !== null) {
			const doneButtons = Array.from(
				document.getElementsByClassName("task__done")
			)

			const executionTaskDeleteButton = Array.from(
				document.getElementsByClassName("execution-task__delete")
			)

			doneButtons.forEach((task) => {
				task.addEventListener("click", updateCompletedTasksListAfterDone)
			})

			executionTaskDeleteButton.forEach((task) => {
				task.addEventListener("click", updateExecutionTasksList)
			})
		}
	}

	const addEventListenerToCompletedTasksButtons = () => {
		if (document.querySelector(".completed-task") !== null) {
			const deleteButtons = Array.from(
				document.getElementsByClassName("completed-task__delete")
			)

			deleteButtons.forEach((task) => {
				task.addEventListener("click", updateCompletedTasksList)
			})
		}
	}

	const drawCompletedTasksList = (list) => {
		utils.deleteCurrentCompletedTasksList()
		utils.checkForEmpty(list, "completed-tasks__empty")
		createCompletedTasksListElements(list)
		addEventListenerToCompletedTasksButtons()
	}

	const drawExecutionTasksList = (list) => {
		utils.deleteCurrentExecutionTasksList()
		utils.checkForEmpty(list, "execution-tasks__empty")
		createExecutionTasksListElements(list)
		addEventListenersToExecutionTasksButtons()
	}

	drawExecutionTasksList(initialListOfTasks)

	input.value = ""
}

const createInformEmptyInput = () => {
	const emptyInputInform = document.createElement("div")
	emptyInputInform.setAttribute("class", "empty-input")
	emptyInputInform.innerHTML = `
		<h4>Please enter task to Todo List !</h4>
	`
	document.querySelector(".form-container").appendChild(emptyInputInform)
}

const makeTodoList = () => {
	const formInput = document.querySelector(".form__input")
	const formSubmitBtn = document.querySelector(".form__submit")

	const createTodoList = (e) => {
		e.preventDefault()
		if (formInput.value === "") createInformEmptyInput()
		else addTaskToTodoList(formInput)
	}

	formInput.addEventListener("focus", (e) => utils.hideEmptyInputInform(e))

	formInput.addEventListener("blur", (e) => utils.setBlurBackgroundToInput(e))

	window.addEventListener("click", (e) =>
		utils.hideEmptyInputInformOnOutsideClick(e)
	)

	formSubmitBtn.addEventListener("click", createTodoList)
}

makeTodoList()
