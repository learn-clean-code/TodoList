import { useTodo } from "features/todo/hooks"
import { TodoForm, TodoHeader, TodoLayout, TodoList } from "features/todo/components"

export default function Todo() {
  const { todos, handleCreateTodo, handleUpdateTodo } = useTodo()

  return (
    <>
      <TodoLayout>
        <TodoHeader todos={todos} />
        <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} />
      </TodoLayout>

      <TodoLayout>
        <TodoForm onCreateTodo={handleCreateTodo} />
      </TodoLayout>
    </>
  )
}
