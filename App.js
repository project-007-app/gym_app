import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Card from './Card';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
     
      <Appbar.Content title="GYM" text='justify:centre'/>
      
    </Appbar.Header>
       <View style={styles.outerContainer}>
       <Card>
         <Text>HI</Text>
        </Card>
        <Card>
         <Text>HI</Text>
        </Card>
        <Card>
         <Text>HI</Text>
        </Card>
        <Card>
         <Text>HI</Text>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f06292'
  }
});
