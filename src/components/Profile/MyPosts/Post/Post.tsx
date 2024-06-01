import React from 'react'
import { PostType } from '../../../../state/state'

type PostPropsType = {
    post : PostType
}
const Post = ({post} : PostPropsType) => {
  return (
    <div>
        <img width={120} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOY1tblBnwD5ubM8atvf5MY6qH7rOaVq7UDKi2LaCdVw&s' />
        <span>{post.message}</span>
    </div>
  )
}

export default Post