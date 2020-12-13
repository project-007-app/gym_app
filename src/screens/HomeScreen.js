import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../screens/Card';

const HomeScreen = ()=>
{
    return <View>
         <View style={styles.outerContainer}>
      <ScrollView>
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
        </ScrollView>
      </View>
      
      
    </View>
    
};

const styles = StyleSheet.create({});

export default HomeScreen;