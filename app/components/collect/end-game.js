import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
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
                    <TouchableOpacity style={styles.submit_btn} onPress={() => this.props.submit()}>
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </TouchableOpacity>
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
    },
    submit_btn: {
        marginTop: 20,
        height: 45,
        backgroundColor: '#0089ff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    submitText: {
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 7
    }
});
