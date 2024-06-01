
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type PostType = {
    id: number,
    message: string | undefined,
    likesCount: number
}

export type PostDataType = Array<PostType>

export type ProfilePageStateType = {
    newPostText: any
    posts: PostDataType

}

const initialState : ProfilePageStateType= {
    newPostText: '',
    posts: [
        { id: 1, message: 'hi muder fucker', likesCount: 1 },
        { id: 2, message: 'hi muder fucker', likesCount: 1 },
    ]
}

type AddPostActioCreatorType = {
    type: string,
    payload?: string
}

type UpdateNewPostTextActionCreatorType = {
    type: string,
    payload: string
}

type ActionProfileType = AddPostActioCreatorType | UpdateNewPostTextActionCreatorType

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionProfileType): ProfilePageStateType => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.payload
            return {
                ...state,
                newPostText : action.payload
            }
        }

        default:
            return state
    }
}


export const addPostAC = (): AddPostActioCreatorType => ({ type: ADD_POST })
export const updateNewPostTextAC = (payload: string): UpdateNewPostTextActionCreatorType => ({ type: UPDATE_NEW_POST_TEXT, payload})

export default profileReducer