import { useReducer, useRef } from "react"
import {
  TODO_ACTIONS,
  loadTodosFromLocalStorage,
  todoReducer,
} from "../reducers/todoReducer"

export const useTodo = () => {
  const [toDos, dispatchToDos] = useReducer(todoReducer, [])
  const nextIdRef = useRef(0)

  const initTodos = () => {
    const storedTodos = loadTodosFromLocalStorage()
    if (storedTodos) {
      dispatchToDos({
        type: TODO_ACTIONS.INIT_TODOS,
        data: storedTodos,
      })
    }
  }

  const handleCreateTodo = (content) => {
    dispatchToDos({
      type: TODO_ACTIONS.ADD_TODOS,
      data: {
        id: nextIdRef.current++,
        content,
        isDone: false,
      },
    })
  }

  return { toDos, handleCreateTodo, initTodos }
}
