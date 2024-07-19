function ToDoText({ isChecked, handleCheckButton, toDo }) {
  return (
    <div
      className={`${isChecked ? 'text-gray-400 line-through' : 'text-inherit'} cursor-pointer`}
      onClick={handleCheckButton}
    >
      {toDo.content}
    </div>
  )
}

export default ToDoText
