import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Stepper from '../stepper.js'
import Check from '../check.js'

export default class Teleop extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.input}>
                    <Stepper
                        text="CUBES PLACED ON HOME SWITCH:"
                        onChange={(value) => this.props.set('cubes_home_switch', value, 'teleop')}
                    />
                    <Stepper
                        text="CUBES PLACED ON AWAY SWITCH:"
                        onChange={(value) => this.props.set('cubes_away_switch', value, 'teleop')}
                    />
                    <Stepper
                        text="CUBES PLACED ON SCALE:"
                        onChange={(value) => this.props.set('cubes_scale', value, 'teleop')}
                    />
                    <Stepper
                        text="CUBES PLACED IN VAULT:"
                        onChange={(value) => this.props.set('cubes_vault', value, 'teleop')}
                    />
                    <Stepper
                        text="DEFENSE (1-5)"
                        onChange={(value) => this.props.set('defense', value, 'teleop')}
                        max={5}
                    />
                    <Check
                        text="TIPPED OVER"
                        onPress={(value) => this.props.set('fall', value, 'teleop')}
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
