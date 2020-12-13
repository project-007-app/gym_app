import React from 'react';
import LottieView from 'lottie-react-native';
 
export default class BasicExample extends React.Component {
  render() {
    return <LottieView source={require('./water.json')} autoPlay loop />;
  }
}