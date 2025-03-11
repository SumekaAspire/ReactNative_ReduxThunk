//use rafce for syntax of the file
import React from 'react'
import { useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'
import { StyleSheet, Text, View } from 'react-native'; 
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {

   // const posts = useSelector((state)=> state.posts)// state.posts - here if we make changes means can update,but if 10 components means how it be updated, so use a variable
   const posts = useSelector(selectAllPosts)
    const renderedposts = posts.map(post =>(
      <View key={post.id} style = {styles.posts}>
        <Text style = {styles.postTitle}>{post.title}</Text>
        <Text style = {styles.postContent}>{post.content.substring(0, 100)}</Text>
        <View style={styles.align}>
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
        </View>
      </View>
    ))
  return (
    <View>
      <Text style = {styles.heading}>POSTS</Text>
      {renderedposts}
    </View>
  )
}


const styles = StyleSheet.create({
  heading:{
    textAlign:'left',
    color:'orange',
    fontWeight:'bold',
    fontSize:20,
    margin:7,
    

  },
  postTitle:{
    fontSize:17,
    fontWeight:'bold'
  },
  postContent:{
    fontSize:15,

  },
  posts:{
    borderColor:'lightblue',
    padding:10,
    borderRadius:20,
    borderWidth:2,
    margin:8,
    padding:10,
    //alignItems:'center',
    backgroundColor:'lightblue'
  },
  align:{
    flexDirection:'row',
    justifyContent: 'space-between',

  }
})
export default PostsList