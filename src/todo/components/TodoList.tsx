import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


const TodoList = () => {

    const context = useContext(TodoContext)
    return (
        <ul>

        </ul>
    )
}


export default TodoList