import { useTodo } from "@/hooks/todo/useTodo"
import type { IUseTodo } from "@/types/Todo.type"
import CreateTodo from "./CreateTodo"
import TodoList from "./TodoList"

function Todo() {
  const { todos, handleCreateTodo }: IUseTodo = useTodo()

  return (
    <div className="relative w-1/2 mx-auto px-7 py-9 bg-white rounded shadow-md">
      <TodoList todos={todos} />
      <CreateTodo onCreate={handleCreateTodo} />
    </div>
  )
}

export default Todo
