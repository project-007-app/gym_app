import React,{useState} from 'react';
import {View, StyleSheet,Modal,TextInput,Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';

const Aqua = (props) =>{
  const [percent,setPercent] = useState('');
  const percentHandler = (enteredPercent)=>{
    setPercent(enteredPercent);
  }
    return(   
   
    <Modal visible={props.visible} animationType='slide'>
         
        <Appbar.Header style={{ backgroundColor: '#5BBC9D' }}>
      <Appbar.BackAction onPress={props.returnHandler} />
      <Appbar.Content title="Eat Fit" />
      <Appbar.Action icon="magnify"/>
      <Appbar.Action icon="dots-vertical"/>
    </Appbar.Header>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <View><ProgressCircle
            percent={percent}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 20 ,color:"#3399FF"}}>{percent}</Text>
        </ProgressCircle></View>
                <TextInput placeholder="Water-Consumed" onChangeText={percentHandler}/>
                <TextInput placeholder="Balance%"/>
                <TextInput placeholder="Target"/>
            </View>
            <View style={styles.inputContainer1}>
            </View>
            </View></Modal>
        
    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    inputContainer : {
      paddingTop: 5,
      flexDirection: "row",
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: 25,
      width: '90%',
      height: 200,
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
    },
    inputContainer1 : {
        paddingTop: 5,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 25,
        width: '90%',
        height: 400,
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
   });
export default Aqua;