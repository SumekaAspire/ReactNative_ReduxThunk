import { useSelector } from "react-redux";
import { selectAllUsers} from "../users/usersSlice";
import { View, Text } from "react-native";



const PostAuthor =({userId})=>{
    const users = useSelector(selectAllUsers)
    const author = users.find(user =>user.id === userId);
    return(
     <View>
        <Text>by {author? author.name : 'Unknown author'}</Text>
     </View>
    )
}

export default PostAuthor;