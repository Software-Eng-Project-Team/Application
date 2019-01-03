import React, { Component } from 'react';
import {View,Image,StyleSheet,Animated,StatusBar} from 'react-native';



class ImageLoader extends Component {
state={
	fadeAmin: new Animated.Value(1)
}


componentDidMount()
{
	Animated.timing(
			this.state.fadeAmin,
			{
				toValue:0,
				duration:4000,
			}
		).start()
}
	
	render() {
		<StatusBar
			backgroundColor='#94a3cc'
			animated={true}
			/>
	let {fadeAmin} = this.state
		return(
			<Animated.View style={{opacity:fadeAmin}}>
			<StatusBar
			backgroundColor='#94a3cc'
			animated={true}
			/>
				<Image
				style={styles.image}
				source={require('./images/Guardlog.png')}
				/>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create ({
	image:{
		position:'absolute',
		width:300,
		height:80,
		left:30,
		top:240,
	}
});

export default ImageLoader;