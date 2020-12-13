import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
 
export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }
 
  render() {
    return (<View>
      <View style={styles.inputContainer}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./water-loader.json')}
      /></View></View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer : {
  
    margin: 25,
    width: '90%',
    height: 250,
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
   backgroundColor: 'white'
  }
 });