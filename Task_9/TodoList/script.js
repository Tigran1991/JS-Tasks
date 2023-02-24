const createTodoList = () => {
	const formInput = document.querySelector(".form__input")
	const formSubmitBtn = document.querySelector(".form__submit")
	const executionTasksList = document.querySelector(".execution-tasks__list")
	const completedTasksList = document.querySelector(".completed-tasks__list")

	const initialListOfTasks = new Array(0)
	const listOfCompletedTasks = new Array(0)

	const addTaskToTodoList = (e) => {
		e.preventDefault()

		const createListOfTasks = () => {
			initialListOfTasks.push({
				id: `${utils.generateRandomId()}`,
				taskText: formInput.value,
				status: "not done",
			})

			return initialListOfTasks
		}

		const listOfTasks = createListOfTasks()

		const deleteCurrentCompletedTasksList = () => {
			const completedTasksListElements = Array.from(
				document.getElementsByClassName("completed-task")
			)
			if (completedTasksListElements.length !== 0) {
				completedTasksListElements.forEach((element) => element.remove())
			}
		}

		const deleteCurrentExecutionTasksList = () => {
			const executionTasksListElements = Array.from(
				document.getElementsByClassName("task")
			)
			if (executionTasksListElements.length !== 0) {
				executionTasksListElements.forEach((element) => element.remove())
			}
		}

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

		const createExecutionTaskElement = (taskObj) => {
			const { id, taskText } = taskObj
			const taskElement = document.createElement("li")
			taskElement.classList.add("task")
			taskElement.setAttribute("id", id)
			taskElement.innerHTML = `
				<div class="task-text__div">
					<h3 class='task__text'>${taskText}</h3>
				</div>
				<button class='task__done'>Done</button>
				<button class='task__delete'>Delete</button>
			`
			executionTasksList.appendChild(taskElement)
		}

		const createCompletedTaskElement = (taskObj) => {
			const { id, taskText } = taskObj
			const completedtaskElement = document.createElement("li")
			completedtaskElement.classList.add("completed-task")
			completedtaskElement.setAttribute("id", id)
			completedtaskElement.innerHTML = `
				<div class="task-text__div">
					<h3 class='task__text'>${taskText}</h3>
				</div>
				<button class='task__delete'>Delete</button>
			`
			completedTasksList.appendChild(completedtaskElement)
		}

		const createCompletedTasksListElements = (list) => {
			list.forEach((element) => {
				createCompletedTaskElement(element)
			})
		}

		const createExecutionTasksListElements = (list) => {
			list.forEach((element) => {
				createExecutionTaskElement(element)
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

		const drawCompletedTasksList = (list) => {
			deleteCurrentCompletedTasksList()
			createCompletedTasksListElements(list)
		}

		const drawExecutionTasksList = (list) => {
			deleteCurrentExecutionTasksList()
			createExecutionTasksListElements(list)
			addEvenetListeneresToButtons()
		}

		drawExecutionTasksList(initialListOfTasks)

		formInput.value = ""
	}

	formSubmitBtn.addEventListener("click", addTaskToTodoList)
}

createTodoList()
