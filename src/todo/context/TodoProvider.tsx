import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "./TodoReducer"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Prueba todo1",
            completed: false
        },
        {
            id: "2",
            desc: "Prueba todo2",
            completed: false
        }],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const TodoProvider = ({ children }: Props) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)
    return (
        <TodoContext.Provider value={{ todoState }}>{children}</TodoContext.Provider>
    )
}


export default TodoProvider