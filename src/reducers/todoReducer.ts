import type { ITodo, TodoAction } from "@/types/Todo.type"

export const TODO_ACTIONS = {
  INIT_TODOS: "INIT_TODOS",
  ADD_TODOS: "ADD_TODOS",
} as const

const todoActionHandlers = {
  [TODO_ACTIONS.INIT_TODOS]: (
    state: ITodo[],
    action: TodoAction & { type: "INIT_TODOS" },
  ): ITodo[] => {
    return action.data
  },
  [TODO_ACTIONS.ADD_TODOS]: (
    state: ITodo[],
    action: TodoAction & { type: "ADD_TODOS" },
  ): ITodo[] => {
    return [...state, action.data]
  },
}

export const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
  const handler = todoActionHandlers[action.type]
  if (!handler) return state

  const nextState = handler(state, action as any)
  saveTodosToLocalStorage(nextState)
  return nextState
}

export const loadTodosFromLocalStorage = (): ITodo[] | null => {
  const storedTodos = localStorage.getItem("todos")
  return storedTodos ? JSON.parse(storedTodos) : null
}

const saveTodosToLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos))
}
