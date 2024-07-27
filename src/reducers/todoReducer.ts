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
    return [...state, action.payload as ITodo]
  },
  [TODO_ACTIONS.UPDATE_TODO]: (state, action) => {
    const updatedTodo = action.payload as ITodo
    return state.map((todo) =>
      todo.id === updatedTodo.id
        ? {
            ...todo,
            content: updatedTodo.content,
          }
        : todo,
    )
  },
}

const saveTodosToLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export const todoReducer: TodoReducer = (state, action) => {
  const handler = todoActionHandlers[action.type]
  if (!handler) return state

  const nextState = handler(state, action)
  saveTodosToLocalStorage(nextState)
  return nextState
}

export const loadTodosFromLocalStorage = (): ITodo[] | null => {
  const storedTodos = localStorage.getItem("todos")
  return storedTodos ? JSON.parse(storedTodos) : null
}
