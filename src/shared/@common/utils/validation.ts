export function isEmpty(value: string) {
  return value.trim().length === 0
}

export function greaterThanMinLength(value: string, min: number = 1) {
  if (isEmpty(value)) return true
  return value.trim().length > min
}
