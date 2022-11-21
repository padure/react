import React from 'react';
import PostItems from './PostItems';

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>
                {title}
            </h2>
            {posts.map((post, i) =>
                <PostItems remove={remove} number={++i} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;
