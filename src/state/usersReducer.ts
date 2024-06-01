const FOLLOW = 'FOLLOW'
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UsersStateType = {
    name : string,
    id : number,
    photos : object,
    status : null,
    followed : boolean,
}
type UserPageStateType = {
    users : Array<UsersStateType>,
    pageSize : number,
    totalUsersCount : number,
    currentPage : number,
    isFettching : boolean
}

const initialState : UserPageStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFettching : false
}

const usersReducer = (state: UserPageStateType = initialState, action: any): UserPageStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u
                    }
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u
                    }
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state,
                totalUsersCount : action.count
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFettching : action.isFetching
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalUserCountAC = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count : totalUsersCount })
export const toggleIsFetchingAC = (isFetching : boolean) => ({type : TOGGLE_IS_FETCHING, isFetching : isFetching})
export default usersReducer