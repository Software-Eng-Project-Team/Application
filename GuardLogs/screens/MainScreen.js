import React, {Component} from 'react';
import {Text,View,Image,StyleSheet,Header} from 'react-native';
import Animate from './Animate';
import LoadingScreen from './LoadingScreen';




class MainScreen extends Component{
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#6a7cae'
    },
  };
	state = {
    loaded: false
  }
  constructor() {
    super();
    Animate.load(v => this.setState({ loaded: true }));
  }
	render(){
		return(
    <View>
        {this.state.loaded ? <LoginPage /> : <LoadingScreen/>}
      	</View>
		);
	}
}
export default MainScreen;