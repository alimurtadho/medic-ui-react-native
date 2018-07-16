import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Text,
    View,
    FooterTab,
    Footer,
    Badge,
    ListItem



} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, FlatList
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class pofile1 extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <Container >


                <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 20 }}>
                    <View style={{}}>
                        <View style={{ justifyContent: 'flex-start', alignSelf: 'flex-end', paddingRight: 500 }}>
                            <Image source={require('../img/Ellipse2.png')}
                                style={{ position: 'absolute', zIndex: 2, }} />
                        </View>
                        <Text style={{ fontSize: 25, paddingLeft: 5, paddingBottom: 10 }}> Schedule</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 5 }}> You have 2 appointment this month </Text>
                    </View>
                    <View style={{ paddingVertical: 25 }}>
                        <Image source={require('../img/Group2205.png')}
                        />
                    </View>
                    <View style={{}}>
                        <Image source={require('../img/Group2207.png')}
                        />
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                </View>


                <Footer>
                    <FooterTab>
                        <Button onPress={this.navigateToScreen('profile1')}
                            badge vertical>
                            <Image source={require('../img/user(1).png')}
                            />
                        </Button>
                        <Button
                            active badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Image source={require('../img/calendar(2).png')}

                            />

                        </Button>
                        <Button onPress={this.navigateToScreen('Nearby')}
                            badge vertical>
                            <Image source={require('../img/placeholder(2).png')}
                            />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>



        )
    }
};
