import { useEffect, useReducer, useRef } from "react"
import ToDoEditor from "./ToDoEditor"
import ToDoItem from "./ToDoItem"

function todoReducer(state, action) {
  let nextState

  switch (action.type) {
    case "INIT_TODOS":
      return action.data
    case "ADD_TODOS": {
      nextState = [...state, action.data]
      break
    }
  }

  localStorage.setItem("toDos", JSON.stringify(nextState))
  return nextState
}

function ToDoList() {
  const [toDos, dispatchToDos] = useReducer(todoReducer, [])
  const nextIdRef = useRef(0)

  useEffect(() => {
    const storedTodos = localStorage.getItem("toDo")
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos)
        dispatchToDos({
          type: "INIT_TODOS",
          todo: parsedTodos,
        })
      } catch (error) {
        console.error("toDo데이터 parsing에 실패했습니다:", error)
      }
    }
  }, [])

  const handleCreateTodo = (content) => {
    dispatchToDos({
      type: "ADD_TODOS",
      data: {
        id: nextIdRef.current++,
        content,
        isDone: false,
      },
    })
  }

  return (
    <div className="px-7 py-9">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
      <ToDoEditor onCreate={handleCreateTodo} />
    </div>
  )
}

export default ToDoList
