let todosClass = document.querySelector(".todos")
let todoInput = document.querySelector(".todoEnter > input")
let priority = document.querySelector("#priority")
let addButton = document.querySelector(".todoEnter button")
let newId = 1
let data = []
// let data = [
//     {
//         "id": 1,
//         "todo": "Do Shopping",
//         "isDone": false,
//         "priority": "high"
//     },]
const showToDos = (data) =>{
    todosClass.innerHTML =" "
    data.forEach((todo)=>{
        todosClass.innerHTML += `<div class="todo">
        <p>${todo.id}</p>
        <p>${todo.todo}</p>
        <p>${todo.priority}</p>
        <button>delete</button>
    </div>`

    })
}
const addStorage = (data) => {
    sessionStorage.todos = JSON.stringify(data)
}
const getStorage = (data) =>{

}

const createTodo = () => {
    newId++
    let todoData ={id:newId,todo:todoInput.value ,isDone:false, priority:priority.value}
    data.push(todoData)
    showToDos(data)
}

const deleteTodo = (e) =>{
    let id = e.target.closest(".todo").querySelector("p").innerText
    let newData = data.filter((todo)=> todo.id  != id )
    addStorage(newData)
    data = getStorage()
    data = showToDos(getStorage())
    showToDos(data)
    

}

const toDoUpdate = (e) => {
    
}

addButton.addEventListener("click",()=>{
    createTodo()
    showToDos(getStorage())
})
//first run
 data = getStorage()
showToDos(data)







//// IS DONE UPDATE EDILECEK DEADLINE BELIRLENECEK