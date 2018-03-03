import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import matchReducers from './app/reducers/matches';

import Home from './app/index.js';
import Scout from './app/scout.js';

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
    })
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
                    <ReconNav />
                </View>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('recon', () => Recon);
