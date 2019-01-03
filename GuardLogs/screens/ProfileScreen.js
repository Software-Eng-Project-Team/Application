import React, { Component } from 'react';
import { Text, Button, TextInput, KeyboardAvoidingView, View, StyleSheet, ScrollView, DrawerLayoutAndroid, AsyncStorage,Image,Alert} from 'react-native';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';
import OfflineNotice from './Internet';


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

class ProfileScreen extends Component {	
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#6a7cae'
		},
	};
	
	constructor(props){
		super(props)
		this.state={
			Time: '',
			Name:'',
			Event:'',
			date : new Date().getDate(),
			month :new Date().getMonth() + 1,
			year : new Date().getFullYear(),
		}
	}

	componentDidMount() {
 
    this.Clock = setInterval( () => this.GetTime(), 1000 );
 
  }
 
  componentWillUnmount(){
 
    clearInterval(this.Clock);
 
  }
 
  GetTime() {
 
    // Creating variables to hold time.
    var date, TimeType, hour, minutes, seconds, fullTime;
 
    // Creating Date() function object.
    date = new Date();
 
    // Getting current hour from Date object.
    hour = date.getHours(); 
 
    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if(hour <= 11)
    {
 
      TimeType = 'AM';
 
    }
    else{
 
      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = 'PM';
 
    }
 
 
    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if( hour > 12 )
    {
      hour = hour - 12;
    }
 
    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if( hour == 0 )
    {
        hour = 12;
    } 
 
 
    // Getting the current minutes from date object.
    minutes = date.getMinutes();
 
    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if(minutes < 10)
    {
      minutes = '0' + minutes.toString();
    }
 
 
    //Getting current seconds from date object.
    seconds = date.getSeconds();
 
    // If seconds value is less than 10 then add 0 before seconds.
    if(seconds < 10)
    {
      seconds = '0' + seconds.toString();
    }
 
 
    // Adding all the variables in fullTime variable.
    fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
 
 
    // Setting up fullTime variable in State.
    this.setState({
 
      Time: fullTime
 
    });
  }

	input = () =>{
		this.props.navigation.navigate('Input');
	}
	submit = () =>{
		const {Name,Event,date,month,year} = this.state;
		
		if (Name==''|| Event==''){
			alert('empty fields');
		}else{
			Alert.alert(
				'Confirmation',
				'Are you sure you want to save data ?',
				[
					{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
					{
						text: 'Saved', onPress: () => AsyncStorage.getItem('user').then((value) => {
							let show = value.toString();
							firebase.database().ref('Logs/').push({
								Time:this.state.Time,
								Name,
								Event,
								Date: date + '/' + month + '/' + year,
								Guard: show,
							})
							this.setState({
								Name: '',
								Event: '',
							})
							Alert.alert(
								'Message',
								'Youre data is saved you can now view your data',
								[
									{
										text: 'ok', onPress: () => firebase.database().ref('Logs').once('value', (data) => {
												data.forEach((data) => {
													var val = data.val();
													var guards = val.Guard;
													var time = val.Time;
													var name = val.Name;
													AsyncStorage.setItem('guards', guards);
													this.props.navigation.navigate('Input', { show: guards,show1:time,show2:name});
												})
											})},
								]
							)
						})},

				],
				{ cancelable: false }
			)
			
			
			
		}
		
	}

	
	
	render(){
		const { navigation } = this.props;
		const otherParam = navigation.getParam('otherParam', 'some default value');
		var navigationView = (
			<View style={{ flex: 1, backgroundColor: '#485578' }}>
				<Image
					style={{ width: 140, height: 160, position: 'absolute', left: 80, top: 20, }}
					source={require('./logo.png')}
				/>
				<Text style={{fontSize:20,top:180,left:40,color:'white'}}>Welcome to GuardLogs</Text>

				<Text style={{ fontSize: 18, top: 190, left: 60, color: 'white'}}>{otherParam}</Text>
				<Text style={{ fontSize: 18, position: 'absolute', top: 360, left: 100, color: 'white' }}
				onPress={this.input}>
				View Logs
				</Text>
			</View>
		);
		return (
			<DrawerLayoutAndroid
				
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}>
			<View style={styles.container}>
			<OfflineNotice />
			<ScrollView>
				<Text></Text>
				<Text style={styles.Guest}>Time-in</Text>
				<Text>{this.state.Time}</Text>
				<Text style={styles.Guest}>Name</Text>
				<TextInput
					style={styles.Input2}
					placeholder='Enter Name'
					onChangeText={(Name) => this.setState({ Name })}
					value={this.state.Name}
				/>
				<KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={2}>
				<Text style={styles.Guest}>Event</Text>
				<TextInput
				style={styles.Input3}
				placeholder='Enter event happened'
				multiline={true}
				onChangeText={(Event) => this.setState({ Event })}
				value={this.state.Event}
				/>
				
				<Text> </Text>
				<Button
				color='#6a7cae'
				title='Submit'
				placeholder='Enter text...'
				onPress ={this.submit}
				/>
				</KeyboardAvoidingView>

			</ScrollView>
			 
			</View>
			</DrawerLayoutAndroid>
		)
	}
}
const styles = StyleSheet.create({
container:{
	padding:20
},
Guest:{
	fontSize:25,
},
Input1:{
	fontSize:15,
	borderWidth:1,
	width:320,
	height:45,
	borderColor:'#6a7cae',
	
},
Input2:{
	fontSize:15,
	borderWidth:1,
	width:320,
	height:45,
	borderColor:'#6a7cae',
	
},
Input3:{
	fontSize:15,
	borderWidth:1,
	width:320,
	height:200,
	borderColor:'#6a7cae',
	textAlignVertical:'top',
},
});
export default withNavigation(ProfileScreen);