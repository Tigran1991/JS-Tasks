const createTodoList = () => {
	const formInput = document.querySelector(".form__input")
	const formSubmitBtn = document.querySelector(".form__submit")
	const executionTasks = document.querySelector(".execution-tasks")
	const completedTasks = document.querySelector(".completed-tasks")

	const initialListOfTasks = new Array(0)
	const listOfCompletedTasks = new Array(0)

	const addEmptyDescriptionForExecutionList = () => {
		const empty = document.createElement("h4")
		empty.setAttribute("class", "empty execution-tasks__empty")
		empty.innerText = "Execution List is empty"
		executionTasks.appendChild(empty)
	}

	const addEmptyDescriptionForCompletedList = () => {
		const empty = document.createElement("h4")
		empty.setAttribute("class", "empty completed-tasks__empty")
		empty.innerText = "Completed List is empty"
		completedTasks.appendChild(empty)
	}

	const addTaskToTodoList = (e) => {
		e.preventDefault()

		const createListOfTasks = () => {
			initialListOfTasks.push({
				id: `${utils.generateRandomId()}`,
				taskText: formInput.value,
			})

			return initialListOfTasks
		}

		const listOfTasks = createListOfTasks()

		const updateCompletedtasksList = (e) => {
			listOfTasks.forEach((task) => {
				if (task.id === e.target.parentNode.id) {
					listOfCompletedTasks.push(task)
				}
			})

			deleteSelectedTask(e)
			drawCompletedTasksList(listOfCompletedTasks)
		}

		const deleteSelectedTask = (e) => {
			const index = listOfTasks.findIndex(
				(task) => task.id === e.target.parentNode.id
			)
			listOfTasks.splice(index, 1)

			drawExecutionTasksList(listOfTasks)
			drawCompletedTasksList(listOfCompletedTasks)
		}

		const deleteSelectedTaskFromCompletedList = (e) => {
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

		const addEvenetListeneresToButtons = () => {
			const doneButtons = Array.from(
				document.getElementsByClassName("task__done")
			)

			const deleteButtons = Array.from(
				document.getElementsByClassName("task__delete")
			)

			doneButtons.forEach((task) => {
				task.addEventListener("click", updateCompletedtasksList)
			})

			deleteButtons.forEach((task) => {
				task.addEventListener("click", deleteSelectedTask)
			})
		}

		const addEventListenerToDeleteButton = () => {
			const deleteButtons = Array.from(
				document.getElementsByClassName("task__delete")
			)

			deleteButtons.forEach((task) => {
				task.addEventListener("click", deleteSelectedTaskFromCompletedList)
			})
		}

		const drawCompletedTasksList = (list) => {
			if (
				document.querySelector(".completed-tasks__empty") !== null &&
				list.length > 0
			) {
				document.querySelector(".completed-tasks__empty").remove()
			} else if (
				document.querySelector(".completed-tasks__empty") === null &&
				list.length === 0
			) {
				addEmptyDescriptionForCompletedList()
			}
			utils.deleteCurrentCompletedTasksList()
			createCompletedTasksListElements(list)
			addEventListenerToDeleteButton()
		}

		const drawExecutionTasksList = (list) => {
			if (
				document.querySelector(".execution-tasks__empty") !== null &&
				list.length > 0
			) {
				document.querySelector(".execution-tasks__empty").remove()
			} else if (
				document.querySelector(".execution-tasks__empty") === null &&
				list.length === 0
			) {
				addEmptyDescriptionForExecutionList()
			}
			utils.deleteCurrentExecutionTasksList()
			createExecutionTasksListElements(list)
			addEvenetListeneresToButtons()
		}

		drawExecutionTasksList(initialListOfTasks)

		formInput.value = ""
	}

	formSubmitBtn.addEventListener("click", addTaskToTodoList)
}

createTodoList()
