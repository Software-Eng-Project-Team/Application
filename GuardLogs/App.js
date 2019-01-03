import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './screens/ProfileScreen'; 
import {StyleSheet} from 'react-native'; 
import LoginPage from './screens/LoginScreen';
import Input from './screens/Input';  
import Edit from './screens/edit';

const RootStack = createStackNavigator(  
{
  Input : Input,  
  Profile: ProfileScreen,
  Login: LoginPage, 
  edit: Edit
},
{
  initialRouteName:'login',
}
);

export default class App extends React.Component{
  static navigationOptions = {
    
  };
	render() {
    return (
    	<RootStack style={styles.color}/>
    )
  }
}
const styles = StyleSheet.create({
	color:{
		backgroundColor:'#6a7cae'
	}
})