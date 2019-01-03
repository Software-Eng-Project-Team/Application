import React, { Component } from 'react';
import { Text, Button, TextInput, KeyboardAvoidingView, View, StyleSheet, ScrollView, DrawerLayoutAndroid, AsyncStorage, Image, Alert } from 'react-native';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

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

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            TimeIn: '',
            Name: '',
            Event: '',
            Timeout: '',
            date: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
        }
    }
    update = () => {
        const { TimeIn, Name, Event, Timeout, date, month, year } = this.state;

        if (TimeIn == '' || Name == '' || Event == '' || Timeout == '') {
            alert('empty fields');
        } else {
            Alert.alert(
                'Confirmation',
                'Are you sure you want to save update ?',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'Saved', onPress: () => AsyncStorage.getItem('user').then((value) => {
                            let show = value.toString();
                            AsyncStorage.getItem('id').then((value) => {
                                const id = value.toString();
                                firebase.database().ref('Logs/' + id).set({
                                    TimeIn,
                                    Name,
                                    Event,
                                    Timeout,
                                    Date: date + '/' + month + '/' + year,
                                    Guard: show,
                                })
                            })
                            this.setState({
                                TimeIn: '',
                                Name: '',
                                Event: '',
                                Timeout: '',
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
                                                var timein = val.TimeIn;
                                                var name = val.Name;
                                                var timeout = val.Timeout;
                                                AsyncStorage.setItem('guards', guards);
                                                this.props.navigation.navigate('Input', { show: guards, show1: timein, show2: name, show3: timeout });
                                            })
                                        })
                                    },
                                ]
                            )
                        })
                    },

                ],
                { cancelable: false }
            )



        }

    }



    render() {
        const { navigation } = this.props;
        const timeinParam = navigation.getParam('timeinParam', 'some default value');
        const nameParam = navigation.getParam('nameParam', 'some default value');
        const eventParam = navigation.getParam('eventParam', 'some default value');
        const TimeoutParam = navigation.getParam('timeoutParam', 'some default value')
        return (
                    <ScrollView>
                        <Text style={styles.Guest}>Time-in</Text>
                        <TextInput
                            style={styles.Input2}
                            clearButtonMode='always'
                            onChangeText={(TimeIn) => this.setState({ TimeIn })}
                            placeholder={timeinParam}
                            value={this.state.TimeIn}
                        />
                        <Text style={styles.Guest}>Name</Text>
                        <TextInput
                            style={styles.Input2}
                            placeholder={nameParam}
                            onChangeText={(Name) => this.setState({ Name })}
                            value={this.state.Name}
                        />
                        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={2}>
                            <Text style={styles.Guest}>Event</Text>
                            <TextInput
                                style={styles.Input3}
                                placeholder={eventParam}
                                multiline={true}
                                onChangeText={(Event) => this.setState({ Event })}
                                value={this.state.Event}
                            />
                            <Text style={styles.Guest}>Time-out</Text>
                            <TextInput
                                style={styles.Input4}
                                placeholder={TimeoutParam}
                                onChangeText={(Timeout) => this.setState({ Timeout })}
                                value={this.state.Timeout}
                            />
                            <Button
                                title='update'
                                onPress={this.update}
                            />
                        </KeyboardAvoidingView>

                    </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    Guest: {
        fontSize: 25,
    },
    Input1: {
        fontSize: 15,
        borderWidth: 1,
        width: 320,
        height: 45,
        borderColor: 'grey',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    Input2: {
        fontSize: 15,
        borderWidth: 1,
        width: 320,
        height: 45,
        borderColor: 'grey',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    Input3: {
        fontSize: 15,
        borderWidth: 1,
        width: 320,
        height: 200,
        borderColor: 'grey',
        textAlignVertical: 'top',
    },
    Input4: {
        fontSize: 15,
        borderWidth: 1,
        width: 320,
        height: 45,
        borderColor: 'grey',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
});
export default withNavigation(Edit);