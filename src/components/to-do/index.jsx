import { useEffect } from "react"
import { useTodo } from "../../hooks/useToDo"
import ToDoEditor from "./AddTodoInput"
import ToDoList from "./ToDoList"

function ToDo() {
  const { toDos, handleCreateTodo, initTodos } = useTodo()

  useEffect(() => {
    initTodos()
  }, [])

  return (
    <div className="px-7 py-9">
      <ToDoList toDos={toDos} />
      <ToDoEditor onCreate={handleCreateTodo} />
    </div>
  )
}

export default ToDo
