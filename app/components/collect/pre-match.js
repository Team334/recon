import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import Selector from '../selector.js'
import Input from '../text-input.js'
import Stepper from '../stepper.js'

export default class PreMatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alliances: [
                {
                    text: "BLUE",
                    color: "#0089ff",
                    selected: true
                }, {
                    text: "RED",
                    color: "#D93E46",
                    selected: false
                }
            ]
        }

        this._switchAlliance = this._switchAlliance.bind(this);
    }

    _switchAlliance(selection) {
        var alliances = this.state.alliances.slice(0);

        let that = this;
        this.state.alliances.forEach(function (team, i) {
            alliances[i].selected = (team.text == selection) ? true : false
        });

        this.setState(alliances);
        this.props.set('color', selection)

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.input}>
                    <Selector
                        text="ALLIANCE:"
                        items={this.state.alliances}
                        switchAlliance={(sel) => this._switchAlliance(sel)}
                    />
                    <Input
                        text="TEAM:"
                        placeholder="334"
                        type="numeric"
                        onChange={(text) => this.props.set('team', text.text)}
                    />
                    <Input
                        text="MATCH NUMBER:"
                        placeholder="123"
                        type="numeric"
                        onChange={(text) => this.props.set('match', text.text)}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        color: '#888888',
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        marginTop: 3
    }

});
