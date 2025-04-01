import React from 'react'
import { View,Text, StyleSheet } from 'react-native';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
const PostExcerpt = ({post}) => {
  return (
<View  style = {styles.posts}>
    
        <Text style = {styles.postTitle}>{post.title}</Text>
        <Text style = {styles.postContent}>{post.body.substring(0, 100)}</Text>
        <View style={styles.align}>
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
        </View>
        <ReactionButtons post={post}/>
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

  },
 
 
})

export default PostExcerpt