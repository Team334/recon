import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import Match from './components/match.js'
import IconButton from './components/icon.js';

class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Recon`,
        headerRight: <IconButton onPress={() => navigation.navigate('Scout')}/>,
        headerStyle: {backgroundColor: '#262626'},
        headerTintColor: 'white'
    });

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.props.matches}
                keyExtractor={(item, index) => item.team + item.match}
                renderItem={({item}) =>
                    <Match data={item} />
                }
            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEEF5'
    }
});

export default connect((state) => {
    return {
        matches: state.matches.sort((a, b) => b.match - a.match)
    };
}, null)(Home);
