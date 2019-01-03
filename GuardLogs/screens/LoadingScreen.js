import React, {Component} from 'react';
import {Text,View,Image,Animated,StyleSheet} from 'react-native';

class LoadingScreen extends Component
{
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
  	let {fadeAmin}= this.state
    return (
    	<Animated.View style={{opacity:fadeAmin}}>
	    	<Image
	    	style={styles.image}
	    	source={require('./Guardlog.png')}/>
    	</Animated.View>	
    );
  }
}
const styles = StyleSheet.create({
	image: {
		position:'absolute',
		width:300,
		height:80,
		top:200,
		left:30,
	}
});
export default LoadingScreen;