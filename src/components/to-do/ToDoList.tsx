import type { ITodo } from "@/types/Todo.type"
import TodoItem from "./TodoItem"

interface ITodoListProps {
  todos: ITodo[]
}

function TodoList({ todos }: ITodoListProps) {
  return (
    <div className="w-full pb-20">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
