import { TODO_ACTIONS } from "@/reducers/todoReducer"

export interface ITodo {
  id: string
  content: string
  isDone?: boolean
}

export type TodoReducer = (state: ITodo[], action: ITodoAction) => ITodo[]

export type TodoActionType = (typeof TODO_ACTIONS)[keyof typeof TODO_ACTIONS]

export interface ITodoAction {
  type: TodoActionType
  payload: ITodo | ITodo[]
}

export interface IUseTodo {
  todos: ITodo[]
  initTodos: () => void
  handleCreateTodo: (content: string) => void
  handleUpdateTodo: (id: string, content: string) => void
}
