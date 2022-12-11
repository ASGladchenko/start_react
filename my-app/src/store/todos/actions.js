import {CHECK_TODO, ENTER_TODO, HANDEL_ADD_TODO, REMOVE_TODO} from "./types"

export const handleAddTodo = payload =>({
    type: HANDEL_ADD_TODO,
    payload
})
export const handleRemovedTodo = payload =>({
    type: REMOVE_TODO,
    payload
})
export const enterTodo = payload =>({
    type: ENTER_TODO,
    payload
})
export const checkTodo = payload =>({
    type: CHECK_TODO,
    payload
})


