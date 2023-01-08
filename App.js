import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const COLOR = {primary: '#1f145c', while: '#fff'}
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [textInput, setTextInput] = React.useState('')
  const [todos, setTodos] = React.useState([]);
  React.useEffect(()=>{
    getTodoFromUserDevice( )
  }, []);

  React.useEffect(()=>{
    saveTodoToUserDevice(todos)
  },[todos])

const ListItem = ({todo}) =>{
  return <View style={styles.listItems}>
    <View style={{flex:1}}>
      <Text style={{fontWeight:'bold',textDecorationLine: todo?.completed? 'line-through':'none',fontSize:15, color:COLOR.primary,}}>{todo?.task}</Text>
    </View>
    { !todo?.completed && (
      <TouchableOpacity style={[styles.actionIcon]} onPress={()=>markTodoComplete(todo?.id)}>
      <Ionicons name='checkmark-done-outline' color={COLOR.while} />
    </TouchableOpacity>
    )}
    <TouchableOpacity style={[styles.actionIcon1]} onPress={()=> deleteTodo(todo?.id)}>
      <Ionicons name='trash' color={COLOR.while} />
    </TouchableOpacity>
  </View>
};

  const saveTodoToUserDevice = async (todos)=>{
    try{
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos',stringifyTodos);
    }catch(e){
      console.log(e)
    }
  };

  const getTodoFromUserDevice = async () =>{
    try{
      const todos = await AsyncStorage.getItem('todos');
      if(todos != null){
        setTodos(JSON.parse(todos));
      }
    }catch(error){
        console.log(error);
    }
  };

  const addTodo =() =>{
    if(textInput==""){
        Alert.alert('Error', "Please write a todo")
    }else{
      const newTodo ={
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo])
      setTextInput('')
    }   
};

const markTodoComplete = todoId =>{
  const newTodos = todos.map(item => {
    if(item.id == todoId){
      return {...item, completed:true}
    }
      return item;    
  });
  setTodos(newTodos);
};

const deleteTodo = todoId =>{
  const newTodos = todos.filter(item=>item.id != todoId);
  setTodos(newTodos)
};

const clearTodos = () =>{
  Alert.alert('Confirm', 'Are you sure you want to clear all the todos?', [{text:'yes',onPress:()=>setTodos([])},
{text: 'No'}
])
  
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontWeight:'bold', color:'red'}}>TODAY TODO</Text>
          <Ionicons name='trash' style={styles.trashIcon} onPress={clearTodos}/>          
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
