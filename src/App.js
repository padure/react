import React, {useMemo, useRef, useState} from 'react'
import './css/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Select from './components/UI/Select/Select'
import Input from './components/UI/Input/Input'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "sapiente aut maxime", body: "Accusamus quasi est dolore impedit qui debitis."},
    {id: 2, title: "voluptatem voluptatem et", body: "Maxime est amet est eius ullam rerum quae error qui."},
    {id: 3, title: "fuga eaque placeat", body: "Qui numquam quod in eum reiciendis."},
    {id: 4, title: "recusandae nihil quibusdam", body: "Quia dolorem id qui enim nobis sit magnam."},
    {id: 5, title: "recusandae earum dolores", body: "Ut consequuntur maxime qui nobis repellendus expedita reiciendis sed."}
  ])
  const [selectedSort,  setSelectedSort]  = useState('')
  const [serchQuery,    setSerchQuery]    = useState('')

  const sortedPosts = useMemo(()=> {
    if(selectedSort) {
      return [...posts].sort((a, b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(serchQuery))
  }, [serchQuery, sortedPosts])
  //  Create new post
  const createPost = newPost => setPosts([...posts, newPost])
  //  Remove post
  const removePost = post => setPosts(posts.filter(p => p.id !== post.id))

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Input 
          value={serchQuery}
          onChange={e => setSerchQuery(e.target.value)}
          placeholder='Cauta ...'
        />
        <Select 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sortare"
            options={[
              {value: 'title', name: 'Dupa titlu'},
              {value: 'body', name: 'Dupa body'},
            ]} />
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Lista de posturi"/>
        : <h1 style={{textAlign: 'center'}}>
            Nu sunt postari
          </h1>
      }
      
    </div>
  );
}

export default App;
