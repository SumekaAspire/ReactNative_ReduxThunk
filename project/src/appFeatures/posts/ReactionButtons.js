import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { View, TouchableOpacity,StyleSheet, Text } from "react-native";

const reactionEmoji ={
    thumbsup: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕️',
    
}

const ReactionButtons =({post})=>{
   const dispatch  = useDispatch()
const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
    return(

        <TouchableOpacity
      key={name}
      style={styles.button}
      onPress={() => {
        dispatch(reactionAdded({ postId: post.id, reaction: name }));
      }}
    >
      <Text style={styles.buttonText}>
        {emoji} {post.reactions[name]}
      </Text>
    </TouchableOpacity>
        
    )
})

    return(
        <View style={styles.reactionButtonsContainer}>{reactionButtons}</View>
    )
}

const styles = StyleSheet.create({
    reactionButtonsContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', // align buttons to the left
        flexWrap: 'nowrap', // prevent wrapping to the next line
        width: '100%', // full available width
      },
      button: {
        padding: 10,
        backgroundColor: 'transparent', // transparent background
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 13,
        color: 'black',
      },
    });
export default ReactionButtons;
