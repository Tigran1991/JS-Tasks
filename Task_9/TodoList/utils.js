const utils = {
	generateRandomId: () => Math.floor(Math.random() * 10000),
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
