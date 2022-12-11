import {INCREMENT,DECREMENT} from "./types"

const initialState ={
   counter: {
       number:0
   }
}

export const counter = (state= initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return ({
                ...state,
                counter: {
                    ...state.counter,
                    number: state.counter.number + 1
                }
            })
        case DECREMENT:
            return ({
                ...state,
                counter: {
                    ...state.counter,
                    number: state.counter.number - 1
                }
            })
        default :
            return state
    }
}
