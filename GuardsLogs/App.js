import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import LoadingScreen from './/screens//loadingscreen';
import ImageLoader from './Animate';
import LoginPage from './screens/loginscreen'



class App extends Component {
  
  state = {
    loaded: false
  }
  constructor() {
    super();
    LoadingScreen.load(v => this.setState({ loaded: true }));
  }

  render() {
    
    return (
      <View>
        {this.state.loaded ? <LoginPage /> : <ImageLoader />}
        
      </View>
    );
  }
}
export default App;