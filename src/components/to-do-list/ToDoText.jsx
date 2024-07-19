function ToDoText({ isChecked, handleCheckButton }) {
  return (
    <div
      className={`${isChecked ? 'text-gray-400 line-through' : 'text-inherit'} cursor-pointer`}
      onClick={handleCheckButton}
    >
      ToDoText
    </div>
  )
}

export default ToDoText
