interface ICheckBoxProps {
  id: string
  isChecked: boolean
  onChange: (checked: boolean) => void
}

function CheckBox({ id, isChecked, onChange }: ICheckBoxProps) {
  const checkboxId = `checkbox-${id}`

  return (
    <div className="relative">
      <input
        type="checkbox"
        id={checkboxId}
        className="hidden"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor={checkboxId}
        className={`block w-7 h-7 rounded-full cursor-pointer border ${
          isChecked
            ? "bg-green-500 border-green-500"
            : "bg-white border-gray-300"
        }`}
      >
        <span
          className={`block w-3 h-1.5 border-l-2 border-b-2 border-white transform rotate-[-45deg] mt-[9px] ml-[7px] ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </label>
    </div>
  )
}

export default CheckBox
