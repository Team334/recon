import React, { Component } from 'react';

import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import Networking from './services/networking.js';

import Home from './index.js';
import Scout from './scout.js';

const ReconNav = StackNavigator({
        Home: {
            screen: Home
        },
        Scout: {
            screen: Scout
        }
    }
);

class Navigator extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        Networking.init(this.props.dispatch);
    }

    render() {
        return (
            <ReconNav />
        )
    }
}

export default connect()(Navigator);
