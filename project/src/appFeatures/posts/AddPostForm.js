import {useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit'; // nanoid is used from toolkit
import {postAdded} from './postsSlice';
import {selectAllUsers} from '../users/usersSlice';
import { Picker } from '@react-native-picker/picker';


const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const users = useSelector(selectAllUsers);

  const onTitleChanged = newTitle => setTitle(newTitle);
  const onContentChanged = newContent => setContent(newContent);
  const onAuthorChanged = newUserId=> setUserId(newUserId);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        // postAdded({id: nanoid(), // here it is a data structure, better to maintain in slice itself
        //     title,
        //     content})
        postAdded(title, content, userId),
      );
      setContent('');
      setTitle('');
      setUserId('');
    }
  };

const canSave= Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <View>
      <Text style={styles.heading}>ADD NEW POST</Text>
      <View style={styles.form}>
        <Text style={styles.formTitle}>TITLE:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title here.."
          onChangeText={onTitleChanged}
          value={title}
        />
        <Text style={styles.formTitle}>AUTHOR:</Text>
        <Picker
          selectedValue={userId}
          onValueChange={onAuthorChanged}
          style={styles.picker}>
          <Picker.Item label="Select an author" value="" />
          {users.map(user => (
            <Picker.Item key={user.id} label={user.name} value={user.id} />
          ))}
        </Picker>
        <Text style={styles.formTitle}>CONTENT:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter content here.."
          onChangeText={onContentChanged}
          value={content}
        />
        <Button 
        title="Save Post" 
        onPress={onSavePostClicked} 
        disabled={!canSave}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'left',
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 7,
  },
  formTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  },
  form: {
    borderColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
    padding: 15,
    backgroundColor: 'lightblue',
  },
  textInput: {
    height: 40,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
  },
  picker: {
    height: 48.5,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
  },
});
export default AddPostForm;
