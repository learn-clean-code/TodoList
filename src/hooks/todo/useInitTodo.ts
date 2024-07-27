import { TODO_ACTIONS } from "@/reducers/todoReducer"
import { useEffect } from "react"

export const useInitTodo = (dispatchTodos: React.Dispatch<any>) => {
  const initTodos = () => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      const todos = JSON.parse(storedTodos)
      dispatchTodos({
        type: TODO_ACTIONS.INIT_TODOS,
        payload: todos,
      })
    }
  }

  useEffect(() => {
    initTodos()
  }, [dispatchTodos])

  return initTodos
}
