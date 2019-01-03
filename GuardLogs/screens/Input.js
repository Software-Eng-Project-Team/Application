import React, { Component } from 'react';
import {
    TextInput,
    View,
    Image,
    StyleSheet,
    AsyncStorage,
    Text,
    ScrollView,
    StatusBar,
    KeyboardAvoidingView,
    ListView,
} from 'react-native';
import firebase from 'firebase';
import {Card} from 'react-native-elements';

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

class Input extends Component{
static navigationOptions = {
    headerStyle: {
        backgroundColor: '#6a7cae'
    },
};
constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
        itemDataSource  : ds,
        
    }
    this.itemsRef = this.getRef().child('Logs');

    this.renderRow=this.renderRow.bind(this);
}
getRef(){
    return firebase.database().ref();
}

componentWillMount(){
    this.getItems(this.itemsRef);
}
componentDidMount(){
    this.getItems(this.itemsRef);
}
getItems(itemsRef){
   itemsRef.on('value',(snap) =>{
        let items = [];
        snap.forEach((child)=> {
            var guard = child.val().Guard;
            AsyncStorage.getItem('user').then((value) => {
                let show = value.toString();
                if(show==guard){
                    id = child.key;
                    AsyncStorage.setItem('id', id);
                    Time =child.val().Time;
                    AsyncStorage.setItem('Time', Time);
                    name = child.val().Name;
                    AsyncStorage.setItem('name', name);
                    event = child.val().Event;
                    AsyncStorage.setItem('event', event);
                    timeout = child.val().Timeout;
                    AsyncStorage.setItem('timeout', timeout);
                    guard = child.val().Guard;
                    AsyncStorage.setItem('guard', guard);
                    items.push({
                        title: child.val().Guard,
                        title2: child.val().Time,
                        title3: child.val().Name,
                        title4: child.val().Event,
                        title5: child.val().Timeout,
                        title6: child.val().Date,
                        _key: child.key,
                        
                    });
                    this.setState({
                        itemDataSource: this.state.itemDataSource.cloneWithRows(items),
                    });
                    this.refs.loading.close();
                }
                
            });
            
        })
            
   });
    

}
edit = () => {
    AsyncStorage.getItem('id').then((value) => {
        let id = value.toString();
        AsyncStorage.getItem('timein').then((value) => {
            let timein = value.toString();
            AsyncStorage.getItem('name').then((value) => {
                let name = value.toString();
                AsyncStorage.getItem('event').then((value) => {
                    let event = value.toString();
                   this.props.navigation.navigate('edit', { timeinParam: timein, nameParam: name, eventParam: event, });
                })
            })
        })
    })
}

renderRow(item){
    return(
        <ScrollView>
            <Card >
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Date</Text>
                        <Text style={{fontSize:18}}>{item.title6}</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Time</Text>
                                <Text style={{ fontSize: 18 }}>{item.title2}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name</Text>
                                        <Text style={{ fontSize: 18 }}>{item.title3}</Text>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Event</Text>
                                                <Text style={{ fontSize: 18 }}>{item.title4}</Text>
                </View>
                <Text></Text>
            </Card>
        </ScrollView>
    );
}

render()
{
    
    return(
        <View>
            <ListView
                dataSource={this.state.itemDataSource}
                renderRow={this.renderRow}
            />
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B6A6BB',
    }
});

export default Input;