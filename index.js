import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import matchReducers from './app/reducers/matches';

import Navigator from './app/navigator.js';

import SocketIOClient from 'socket.io-client';

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
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <Navigator />
                </View>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('recon', () => Recon);
