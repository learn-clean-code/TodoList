import { useTodo } from "@/hooks/todo/useTodo"
import { useInput } from "@/hooks/useInput"
import type { ITodo } from "@/types/Todo.type"
import { useEffect, useState } from "react"
import { LuCheck, LuPencil } from "react-icons/lu"
import CheckBox from "./CheckBox"

function TodoItem({ id, isDone = false }: Omit<ITodo, "content">) {
  const [isChecked, setIsChecked] = useState(isDone)
  const [isEditing, setIsEditing] = useState(false)
  const { todos, handleUpdateTodo } = useTodo()

  const currentTodo = todos.find((todo) => todo.id === id)
  const currentContent = currentTodo?.content ?? ""

  const {
    value: content,
    setValue,
    onChange,
    handleSubmit,
  } = useInput(currentContent, (editedContent) => {
    handleUpdateTodo(id, editedContent)
    setIsEditing(false)
  })

  useEffect(() => {
    setValue(currentContent)
  }, [currentContent, setValue])

  const handleEditClick = () => {
    setIsEditing(true)
  }

  return (
    <div className="flex items-center gap-7 py-5">
      <CheckBox id={id} isChecked={isChecked} onChange={setIsChecked} />
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-grow flex items-center">
          <input
            type="text"
            value={content}
            onChange={onChange}
            className="flex-grow border rounded px-2 py-1"
          />
          <button type="submit" className="ml-2">
            <LuCheck className="text-green-500 cursor-pointer" />
          </button>
        </form>
      ) : (
        <>
          <div
            className={`flex-grow ${
              isChecked ? "text-gray-400 line-through" : "text-inherit"
            } cursor-pointer`}
            onClick={() => {
              setIsChecked(!isChecked)
            }}
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
