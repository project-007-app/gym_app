import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Aqua from './Aqua'


const HomeScreen = ()=>
{

    const [currentState, setCurrentState] = useState(false);
    const returnPageHandler = ()=>{setCurrentState(false);}
    return (<View>
         <TouchableOpacity activeOpacity="0.5" >
        <View style={styles.inputContainer}>
      
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 20 ,color:"#3399FF"}}>{'30%'}</Text>
        </ProgressCircle>
        
       
       </View>
       </TouchableOpacity>

       <TouchableOpacity activeOpacity="0.5" onPress={()=>{setCurrentState(true)}}>
           <Aqua visible={currentState} returnHandler={returnPageHandler} />
        <View style={styles.inputContainer}>
        <ProgressCircle
            percent={70}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 20 ,color:"#3399FF"}}>{'70%'}</Text>
        </ProgressCircle>
         
        </View>  
        </TouchableOpacity>     
      </View>     
    )};
const styles = StyleSheet.create({
      inputContainer : {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
      }
     });
export default HomeScreen;