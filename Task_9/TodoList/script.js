const createTodoList = () => {
	const formInput = document.querySelector(".form__input")
	const formSubmitBtn = document.querySelector(".form__submit")
	const executionTasksList = document.querySelector(".execution-tasks__list")

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

	const initialListOfTasks = new Array(0)

	const addTaskToTodoList = (e) => {
		e.preventDefault()

		const createListOfTasks = (list) => {
			list.push({
				id: `${utils.generateRandomId()}`,
				taskText: formInput.value,
				isDone: "not done",
				isDeleted: "not deleted",
			})

			return list
		}

		const listOfTasks = createListOfTasks(initialListOfTasks)
		console.log(listOfTasks)

		const deleteTask = (e) => {
			const updatedListOfTasks = listOfTasks.filter(
				(task) => task.id !== e.target.parentNode.id
			)

			drawExecutionTasksList(updatedListOfTasks)
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

			document
				.querySelector(".task__delete")
				.addEventListener("click", deleteTask)
		}

		const deleteExecutionTasksList = () => {
			const executionTasksListElements = Array.from(
				document.getElementsByClassName("task")
			)
			console.log(executionTasksListElements)
			if (executionTasksListElements.length !== 0) {
				executionTasksListElements.forEach((element) => element.remove())
			}
		}

		const createExecutionTasksListElements = (list) => {
			list.forEach((element) => {
				if (element.isDone !== "done" && element.isDone !== "deleted") {
					createExecutionTaskElement(element)
				}
			})
		}

		const drawExecutionTasksList = (list) => {
			deleteExecutionTasksList()
			createExecutionTasksListElements(list)
		}

		drawExecutionTasksList(listOfTasks)

		formInput.value = ""
	}

	formSubmitBtn.addEventListener("click", addTaskToTodoList)
}

createTodoList()
