export const TODO_ACTIONS = {
  INIT_TODOS: "INIT_TODOS",
  ADD_TODOS: "ADD_TODOS",
}

const todoActionHandlers = {
  [TODO_ACTIONS.INIT_TODOS]: (state, action) => {
    return action.data
  },
  [TODO_ACTIONS.ADD_TODOS]: (state, action) => {
    return [...state, action.data]
  },
}

export const todoReducer = (state, action) => {
  const handler = todoActionHandlers[action.type]
  if (!handler) return state

  const nextState = handler(state, action)
  saveTodosToLocalStorage(nextState)
  return nextState
}

export const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("toDos")
  if (storedTodos) {
    try {
      return JSON.parse(storedTodos)
    } catch (error) {
      console.error("toDo데이터 parsing에 실패했습니다:", error)
      return null
    }
  }
  return null
}

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("toDos", JSON.stringify(todos))
}
