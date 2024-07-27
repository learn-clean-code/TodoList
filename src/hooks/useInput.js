import { useState } from 'react'

export const useInput = (initialValue = '', onSubmit) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    if (!value.trim()) return
    onSubmit(value)
    setValue('')
  }

  return {
    value,
    onChange,
    onKeyDown,
    handleSubmit,
  }
}
