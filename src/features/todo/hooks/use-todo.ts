import { useState } from "react"
import type { Todo } from "features/todo/types"

export default function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleCreateTodo = (todo: Todo) => setTodos((prevTodo) => [...prevTodo, todo])

  const handleUpdateTodo = (todoId: number) => {
    const updateTodoFn = (todo: Todo) => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo)
    const updateTodo = todos.map(updateTodoFn)
    setTodos(updateTodo)
  }

  return {
    todos,
    handleCreateTodo,
    handleUpdateTodo,
  }
}
