import { useTodo } from "@/hooks/useTodo"
import type { IUseTodo } from "@/types/Todo.type"
import { useEffect } from "react"
import AddTodoInput from "./AddTodoInput"
import TodoList from "./TodoList"

function Todo() {
  const { todos, handleCreateTodo, initTodos }: IUseTodo = useTodo()

  useEffect(() => {
    initTodos()
  }, [])

  return (
    <div className="px-7 py-9">
      <TodoList todos={todos} />
      <AddTodoInput onCreate={handleCreateTodo} />
    </div>
  )
}

export default Todo
