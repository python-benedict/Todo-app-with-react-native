import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const COLOR = {primary: '#1f145c', while: '#fff'}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontWeight:'bold', color:'red'}}>TODAY TODO</Text>
          <Ionicons name='trash' style={styles.trashIcon} />
          <FlatList />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Write Todo'/>
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name='add' style={styles.addIcon}/>
          </View>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    color:'white',
    fontWeight: 'bold'
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer:{
    backgroundColor: 'white',
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
  }
});
