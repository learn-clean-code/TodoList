import { useState } from "react"
import CheckBox from "./CheckBox"

function ToDoItem({ id, content, isDone }) {
  const [isChecked, setIsChecked] = useState(isDone)

  const handleCheckButton = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex justify-between py-5">
      <div
        className={`${isChecked ? "text-gray-400 line-through" : "text-inherit"} cursor-pointer`}
        onClick={handleCheckButton}
      >
        {content}
      </div>
      <CheckBox id={id} isChecked={isChecked} onChange={setIsChecked} />
    </div>
  )
}

export default ToDoItem
