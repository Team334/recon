import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';

import { StackNavigator } from 'react-navigation';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import matchReducers from './app/reducers/matches';

import Networking from './app/services/networking.js';

import Home from './app/index.js';
import Scout from './app/scout.js';

import SocketIOClient from 'socket.io-client';

const ReconNav = StackNavigator({
        Home: {
            screen: Home
        },
        Scout: {
            screen: Scout
        }
    },
    // {initialRouteName: 'Scout'}
);

let store = createStore(
    combineReducers({
        matches: matchReducers
    }),
    applyMiddleware(thunk)
);

export default class Recon extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        Networking.init(this.props.dispatch);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <ReconNav />
                </View>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('recon', () => Recon);
