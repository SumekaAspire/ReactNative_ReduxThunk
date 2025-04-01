//changes made for async thunk 
import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit';
import {sub} from 'date-fns';
import axios from 'axios';


const POSTS_URL ="https://jsonplaceholder.typicode.com/posts"


//here create initialstate for data from api's
//everytime we create, in array, objects are there for posts, here we have to check whether api gives data properly
const initialState = {
  posts:[],
  status:'idle', //'loading' | 'succeeded' | 'failed' 
  error:null
};

export  const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
  const response = await axios.get(POSTS_URL)
  return response.data
})

//After getting from from API , now manually add 
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost)=>{
  const response =  await axios.post(POSTS_URL, initialPost)
  return response.data
})
const postsSlice = createSlice({
  //createSlice - background - using immer
  name: 'posts',
  initialState,
  reducers: {
    //  postAdded(state, action){
    //     state.push(action.payload)
    //  }
    // here it is a data structure, better to maintain in slice itself, then take postAdded as object
    postAdded: { // function
      reducer(state, action) {
        state.posts.push(action.payload);
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
        const existingPost = state.posts.find(post => post.id === postId)
        if(existingPost){
           
            console.log(`Before incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

           existingPost.reactions[reaction]++
         //existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
           console.log(`After incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

        }
    }
  },
  extraReducers(builder){    // builder is a object, if different promise will come- how to handle it by mention 
       builder
       .addCase(fetchPosts.pending, (state, action) => {// in this line pending is from async thunk
          state.status ='loading'
       })
       .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status ='succeeded' // if succeeded means we got the data from Api, then have to handle it
          //adding data and recations , because we dont have that

          let min =1;
          const loadedPosts = action.payload.map(post =>{
            post.date = sub(new Date(),{minutes: min++ }).toISOString();//here min is set manually, for posts loaded 1 by 1 , show diff
            post.reactions ={
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            }
            return post;
          });

          //Add any fetched posts to the array
        state.posts =state.posts.concat(loadedPosts) /* here concat cannot mutate posts, but actually concat do mutate the data,
         here inside slice immer package will handle it(posts have old version and create new version) */

       })
       .addCase(fetchPosts.rejected, (state, action) => {
          state.status ='loading'
          state.error= action.error.message
       })
       .addCase(addNewPost.fulfilled, (state, action) =>{
         const sortedPosts = state.posts.sort((a,b) =>{
          if(a.id > b.id) return 1
          if(a.id < b.id) return -1
          return 0
         })
         action.payload.id = sortedPosts[sortedPosts.length -1].id + 1;
         action.payload.userId =  Number(action.payload.userId)
         action.payload.date = new Date.toISOString();
         action.payload.reactions ={
          thumbsup: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
         }

         console.log("payload",action.payload)
         console.log("New post added:", action.payload);  // Debugging line
         console.log(state.posts); // Check if the new post is added
         state.posts.push(action.payload)
         console.log(state.posts); // Check if the new post is added
       })
    }    
});

//here export actions and reducers
//initialState structure is changed,can change slice itself, because all component is accessed by variable - selectAllPosts 
export const selectAllPosts = state => state.posts.posts; // if any changes in future, do changes in slice file only, it automatically update.
export const getPostsStatus= state => state.posts.status
export const getPostsError= state => state.posts.error
export const {postAdded, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;













// import {createSlice, nanoid} from '@reduxjs/toolkit';
// import {sub} from 'date-fns';

// const initialState = [
//   {
//     id: '1',
//     title: 'Learn Redux toolkit',
//     content: 'It is easy',
//     // date is added after created the app
//     date: sub(new Date(), {minutes: 10}).toISOString(),
//     reactions: {
//       thumbsup: 2,
//       wow: 3,
//       heart: 4,
//       rocket: 5,
//       coffee: 6,
//           },
//   },
//   {
//     id: '2',
//     title: 'React Redux',
//     content: 'React topic',
//     date: sub(new Date(), {minutes: 5}).toISOString(),
//     reactions: {
//       thumbsup: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0,
//     },
//   },
// ];

// const postsSlice = createSlice({
//   //createSlice - background - using immer
//   name: 'posts',
//   initialState,
//   reducers: {
//     //  postAdded(state, action){
//     //     state.push(action.payload)
//     //  }
//     // here it is a data structure, better to maintain in slice itself, then take postAdded as object
//     postAdded: { // funcyion
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       //prepare is a callback function, here avoid error
//       prepare(title, content, userId) {
//         //after dispatch call action comes here,creates payload and return, then reducer goes from prepare, then payload is pushed to state.
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content,
//             date: new Date().toISOString(),
//             userId,
//             reactions: {  // here added initial payload, not getting from user
//               thumbsup: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0,
//             },
//           },
//         };
//       },
//     },
//     reactionAdded(state,action){
//         const{postId, reaction}= action.payload //created variable and destructure it
//         const existingPost = state.find(post => post.id === postId)
//         if(existingPost){
           
//             console.log(`Before incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

//            existingPost.reactions[reaction]++
//          //existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
//            console.log(`After incrementing: ${reaction}: ${existingPost.reactions[reaction]}`);

//         }
//     }
//   },
// });

// //here export actions and reducers

// export const selectAllPosts = state => state.posts; // if any changes in future, do changes in slice file only, it automatically upadate.
// export const {postAdded, reactionAdded} = postsSlice.actions;
// export default postsSlice.reducer;
