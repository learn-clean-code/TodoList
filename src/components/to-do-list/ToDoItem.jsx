import { useState } from "react"
import CheckBox from "./CheckBox"
import ToDoText from "./ToDoText"

function ToDoItem({ id, content, isDone }) {
  const [isChecked, setIsChecked] = useState(isDone)

  const handleCheckButton = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex justify-between py-5">
      <ToDoText
        isChecked={isChecked}
        handleCheckButton={handleCheckButton}
        content={content}
      />
      <CheckBox id={id} isChecked={isChecked} onChange={setIsChecked} />
    </div>
  )
}

export default ToDoItem
