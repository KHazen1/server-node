import { nanoid } from "nanoid"

const todos = []

const baseTodo = {
    id: nanoid(),
    text: 'Test To Do Item',
    completed: false,
}

todos.push(baseTodo)

export const getTodos = () => {
    return todos
}

export const addTodo = (todo) => {
    todos.push(todo)
}

