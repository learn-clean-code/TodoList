import { ChangeEventHandler, useState } from "react"

interface Props {
  defaultValue?: string
  validateFn?: (value: string) => boolean
}

export default function useInput(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "")

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value)
  const onResetValue = () => setValue("")

  const isValid = props.validateFn ? props.validateFn(value) : true

  return {
    value,
    onChangeValue,
    onResetValue,
    isValid,
    hasError: !isValid,
  }
}
