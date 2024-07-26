import { useInput } from "../../hooks/useInput"

function ToDoEditor({ onCreate }) {
  const { value, onChange, onKeyDown, handleSubmit } = useInput("", onCreate)

  return (
    <div className="absolute bottom-0 left-0 right-0 flex gap-10 p-5">
      <input
        className="flex-1 p-2 border-2 border-gray-200 outline-green-300 rounded-lg"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
      <button className="text-green-500" onClick={handleSubmit}>
        추가
      </button>
    </div>
  )
}

export default ToDoEditor
