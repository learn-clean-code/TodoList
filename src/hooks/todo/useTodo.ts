import { todoReducer } from "@/reducers/todoReducer"
import type { IUseTodo } from "@/types/Todo.type"
import { useReducer } from "react"
import { useCreateTodo } from "./useCreateTodo"
import { useInitTodo } from "./useInitTodo"
import { useUpdateTodo } from "./useUpdateTodo"

export const useTodo = (): IUseTodo => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [])

  const initTodos = useInitTodo(dispatchTodos)
  const handleCreateTodo = useCreateTodo(dispatchTodos)
  const handleUpdateTodo = useUpdateTodo(dispatchTodos)

  return { todos, initTodos, handleCreateTodo, handleUpdateTodo }
}
