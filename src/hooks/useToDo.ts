import {
  TODO_ACTIONS,
  loadTodosFromLocalStorage,
  todoReducer,
} from "@/reducers/todoReducer"
import type { IUseTodo } from "@/types/Todo.type"
import { useReducer, useRef } from "react"

export const useTodo = (): IUseTodo => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [])
  const nextIdRef = useRef(0)

  const initTodos = () => {
    const storedTodos = loadTodosFromLocalStorage()
    if (storedTodos) {
      dispatchTodos({
        type: TODO_ACTIONS.INIT_TODOS,
        data: storedTodos,
      })
    }
  }

  const handleCreateTodo = (content: string) => {
    dispatchTodos({
      type: TODO_ACTIONS.ADD_TODOS,
      data: {
        id: nextIdRef.current++,
        content,
        isDone: false,
      },
    })
  }

  return { todos, handleCreateTodo, initTodos }
}
