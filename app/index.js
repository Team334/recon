import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Match from './components/match.js'
import IconButton from './components/icon.js';

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Recon`,
        headerRight: <IconButton onPress={() => navigation.navigate('Scout')}/>,
        headerStyle: {backgroundColor: '#262626'},
        headerTintColor: 'white'
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Match color="red"/>
                <Match color="blue"/>
                <Match color="red"/>
                <Match color="red"/>
                <Match color="blue"/>
                <Match color="red"/>
                <Match color="blue"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEEF5'
    }
});
