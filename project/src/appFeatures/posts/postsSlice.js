import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'Learn Redux toolkit',
    content: 'It is easy',
    // date is added after created the app
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsup: 2,
      wow: 3,
      heart: 4,
      rocket: 5,
      coffee: 6,
          },
  },
  {
    id: '2',
    title: 'React Redux',
    content: 'React topic',
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
      thumbsup: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  //createSlice - background - using immer
  name: 'posts',
  initialState,
  reducers: {
    //  postAdded(state, action){
    //     state.push(action.payload)
    //  }
    // here it is a data structure, better to maintain in slice itself, then take postAdded as object
    postAdded: { // funcyion
      reducer(state, action) {
        state.push(action.payload);
      },
      //prepare is a callback function, here avoid error
      prepare(title, content, userId) {
        //after dispatch call action comes here,creates payload and return, then reducer goes from prepare, then payload is pushed to state.
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {  // here added initial payload, not getting from user
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state,action){
        const{postId, reaction}= action.payload //created variable and destructure it
        const existingPost = state.find(post => post.id === postId)
        if(existingPost){
           
            console.log(`Before incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

           existingPost.reactions[reaction]++
         //existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
           console.log(`After incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

        }
    }
  },
});

//here export actions and reducers

export const selectAllPosts = state => state.posts; // if any changes in future, do changes in slice file only, it automatically upadate.
export const {postAdded, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;
