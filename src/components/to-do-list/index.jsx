import { useState } from 'react'
import AddToDo from './AddToDo'
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
  const [toDo, setToDo] = useState(mockData)

  return (
    <div className="px-7 py-9">
      <ToDoItem />
      <AddToDo />
    </div>
  )
}

export default ToDoList
