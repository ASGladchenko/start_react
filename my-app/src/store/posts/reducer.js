import {REMOVE_POST, SET_POSTS} from "./types"

const initialState = []

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return [
                ...state,
                ...action.posts
            ]
        case REMOVE_POST:
            return state.filter(posts => posts.id !== action.postId)


        default :
            return state
    }
}
