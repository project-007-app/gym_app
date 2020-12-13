import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Appbar } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
     
      <Appbar.Content title="GYM" />
      
    </Appbar.Header>
       
       <Card>
         <Text>HI</Text>
        </Card>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
 
});
