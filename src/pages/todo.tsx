import { TodoForm, TodoHeader, TodoLayout, TodoList } from "features/todo/components"
import { useTodo } from "features/todo/hooks"

export default function Todo() {
  const { todos, handleCreateTodo, handleUpdateTodo } = useTodo()

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
