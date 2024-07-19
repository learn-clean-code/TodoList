import { useState } from 'react'
import ToDoEditor from './ToDoEditor'
import ToDoItem from './ToDoItem'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: '공부1',
  },
  {
    id: 1,
    isDone: false,
    content: '공부2',
  },
  {
    id: 2,
    isDone: false,
    content: '공부3',
  },
]

function ToDoList() {
  const [toDos, setToDos] = useState(mockData)

  const onCreate = (content) => {
    const newToDo = { id: 3, isDone: false, content: content }

    setToDos([...toDos, newToDo])
  }

  return (
    <div className="px-7 py-9">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
      <ToDoEditor onCreate={onCreate} />
    </div>
  )
}

export default ToDoList
