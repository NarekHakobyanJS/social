import React, { useRef, ChangeEvent } from 'react'
import Post from './Post/Post'
import { PostDataType } from '../../../state/state'
import { addPostAC, updateNewPostTextAC } from '../../../state/profileReducer'


// updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={props.posts}
//                 newPostText={props.newPostText}

type MyPostsPropsType = {
    posts: PostDataType,
    newPostText: string | undefined
    updateNewPostText : (text : string) => void
    addPost : () => void
}

const MyPosts = (props: MyPostsPropsType ) => {
    const textareaRef: any = useRef()

    const onAddPost = () => {
       props.addPost()
       // props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = textareaRef.current.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewPostTextAC(text))
    }
    return (
        <div>
            My Posts
            <div>
                <textarea
                    ref={textareaRef}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button onClick={onAddPost}>add post</button>
            </div>
            {
                props.posts.map((post) => {
                    return <Post key={post.id} post={post} />
                })
            }

        </div>
    )
}

export default MyPosts