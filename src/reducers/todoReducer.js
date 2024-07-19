export const TODO_ACTIONS = {
  INIT_TODOS: "INIT_TODOS",
  ADD_TODOS: "ADD_TODOS",
}

export function todoReducer(state, action) {
  let nextState

  switch (action.type) {
    case TODO_ACTIONS.INIT_TODOS:
      return action.data
    case TODO_ACTIONS.ADD_TODOS: {
      nextState = [...state, action.data]
      break
    }
    default:
      return state
  }

  saveTodosToLocalStorage(nextState)
  return nextState
}

export function loadTodosFromLocalStorage() {
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

function saveTodosToLocalStorage(todos) {
  localStorage.setItem("toDos", JSON.stringify(todos))
}
