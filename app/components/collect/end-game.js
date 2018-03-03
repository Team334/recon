import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Check from '../check.js'
import Stepper from '../stepper.js'
import Input from '../text-input.js'

export default class EndGame extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.input}>
                    <Check
                        text="CLIMBED"
                        onPress={(value) => this.props.set('climber', value, 'end')}
                    />
                    <Stepper
                        text="TEAMS AIDED IN CLIMBING:"
                        onChange={(value) => this.props.set('climb_aid', value, 'end')}
                        max={2}
                    />
                    <Stepper
                        text="FOULS:"
                        onChange={(value) => this.props.set('fouls', value, 'end')}
                    />
                    <Input
                        text="FINAL ALLIANCE SCORE:"
                        placeholder="334"
                        type="numeric"
                        onChange={(value) => this.props.set('score', value.text, 'end')}
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
