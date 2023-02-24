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
			<button class='task__delete'>Delete</button>
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
}
