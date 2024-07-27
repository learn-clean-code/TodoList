import { useTodo } from "features/todo/hooks"
import { TodoHeader, TodoLayout, TodoList } from "features/todo/components"
import TodoButton from "features/todo/components/todo-button/todo-button"

export default function Todo() {
  const { todos, handleCreateTodo, handleUpdateTodo } = useTodo()

  return (
    <TodoLayout>
      <TodoHeader todos={todos} />
      <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} />
      <TodoButton onCreateTodo={handleCreateTodo} />
    </TodoLayout>
  )
}
