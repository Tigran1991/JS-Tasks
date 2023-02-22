const executionSubject = document.querySelector(".execution_subject")
const tasksListElement = document.querySelector(".tasks_list")

const deleteCheckedTask = (e) => {
	console.log(e.target.parentNode.id)
	document.getElementById(`${e.target.parentNode.id}`).remove()
}

const createTaskDiv = (task) => {
	const taskDiv = document.createElement("li")
	taskDiv.setAttribute("class", "task_div")
	taskDiv.setAttribute("id", `${task.id}`)
	taskDiv.innerHTML = `
        <h3 class="task_text">${task.text}</h3>
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    `
	tasksListElement.appendChild(taskDiv)
	tasksListElement.addEventListener("click", deleteCheckedTask)
}

const addTask = (e, list) => {
	e.preventDefault()

	const input = document.querySelector(".enter_task")
	const taskText = input.value

	return createTaskDiv({
		id: Math.floor(Math.random() * 10000),
		text: taskText,
		status: "not done",
	})
}

const todo = () => {
	const addTaskBtn = document.querySelector(".add_task")
	const taskList = []

	addTaskBtn.addEventListener("click", (e) => addTask(e, taskList))
}

todo()
