import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 1,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 2,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 3,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 4,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 5,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 6,
    },
    {
      name: 'Ahmad',
      age: 27,
      profession: 'Cook',
      id: 7,
    },
  ])

  const pressHandler = (name) => {
    Alert.alert(
      `This is ${name}'s button`,
      "Stop touching me"
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem= { ({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.name)}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    fontSize: 40,
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
  }
});
