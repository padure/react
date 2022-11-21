import React from 'react';
import Button from './UI/button/Button';

const PostItems = (props) => {
    return (
        <div className='post'>
            <div className='body'>
                <strong>
                    { props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className='buttons'>
                <Button onClick={() => props.remove(props.post)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default PostItems;
