import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { connect } from 'react-redux';

import PreMatch from './components/collect/pre-match.js'
import Auton from './components/collect/auton.js'
import Teleop from './components/collect/teleop.js'
import EndGame from './components/collect/end-game.js'

// Parent Scouting Component
class Scout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,

            form: {
                team: '',
                match: '',
                color: 'BLUE',
                auton: {
                    passed_baseline: false,
                    placed_switch: false,
                    placed_opponents_switch: false,
                    placed_scale: false
                },
                teleop: {
                    cubes_home_switch: 0,
                    cubes_away_switch: 0,
                    cubes_scale: 0,
                    cubes_vault: 0,
                    defense: 0,
                    fall: false
                },
                end: {
                    climber: false,
                    climb_aid: 0,
                    fouls: 0,
                    score: 0
                }
            }
        }

        this.setInput = this.setInput.bind(this);

    }

    static navigationOptions = ({ navigation }) => ({
        title: `Scout`,
        headerStyle: {backgroundColor: '#262626'},
        headerTintColor: 'white'
    });

    renderItem ({item, index}) {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{ item.title }</Text>
                { item.content }
            </View>
        );
    }

    setInput(key, val, period = '') {
        const form = period != '' ? {
            form: Object.assign({}, this.state.form, {
                [period]: Object.assign({}, this.state.form[period], {
                    [key]: val
                })
            })
        } : {
            form: Object.assign({}, this.state.form, {
                [key]: val
            })
        };

        this.setState(form);
    }


    render() {

        var items = [
            {
                title: 'PRE-GAME',
                content: <PreMatch set={this.setInput}/>
            },
            {
                title: 'AUTON',
                content: <Auton set={this.setInput}/>
            },
            {
                title: 'TELEOP',
                content: <Teleop set={this.setInput}/>
            },
            {
                title: 'END-GAME',
                content: <EndGame set={this.setInput} submit={this.submitMatch}/>
            }
        ];

        // console.log(JSON.stringify(this.state.form))

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Carousel
                    ref={c => this.carousel = c}
                    data={items}
                    renderItem={this.renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }

                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={(Dimensions.get('window').width * .85) + 10}
                    slideStyle={styles.slide}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    inactiveSlideScale={.98}
                    inactiveSlideOpacity={.5}
                    enableMomentum={true}
                />
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={this.state.activeSlide}

                    containerStyle={styles.paginationContainer}
                    dotColor={'black'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={'black'}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.7}
                    carouselRef={this.carousel}
                    tappableDots={!!this.carousel}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EBEEF5'
    },
    card: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flex: 1,
        borderRadius: 4
    },
    title: {
        fontSize: 19,
        fontWeight: '700'
    },

    slider: {
        marginTop: 15,
        overflow: 'visible'
    },
    sliderContentContainer: {
        paddingVertical: 10,
    },
    slide: {
        width: Dimensions.get('window').width * .85,
        height: Dimensions.get('window').height * .77,
        marginHorizontal: 5,
    }
});

export default connect()(Scout);
