import React, { Component } from 'react';
import {View,Image,StyleSheet,TextInput,TouchableOpacity,Text,Button,StatusBar,Navigator} from 'react-native';
import { Header } from 'react-native-elements';



class LoginPage extends Component{
	render(){
		return (
		<View>
			<StatusBar
			backgroundColor='#94a3cc'
			animated={true}
			/>
			<Header
			outerContainerStyles={{backgroundColor:'#6a7cae',height:50,}}
			/>
				<Image
				style={styles.image}
				source={require('../images/logo.png')}
				/>
				<Text style={styles.Greetings}>Welcome to Guardlog</Text>
				<Text style={styles.Greetings2}>Please login</Text>
				<TextInput
				placeholder="Enter Username "
				style={styles.login}
				/>
				<TextInput
				placeholder="Enter password "
				style={styles.password}
				/>
				<TouchableOpacity
				onPress={this.login}
				style={styles.button}>
				<Text style={styles.title}>Login</Text>
				</TouchableOpacity>
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
login: {
	width:280,
	height:50,
	margin:10,
	fontSize:20,
	padding:10,
	borderWidth:1,
	borderColor:'grey',
	position:'absolute',
	top:300,
	left:30,
},
password: {
	width:280,
	height:50,
	margin:10,
	fontSize:20,
	padding:10,
	borderWidth:1,
	borderColor:'grey',
	position:'absolute',
	left:30,
	top:370,
},
image: {
	width:100,
	height:120,
	position:'absolute',
	top:110,
	left:130,
},
button: {
	width:200,
	height:45,
	backgroundColor:'#6a7cae',
	alignItems:'center',
	position:'absolute',
	top: 280,
	borderRadius:10,
	position:'absolute',
	top:460,
	left:80,
},
title: {
	fontSize:30,
	fontFamily:'arial black',
	color:'white',
},
Greetings: {
	position:'absolute',
	left:85,
	top:230,
	fontSize:20,
	fontFamily:'arial black',
},
Greetings2: {
	position:'absolute',
	left:125,
	top:260,
	fontSize:20,
	fontFamily:'arial black',
}
});

export default LoginPage;