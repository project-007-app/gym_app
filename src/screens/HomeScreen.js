import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Card } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'








const HomeScreen = ()=>
{
    return (<View>
        <Card style={styles.card}>
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
        <Text> </Text>
        </Card>
        <Card style={styles.card}>
         <Text>HI</Text>
        </Card>
        
      </View>
      
      
  
    
    )};

const styles = StyleSheet.create({
    card:{
        margin:30,
        height:100,
        width:"80%",
    },

});

export default HomeScreen;