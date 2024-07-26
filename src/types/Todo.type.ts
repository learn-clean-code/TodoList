export interface ITodo {
  id: number
  content: string
  isDone: boolean
}

export type TodoAction =
  | { type: "INIT_TODOS"; data: ITodo[] }
  | { type: "ADD_TODOS"; data: ITodo }

export interface IUseTodo {
  todos: ITodo[]
  handleCreateTodo: (content: string) => void
  initTodos: () => void
}
