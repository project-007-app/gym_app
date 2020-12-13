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
        margin: 70,
        width: '90%',
        height: 100,
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
