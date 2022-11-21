import React, {useState} from 'react';
import Button from './UI/button/Button'
import Input from './UI/Input/Input'

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = { 
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <h2>Add new post</h2>
            <Input
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder='Titlul'
                value={post.title} />

            <Input
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder='Continutul'
                value={post.body} />
            <Button onClick={addNewPost}>Add</Button>
        </form>
    )
}

export default PostForm;
