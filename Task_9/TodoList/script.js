const createTodoList = () => {
	const formInput = document.querySelector(".form__input")
	const formSubmitBtn = document.querySelector(".form__submit")

	const initialListOfTasks = new Array(0)
	const listOfCompletedTasks = new Array(0)

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
			debugger
			const index = listOfTasks.findIndex(
				(task) => task.id === e.target.parentNode.id
			)
			listOfTasks.splice(index, 1)

			drawExecutionTasksList(listOfTasks)
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
			utils.checkForEmpty(list, "completed-tasks__empty")
			utils.deleteCurrentCompletedTasksList()
			createCompletedTasksListElements(list)
			addEventListenerToDeleteButton()
		}

		const drawExecutionTasksList = (list) => {
			utils.checkForEmpty(list, "execution-tasks__empty")
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
