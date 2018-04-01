import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Check from '../check.js'

export default class Auton extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.input}>
                    <Check
                        text="AUTON"
                        onPress={(value) => this.props.set('auton', value, 'auton')}
                    />
                    <Check
                        text="CROSSED BASELINE"
                        onPress={(value) => this.props.set('passed_baseline', value, 'auton')}
                    />
                    <Check
                        text="PLACED CUBE ON SWITCH"
                        onPress={(value) => this.props.set('placed_switch', value, 'auton')}
                    />
                    <Check
                        text="MISPLACED CUBE"
                        onPress={(value) => this.props.set('placed_opponents_switch', value, 'auton')}
                    />
                    <Check
                        text="PLACED CUBE ON SCALE"
                        onPress={(value) => this.props.set('placed_scale', value, 'auton')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 7
    },

    heading: {
        color: '#545454',
        fontSize: 16,
    },
    input: {
        marginTop: 5
    }
});
