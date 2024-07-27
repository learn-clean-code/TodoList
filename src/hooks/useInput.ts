import { ChangeEventHandler, FormEventHandler, useState } from "react"

type OnSubmitFunction = (value: string) => void

export const useInput = (
  initialValue: string = "",
  onSubmit: OnSubmitFunction,
) => {
  const [value, setValue] = useState(initialValue)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    reset()
  }

  return {
    value,
    setValue,
    onChange,
    handleSubmit,
    reset,
  }
}
