import { useState } from "react"
import { Todo, TodoForm, TodoHeader, TodoLayout, TodoList } from "features/todo"
import { Layout } from "shared/@common/components"

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const handleCreateTodo = (todo: Todo) => setTodos((prevTodo) => [...prevTodo, todo])
  const handleUpdateTodo = (todoId: number) => {
    const updateTodoFn = (todo: Todo) => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo)
    const updateTodo = todos.map(updateTodoFn)
    setTodos(updateTodo)
  }

  return (
    <Layout>
      <TodoLayout>
        <TodoHeader />
        <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} />
      </TodoLayout>

      <TodoLayout>
        <TodoForm onCreateTodo={handleCreateTodo} />
      </TodoLayout>
    </Layout>
  )
}
