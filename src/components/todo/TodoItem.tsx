import { useTodo } from "@/hooks/todo/useTodo"
import type { ITodo } from "@/types/Todo.type"
import { useState } from "react"
import { LuCheck, LuPencil } from "react-icons/lu"
import CheckBox from "./CheckBox"

function TodoItem({ id, content: initialContent, isDone = false }: ITodo) {
  const [isChecked, setIsChecked] = useState(isDone)
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const { handleUpdateTodo } = useTodo()

  const handleCheckTodo = () => {
    setIsChecked(!isChecked)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleEditSubmit = () => {
    handleUpdateTodo(id, content)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center gap-7 py-5">
      <CheckBox id={id} isChecked={isChecked} onChange={setIsChecked} />
      {isEditing ? (
        <div className="flex-grow flex items-center">
          <input
            type="text"
            value={content}
            onChange={handleEditChange}
            className="flex-grow border rounded px-2 py-1"
          />
          <button onClick={handleEditSubmit} className="ml-2">
            <LuCheck className="text-green-500 cursor-pointer" />
          </button>
        </div>
      ) : (
        <>
          <div
            className={`flex-grow ${
              isChecked ? "text-gray-400 line-through" : "text-inherit"
            } cursor-pointer`}
            onClick={handleCheckTodo}
          >
            {content}
          </div>
          <button onClick={handleEditClick}>
            <LuPencil className="text-green-500 cursor-pointer" />
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
