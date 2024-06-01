import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

// Action Tpye
/// type 
type DialogsType = {
    id: number,
    name: string
}

export type DialogsDataType = Array<DialogsType>

type MessagesType = {
    id: number,
    message: string
}
export type MessagesDataType = Array<MessagesType>

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

export type DialogsPageStateType = {
    messages: MessagesDataType,
    dialogs: DialogsDataType,
    newMessage : string
}

export type StateType = {
    profilePage: ProfilePageStateType,
    dialogsPage: DialogsPageStateType
}

export type ActionType = {
    type: string,
    payload: string
}




export type StoreType = {
    _state : StateType,
    rerenderTree : () => void,
    getState : () => StateType,
    subscribe : (observer : () => void) => void
    dispatch : (action: ActionType) => void
}

export const store : StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                { id: 1, message: 'hi muder fucker', likesCount: 1 },
                { id: 2, message: 'hi muder fucker', likesCount: 1 },
            ]
        },
        dialogsPage : {
            messages: [
                { id: 1, message: 'its my 1 post' },
                { id: 2, message: 'its my 3 post' },
            ],
            dialogs: [
                { id: 1, name: "Narek" },
                { id: 2, name: "Sveta" }
            ],
            newMessage : ''
        }
    },
    getState() {
        return this._state
    },
    rerenderTree() { },
    subscribe(observer: () => void) {
        this.rerenderTree = observer
    },
    dispatch(action: ActionType) {
            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this.rerenderTree()
    },

}

export default store
