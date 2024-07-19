function ToDoText({ isChecked, handleCheckButton, content }) {
  return (
    <div
      className={`${isChecked ? 'text-gray-400 line-through' : 'text-inherit'} cursor-pointer`}
      onClick={handleCheckButton}
    >
      {content}
    </div>
  )
}

export default ToDoText
