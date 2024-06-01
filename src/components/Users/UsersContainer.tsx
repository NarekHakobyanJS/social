import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCountAC, toggleIsFetchingAC } from '../../state/usersReducer'
import UsersAPIComponnet from './UsersC'

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFettching : state.usersPage.isFettching
    }
}

const mapDispatchToPorps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users : any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage : (p : number) => {
            dispatch(setCurrentPageAC(p))
        },
        setTotalUserCount : (totalCount : number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        toggleIsFetching : (isFettching : boolean) => {
            dispatch(toggleIsFetchingAC(isFettching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToPorps)(UsersAPIComponnet)
export default UsersContainer