
import { UsersStateType } from '../../state/usersReducer'
import { NavLink } from 'react-router-dom'



type UsersPropsType = {
    totalUsersCount : number,
    pageSize : number,
    currentPage : number,
    users : Array<UsersStateType>,
    onPageChnaged : (p : number) => void,
    unfollow : (userId : number) => void,
    follow : (userId : number) => void,
}

const Users = (props: UsersPropsType) => {
    
   
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
           <div>
                    {
                        pages.map((p : number) => {
                            return <button
                                key={p}
                                onClick={() => props.onPageChnaged(p)}
                                className={p === props.currentPage ? 'activeBTN' : ''}>{p}</button>
                        })
                    }
                </div>
                {
                    props.users.map((user : any) => {
                        return <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                    <img width={120} src={user.photos.small === null ? 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' : user.photos.small} />
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>follow</button>}
                                </div>
                            </span>
                            <span>
                                <h4>{user.name}</h4>
                                <h3>{user.id}</h3>
                            </span>
                        </div>
                    })
                }
        </div>
    )
}

export default Users