//use rafce for syntax of the file
import React from 'react'
import { useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'
import { Text, View } from 'react-native'; 


const PostsList = () => {

   // const posts = useSelector((state)=> state.posts)// state.posts - here if we make changes means can update,but if 10 components means how it be updated, so use a variable
   const posts = useSelector(selectAllPosts)
    const renderedposts = posts.map(post =>(
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Text>{post.content.substring(0, 100)}</Text>
      </View>
    ))
  return (
    <View>
      <Text>Posts</Text>
      {renderedposts}
    </View>
  )
}

export default PostsList