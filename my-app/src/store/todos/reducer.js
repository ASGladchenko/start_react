import {CHECK_TODO, ENTER_TODO, HANDEL_ADD_TODO, REMOVE_TODO} from "./types"

const initialState = {
    enterTodo: "",
    todosList: [],
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case HANDEL_ADD_TODO:
            const newTodo = {
                id: Math.round(Math.random() * 100),
                value: state.enterTodo,
                checked: false,
            }
            state.enterTodo = ""
            return {
                ...state,
                todosList: [
                    ...state.todosList,
                    newTodo
                ]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todosList: state.todosList.filter(todo => todo.id !== action.payload)
            }
        case ENTER_TODO:
            return {
                ...state,
                enterTodo: action.payload
            }
        case CHECK_TODO:
            return {
                ...state,
                todosList: state.todosList.map(todo=>todo.id === action.payload ? {
                    ...todo,checked : !todo.checked
                } : {...todo})
            }
        default :
            return state
    }
}
