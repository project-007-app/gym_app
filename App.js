import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../gym_app/src/screens/HomeScreen';


const navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "EAT FIT",
        headerTitleStyle: {
          color: "white",
          textAlign:"center"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
      };
    }
  },
  
});



export default createAppContainer(navigator);


