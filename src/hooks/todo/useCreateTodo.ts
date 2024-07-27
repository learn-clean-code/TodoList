import { TODO_ACTIONS } from "@/reducers/todoReducer"
import type { ITodo } from "@/types/Todo.type"
import { nanoid } from "nanoid"

export const useCreateTodo = (dispatchTodos: React.Dispatch<any>) => {
  return (content: string) => {
    const newTodo: ITodo = {
      id: nanoid(),
      content,
      isDone: false,
    }
    dispatchTodos({
      type: TODO_ACTIONS.ADD_TODO,
      payload: newTodo,
    })

    const storedTodos = localStorage.getItem("todos")
    const todos = storedTodos ? JSON.parse(storedTodos) : []
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
}
