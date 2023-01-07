import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const COLOR = {primary: '#1f145c', while: '#fff'}


export default function App() {
  const [textInput, setTextInput] = React.useState('')
  const [todos, setTodos] = React.useState([
    {id:1, task:'first todo', completed:true},
    {id:2, task:'second todo', completed:false}
])

const ListItem = ({todo}) =>{
  return <View style={styles.listItems}>
    <View style={{flex:1}}>
      <Text style={{fontWeight:'bold',textDecorationLine: todo?.completed? 'line-through':'none',           fontSize:15, color:COLOR.primary,}}>{todo?.task}</Text>
    </View>
    { !todo?.completed && (
      <TouchableOpacity style={[styles.actionIcon]}>
      <Ionicons name='checkmark-done-outline' color={COLOR.while} />
    </TouchableOpacity>
    )}
    <TouchableOpacity style={[styles.actionIcon1]}>
      <Ionicons name='trash' color={COLOR.while} />
    </TouchableOpacity>
  </View>
};

  const addTodo =() =>{
    
    const newTodo ={
      id: Math.random(),
      task: textInput,
      completed: false,
    };
    setTodos([...todos, newTodo])
    setTextInput('')
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontWeight:'bold', color:'red'}}>TODAY TODO</Text>
          <Ionicons name='trash' style={styles.trashIcon} />          
      </View>
      <FlatList 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding:20, paddingBottom:100}}
          data={todos}
          renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Write Todo'
          value={textInput}
          onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Ionicons name='add' style={styles.addIcon}/>
          </View>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionIcon:{
    width:25,
    height:25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginLeft: 5, 
  },
  actionIcon1:{
    width:25,
    height:25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginLeft: 5, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  trashIcon:{
    fontSize:20,
    color:'red',
    fontWeight: 'bold'
  },
  addIcon:{
    fontSize:30,
    color:'#eeeee4',
    fontWeight: 'bold'
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    color: '#eeeee4',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer:{
    backgroundColor: '#eeeee4',
    elevation: 40,
    flex:1,
    height:50,
    marginVertical: 50,
    marginRight: 20,
    borderRadius: 30,
     paddingHorizontal: 20,
     borderWidth: 0.2,
     justifyContent: 'center',
     alignContent: 'center',
  },
  iconContainer:{
    height: 50,
    width: 50,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }, 
  listItems:{
    padding:20,
    backgroundColor: '#eeeee4',
    flexDirection: 'row',
    elevation: 12,
    borderRadius:7,
    marginVertical: 10,
    
  }
});
