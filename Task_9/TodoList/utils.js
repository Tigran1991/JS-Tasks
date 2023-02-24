const executionTasks = document.querySelector(".execution-tasks")
const completedTasks = document.querySelector(".completed-tasks")
const executionTasksList = document.querySelector(".execution-tasks__list")
const completedTasksList = document.querySelector(".completed-tasks__list")

const utils = {
	generateRandomId: () => Math.floor(Math.random() * 10000),

	createExecutionTaskElement: (taskObj) => {
		const { id, taskText } = taskObj
		const taskElement = document.createElement("li")
		taskElement.classList.add("execution-task")
		taskElement.setAttribute("id", id)
		taskElement.innerHTML = `
			<div class="task-text__div">
				<h3 class='task__text'>${taskText}</h3>
			</div>
			<button class='task__done'><i class="fa-regular fa-circle-check"></i></button>
			<button class='task__delete'><i class="fa-regular fa-trash-can"></i></button>
		`
		executionTasksList.appendChild(taskElement)
	},

	createCompletedTaskElement: (taskObj) => {
		const { id, taskText } = taskObj
		const completedtaskElement = document.createElement("li")
		completedtaskElement.classList.add("completed-task")
		completedtaskElement.setAttribute("id", id)
		completedtaskElement.innerHTML = `
			<div class="task-text__div">
				<h3 class='task__text'>${taskText}</h3>
			</div>
			<button class='task__delete'><i class="fa-regular fa-trash-can"></i></button>
		`
		completedTasksList.appendChild(completedtaskElement)
	},

	deleteCurrentCompletedTasksList: () => {
		const completedTasksListElements = Array.from(
			document.getElementsByClassName("completed-task")
		)
		if (completedTasksListElements.length !== 0) {
			completedTasksListElements.forEach((element) => element.remove())
		}
	},

	deleteCurrentExecutionTasksList: () => {
		const executionTasksListElements = Array.from(
			document.getElementsByClassName("execution-task")
		)
		if (executionTasksListElements.length !== 0) {
			executionTasksListElements.forEach((element) => element.remove())
		}
	},

	addEmptyDescriptionForExecutionList: () => {
		const empty = document.createElement("h4")
		empty.setAttribute("class", "empty")
		empty.setAttribute("id", "execution-tasks__empty")
		empty.innerText = "Execution List is empty"
		executionTasks.appendChild(empty)
	},

	addEmptyDescriptionForCompletedList: () => {
		const empty = document.createElement("h4")
		empty.setAttribute("class", "empty")
		empty.setAttribute("id", "completed-tasks__empty")
		empty.innerText = "Completed List is empty"
		completedTasks.appendChild(empty)
	},

	selectArea: (id) => {
		if (id === "execution-tasks__empty") {
			utils.addEmptyDescriptionForExecutionList()
		} else if (id === "completed-tasks__empty") {
			utils.addEmptyDescriptionForCompletedList()
		}
	},

	checkForEmpty: (list, elementsId) => {
		if (document.getElementById(elementsId) !== null && list.length > 0) {
			document.getElementById(elementsId).remove()
		} else if (
			document.getElementById(elementsId) === null &&
			list.length === 0
		) {
			utils.selectArea(elementsId)
		}
	},
}
