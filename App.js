import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function App() {
  const COLOR = {primary: '#1f145c', while: '#fff'}
  return (
    <View style={styles.container}>
      <Text>Welcome to today todo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
