import type { ITodo } from "@/types/Todo.type"
import TodoItem from "./TodoItem"

interface ITodoListProps {
  todos: ITodo[]
}

function TodoList({ todos }: ITodoListProps) {
  console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
