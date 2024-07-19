import ToDoItem from "./ToDoItem"

function ToDoList({ toDos }) {
  return (
    <div>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </div>
  )
}

export default ToDoList
