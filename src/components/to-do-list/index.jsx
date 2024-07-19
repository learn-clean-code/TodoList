import { useEffect, useReducer, useRef } from "react"
import ToDoEditor from "./ToDoEditor"
import ToDoItem from "./ToDoItem"

function reducer(state, action) {
  let nextState

  switch (action.type) {
    case "INIT":
      return action.data
    case "CREATE": {
      nextState = [...state, action.data]
      break
    }
  }

  localStorage.setItem("toDo", JSON.stringify(nextState))
  return nextState
}

function ToDoList() {
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  useEffect(() => {
    const storedData = localStorage.getItem("toDo")
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      dispatch({
        type: "INIT",
        data: parsedData,
      })
    }
  }, [])

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content,
        isDone: false,
      },
    })
  }

  return (
    <div className="px-7 py-9">
      {data.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
      <ToDoEditor onCreate={onCreate} />
    </div>
  )
}

export default ToDoList
