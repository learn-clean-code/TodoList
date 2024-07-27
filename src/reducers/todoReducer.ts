import type { ITodo, TodoActionType, TodoReducer } from "@/types/Todo.type"

export const TODO_ACTIONS = {
  INIT_TODOS: "INIT_TODOS",
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
} as const

const todoActionHandlers: Record<TodoActionType, TodoReducer> = {
  [TODO_ACTIONS.INIT_TODOS]: (_, action) => {
    return action.payload as ITodo[]
  },
  [TODO_ACTIONS.ADD_TODO]: (state, action) => {
    const newState = [...state, action.payload as ITodo]
    localStorage.setItem("todos", JSON.stringify(newState))
    return newState
  },
  [TODO_ACTIONS.UPDATE_TODO]: (state, action) => {
    const updatedTodo = action.payload as ITodo
    const newState = state.map((todo) =>
      todo.id === updatedTodo.id
        ? {
            ...todo,
            content: updatedTodo.content,
          }
        : todo,
    )
    localStorage.setItem("todos", JSON.stringify(newState))
    return newState
  },
}

export const todoReducer: TodoReducer = (state, action) => {
  const handler = todoActionHandlers[action.type]
  if (!handler) return state

  return handler(state, action)
}
