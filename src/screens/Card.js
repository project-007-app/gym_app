import React from 'react';
 import { StyleSheet, TextInput, View } from 'react-native';

 const Card = ()=>{
     return(<View style={styles.inputContainer}>
         <TextInput placeholder='Body Water % = 56'/>    
       </View>
       );
 }
 const styles = StyleSheet.create({
     inputContainer : {
         marginTop: 30,
         marginLeft:30,
         marginRight:30,
         width: "auto",
         height: 170,
         borderRadius: 20,
         alignItems: 'center',
         shadowColor: 'black',
         shadowOffset: {
           width: 3,
           height: 3
         },
        shadowRadius: 1,
        shadowOpacity:0.5,
        elevation: 5,
        backgroundColor: '#c5cae9'
       }
 }
 );
 export default Card;