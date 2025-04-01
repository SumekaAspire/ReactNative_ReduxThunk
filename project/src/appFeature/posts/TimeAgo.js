import { parseISO,formatDistanceToNow } from "date-fns";
import { View,Text } from "react-native";

//logic: after clicked save post, can calulate how many minutes/seconds/hours ago it is posted.

const TimeAgo =({timestamp})=>{

    let timeAgo =''
    if(timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo =`${timePeriod} ago` 
    }
    return(
        <View>
            <Text>{timeAgo}</Text>
        </View>
    )
}

export default TimeAgo;