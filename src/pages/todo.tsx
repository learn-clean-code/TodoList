import { useState } from "react"
import { TodoForm, TodoHeader, TodoLayout, TodoList } from "features/todo/components"
import type { Todo } from "features/todo/types"

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([])
  const handleCreateTodo = (todo: Todo) => setTodos((prevTodo) => [...prevTodo, todo])
  const handleUpdateTodo = (todoId: number) => {
    const updateTodoFn = (todo: Todo) => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo)
    const updateTodo = todos.map(updateTodoFn)
    setTodos(updateTodo)
  }
  return (
    <>
      <TodoLayout>
        <TodoHeader />
        <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} />
      </TodoLayout>

      <TodoLayout>
        <TodoForm onCreateTodo={handleCreateTodo} />
      </TodoLayout>
    </>
  )
}
