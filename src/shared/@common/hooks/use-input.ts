import { ChangeEventHandler, useState } from "react"

interface Props {
  defaultValue: string
  validateFn?: (value: string) => void
}

export default function useInput(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "")
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value)

  const onResetValue = () => setValue("")

  return {
    value,
    onChangeValue,
    onResetValue,
  }
}
