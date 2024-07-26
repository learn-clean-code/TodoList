import { useInput } from "@/hooks/useInput"

interface IAddTodoInputProps {
  onCreate: (content: string) => void
}

function AddTodoInput({ onCreate }: IAddTodoInputProps) {
  const { value, onChange, handleSubmit } = useInput("", onCreate)

  return (
    <form
      className="absolute bottom-0 left-0 right-0 flex gap-10 p-5"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 p-2 border-2 border-gray-200 outline-green-300 rounded-lg"
        value={value}
        onChange={onChange}
      />
      <button className="text-green-500" type="submit">
        추가
      </button>
    </form>
  )
}

export default AddTodoInput
