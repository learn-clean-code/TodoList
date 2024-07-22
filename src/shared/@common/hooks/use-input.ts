import { ChangeEventHandler, useState } from "react"

interface Props {
  defaultValue?: string
  validateFn?: (value: string) => void
}

export default function useInput(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "")
  const [isTouched, setIsTouched] = useState(false)

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value)
  const onResetValue = () => setValue("")
  const onBlurTouched = () => setIsTouched(true)

  const isValid = props.validateFn ? props.validateFn(value) : true

  const hasError = !isValid && isTouched

  return {
    value,
    onChangeValue,
    onResetValue,
    onBlurTouched,
    hasError,
  }
}
