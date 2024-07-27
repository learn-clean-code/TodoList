import type { ITodo } from "@/types/Todo.type"
import { useState } from "react"
import CheckBox from "./CheckBox"

function TodoItem({ id, content, isDone }: ITodo) {
  const [isChecked, setIsChecked] = useState(isDone)

  const handleCheckTodo = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex gap-7 py-5">
      <CheckBox id={id} isChecked={isChecked} onChange={setIsChecked} />
      <div
        className={`flex-grow ${isChecked ? "text-gray-400 line-through" : "text-inherit"} cursor-pointer`}
        onClick={handleCheckTodo}
      >
        {content}
      </div>
    </div>
  )
}

export default TodoItem
