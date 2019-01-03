import React, { Component } from 'react';
import {
	TextInput,
	View,
	Image,
	StyleSheet,
	AsyncStorage,
	Text,
	Button,
	StatusBar,
	KeyboardAvoidingView,
	Alert,
	ActivityIndicator,
	Modal,
} from 'react-native';
import Animate from './Animate';
import LoadingScreen from './LoadingScreen';
import firebase from 'firebase';
import Loading from 'react-native-whc-loading'





var config = {
	apiKey: "AIzaSyAscG0jHBul7C-4Q1LjSFhNPv0wcLUqvkA",
	authDomain: "guardlogs-9d2fe.firebaseapp.com",
	databaseURL: "https://guardlogs-9d2fe.firebaseio.com",
	projectId: "guardlogs-9d2fe",
	storageBucket: "guardlogs-9d2fe.appspot.com",
	messagingSenderId: "1015271803255"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}



class LoginPage extends Component{
	static navigationOptions = {
		header: null,
	};
	state = {
    loaded: false
  }
  constructor(props) {
    super(props);
	Animate.load(v => this.setState({ loaded: true })); 
	this.state = ({ 
		email:'',
		password:''
		
 
	})
}

	loginUser = (email,password) => {
		
		try {
			if (email == '' || password == '') {
				alert('empty')
			} else { 
				this.refs.loading.show();
				var ref = firebase.database().ref('Users');
				ref.on('value',(data) => {
					var username = data.val();
					var qwe = data.val();
					var keys = Object.keys(username);
					for (var n=0; n<keys.length; n++){
						var k = keys[n];
						var user = username[k].Username;
						var pass = qwe[k].Password;
						this.refs.loading.close();
						if (user == email) {
							if(pass==password){
								this.refs.loading.close();
								alert('Successfully login');
								AsyncStorage.setItem('user', email);
								this.setState({
									email: '',
									password: '',
								});
								this.props.navigation.navigate('Profile', { otherParam: email });	
							}else{
								alert('invalid inputs');
							}
						}
					}
				})

			} 
			}
		
		catch (error) {
			console.log(error.toString())	
		}
	}

	render(){
		
		return ( 
			
		<View style={{ backgroundColor: '#485578'}}>
		{this.state.loaded ? 
		
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-50}>
			<StatusBar
			backgroundColor='#94a3cc'
			animated={true}
			/>
			<View
			style={{
			justifyContent:'space-between',
			alignItems:'center',
			justifyContent:'center',
			}}
			>
			<Loading ref="loading" />
			<Text> </Text>
			<Text> </Text>
			<Text> </Text> 
			<Text> </Text>
			<Text> </Text>  
			
			<Image
			style={styles.image}
			source={require('./logo.png')}
			/>
			<Text></Text>
			<Text></Text>
			<Text style={styles.Greetings}>Welcome to GuardLogs</Text>
			<Text style={styles.Greetings2}>- Please login -</Text>
			<Text> </Text>
			<TextInput
			style={{ fontSize: 20, width: 250, color: 'white', borderColor: 'white', color: 'white', borderWidth: 1, padding: 10, borderRadius: 10}}
			placeholder ='Enter email'
			placeholderTextColor='white'
			autoCapitalize='none'
			onChangeText={(email) => this.setState({ email })} 
			value={this.state.email}
			/>
			<Text></Text>
			<TextInput
			style={{ fontSize: 20, width: 250,color:'white', borderColor: 'white', borderWidth:1, padding:10,borderRadius:10}}
			placeholder='Enter password'
			placeholderTextColor='white' 
			secureTextEntry={true} 
			onChangeText={(password) => this.setState({ password })}
			value={this.state.password}	
			/>
			<Text> </Text>
			<Text> </Text>
			<Button 
			color='#6a7cae'
			title='Login' 
			onPress={() => this.loginUser(this.state.email,this.state.password)}
			/>
			<Text> </Text>
			<Text> </Text>
			<Text> </Text>
			<Text> </Text>	
			<Text> </Text>
			<Text> </Text>
			<Text> </Text>
			</View>

		</KeyboardAvoidingView>
			 : <LoadingScreen/>}
      	</View>
		  
		);
	}

}


const styles = StyleSheet.create({

divider1: {
	backgroundColor:'grey',
	width:250,
	height:1,
	position:'absolute',
	top:325,
	left:60,
},
loginStyle: {
	fontSize:20,
	position:'absolute',
	left:70,
	top:280,
	color: 'white',
},

divider2: {
	backgroundColor:'grey',
	width:250,
	height:1,
	position:'absolute',
	top:385,
	left:60,
},
passStyle: {
	fontSize:20,
	position:'absolute',
	left:70,
	top:340,
	color: 'white',
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
	color:'white',
	fontSize:20,
	fontFamily:'arial black',
},
Greetings2: {
	color: 'white',
	fontSize:20,
	fontFamily:'arial black',
}
});

export default LoginPage;

