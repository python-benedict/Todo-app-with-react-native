import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const COLOR = {primary: '#1f145c', while: '#fff'}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={{fontWeight:'bold', color:'red'}}>TODAY TODO</Text>
          <Ionicons name='trash' style={styles.trashIcon} />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}></View>
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
  }
});
