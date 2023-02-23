const container = document.querySelector(".container")
const input = document.querySelector(".form__input")
const addTaskBtn = document.querySelector(".form__submit")
const executionTasks = document.querySelector(".execution-tasks")
const executionTasksList = document.querySelector(".execution-tasks__list")
const completedTasksList = document.querySelector(".completed-tasks__list")

const list = []

const createTaskElement = (taskObj) => {
	const { id, text } = taskObj
	const taskElement = document.createElement("li")
	taskElement.classList.add("task")
	taskElement.setAttribute("id", id)
	taskElement.innerHTML = `
		<div class="task-text__div">
			<h3 class='task__text'>${text}</h3>
		</div>
		<button class='task__done'>Done</button>
        <button class='task__delete'>Delete</button>
    `
	executionTasksList.appendChild(taskElement)
}

const createCompletedTaskElement = (taskObj) => {
	const { id, text } = taskObj
	const completedtaskElement = document.createElement("li")
	completedtaskElement.classList.add("completed-task")
	completedtaskElement.setAttribute("id", id)
	completedtaskElement.innerHTML = `
		<div class="task-text__div">
			<h3 class='task__text'>${text}</h3>
		</div>
        <button class='task__delete'>Delete</button>
    `
	completedTasksList.appendChild(completedtaskElement)
}

const createTodoList = (e) => {
	e.preventDefault()

	const tasksText = input.value

	const createListOfTasks = () => {
		list.push({
			id: `task-${utils.generateRandomId()}`,
			text: tasksText,
			status: "not done",
		})

		return list
	}

	const listOfTasks = createListOfTasks()

	const addTasksToExecutionTasks = () => {
		const executionTasksListItems = Array.from(
			document.getElementsByClassName("task")
		)
		if (executionTasksListItems.length !== 0) {
			executionTasksListItems.forEach((item) => item.remove())
		}
		listOfTasks.forEach((task) => {
			if (task.status === "not done") {
				createTaskElement(task)
			}
		})
	}

	const drawExecutionTasksList = addTasksToExecutionTasks()

	input.value = ""

	const deleteTaskBtns = Array.from(
		document.getElementsByClassName("task__delete")
	)

	const deleteCheckedTask = (e) => {}

	const addEventListenerToDeleteTaskBtns = () => {
		deleteTaskBtns.forEach((btn) =>
			btn.addEventListener("click", deleteCheckedTask)
		)
	}

	addEventListenerToDeleteTaskBtns()

	const changeTaskStatusBtns = Array.from(
		document.getElementsByClassName("task__done")
	)

	const addTasksToCompletedTasks = (e) => {
		const completedTasksListItems = Array.from(
			document.getElementsByClassName("completed-task")
		)
		if (completedTasksListItems.length !== 0) {
			completedTasksListItems.forEach((item) => item.remove())
		}
		const listOfCompletedTasks = listOfTasks.filter((task) => {
			if (task.status === "done") {
				return task
			}
		})
		listOfCompletedTasks.forEach((task) => {
			createCompletedTaskElement(task)
		})
	}

	const changeTaskListStatus = (e) => {
		const changingTaskId = e.target.parentElement.id
		listOfTasks.forEach((task) => {
			if (task.id === changingTaskId) {
				task.status = "done"
			}
		})

		const drawCompletedTasks = addTasksToCompletedTasks(e)
	}

	const addEventListenerToChangeTaskStatusBtns = () => {
		changeTaskStatusBtns.forEach((btn) =>
			btn.addEventListener("click", changeTaskListStatus)
		)
	}

	addEventListenerToChangeTaskStatusBtns()
}

addTaskBtn.addEventListener("click", createTodoList)
