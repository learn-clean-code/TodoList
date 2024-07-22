import { ChangeEvent, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

export default function Input(props: Props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      checked={props.checked}
      onBlur={props.onBlur}
    />
  )
}
