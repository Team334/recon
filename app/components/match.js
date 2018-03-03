import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Animated,
    Easing
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Check from './check.js';

export default class Match extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            rotate: new Animated.Value(0),
            cardHeight: new Animated.Value(0)
        }

        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        if (!this.state.open) {
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 90,
                    duration: 100
                }
            ).start();

            Animated.timing(
                this.state.cardHeight,
                {
                    toValue: 175,
                    duration: 150
                }
            ).start();

        } else {
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 0,
                    duration: 100
                }
            ).start();

            Animated.timing(
                this.state.cardHeight,
                {
                    toValue: 0,
                    duration: 100
                }
            ).start();
        }

        this.setState(previousState => {
            return { open: !previousState.open };
        });
    }

    render() {
        // Set background color based off of "color" prop passed in. If red, set to red. Else, set to blue.
        var color = this.props.color === "red" ? '#E66840' : '#4D98E4';

        const rotateValue = this.state.rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.container}>
                <View style={[styles.heading, {backgroundColor: color}]}>
                    <Text style={styles.team}>334</Text>
                    <Text style={styles.match}>Match 12: 3:48 PM</Text>
                    <Animated.View style={[styles.iconWrapper, { transform: [{ rotate: rotateValue }] }]}>
                        <TouchableOpacity onPress={this.toggleCard} style={{padding: 12}}>
                            <Ionicons style={styles.icon} name="ios-arrow-forward" size={20} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <Animated.View style={[styles.expanded, { height: this.state.cardHeight }]}>
                    <Text style={styles.dataTitle}>Auton</Text>
                    <View style={styles.data}>
                        <Check text="Crossed Baseline"/>
                        <Check text="Placed Cube on Switch"/>
                        <Check text="Placed Cube on Wrong Possession Switch"/>
                        <Check text="Placed Cube on Scale"/>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center'
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        height: 50,
        borderRadius: 4
    },
    team: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    match: {
        flex: 3,
        textAlign: 'right',
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
    iconWrapper: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'white'
    },
    expanded: {
        backgroundColor: '#ebebeb',
        flex: 1,
        overflow: 'hidden',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    dataTitle: {
        color: '#949496',
        fontSize: 17,
        fontWeight: '700',
        margin: 10,
        marginLeft: 15,
        marginBottom: 5
    },
    data: {
        marginLeft: 15
    }
});
