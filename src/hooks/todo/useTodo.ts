import { useReducer } from "react"
import { todoReducer } from "@/reducers/todoReducer"
import { useInitTodos } from "./useInitTodos"
import { useCreateTodo } from "./useCreateTodo"
import { useUpdateTodo } from "./useUpdateTodo"
import type { IUseTodo } from "@/types/Todo.type"

export const useTodo = (): IUseTodo => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [])

  const initTodos = useInitTodos(dispatchTodos)
  const handleCreateTodo = useCreateTodo(dispatchTodos)
  const handleUpdateTodo = useUpdateTodo(dispatchTodos)

  return { todos, initTodos, handleCreateTodo, handleUpdateTodo }
}