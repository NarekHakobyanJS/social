import axios from 'axios'
import React from 'react'
import './Users.css'
import Users from './Users'

type UsersPropsType = {
    users: Array<any>
    setUsers: (users: Array<any>) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void,
    pageSize: number,
    totalUsersCount: number
    currentPage: number,
    isFettching: boolean
    setCurrentPage: (p: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching : (isFetching : boolean) => void
}



class UsersAPIComponnet extends React.Component<UsersPropsType> {


    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                console.log(response);
                this.props.toggleIsFetching(false)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.setUsers(response.data.items)

            })
    }


    onPageChnaged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        return (
            <div>
                {
                    this.props.isFettching && <h1>Loading...</h1>
                }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChnaged={this.onPageChnaged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </div>
        )
    }

}

export default UsersAPIComponnet