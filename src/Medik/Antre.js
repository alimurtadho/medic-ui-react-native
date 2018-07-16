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
    ListItem,
    Card,
    CardItem



} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, FlatList
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Doctor extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <Container  >
                <View style={{ flex: 2, backgroundColor:'grey' }}>
                    <Header style={{backgroundColor:'grey'}}>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Doctor Profile</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ flex: 1, alignSelf: 'center', paddingLeft: 15 }}>
                            <Image source={require('../img/doctor.png')}
                                style={{ resizeMode: 'contain', }} />

                        </View>
                        <View style={{ flex: 2, alignSelf: 'center', }}>
                            <View>
                                <Text style={{ fontSize: 11 }}>
                                    HEART SPECIALIST
                    </Text>
                                <Text style={{ fontSize: 18 }}>
                                    Dr. Evelyn Prastika
                    </Text>
                            </View>
                            <View style={{ paddingTop: 15, justifyContent: 'flex-end' }}>
                                <Button rounded >
                                    <Text>Available</Text>
                                </Button>
                            </View>
                        </View>

                    </View>




                    <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#ccc', }}>
                        <View style={{ flex: 1, alignSelf: 'center', }}>
                            <Text style={{ textAlign: 'center' }}>MONDAY</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', paddingLeft: 5 }}>
                            <Text style={{ textAlign: 'center' }}>09.00 - 17.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.5, }}>
                        <Card style={{backgroundColor:'grey'}}>
                            <CardItem style={{backgroundColor:'grey'}}>
                                <Body>
                                    <Text style={{ fontSize: 13, }}>
                                        Lorem ipsum dolor sit amet,consectetur adipiscing elit.{'\n'}
                                        Pellentesque id ultricies nibh.{'\n'}
                                        In a felis eu felis iaculis dictum vel vitae nibh.{'\n'}
                                        Nulla vestibulum massa risus, sed consequat nibh convallis a{'\n'}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                </View>
                <View style={{ alignSelf: 'center', zIndex: 2, position: 'absolute', paddingTop: 420 }}>
                    <Image source={require('../img/medic.png')}
                        style={{}} />
                </View>

                <View style={{ flex: 1, backgroundColor: '#ccc' }}>
                    <View style={{}}>
                        <Image source={require('../img/Rectangle.png')}
                            style={{ justifyContent: 'flex-end' }} />
                        <View style={{ position: 'absolute', alignSelf: 'center', paddingTop: 45 }}>
                            <Text style={{ fontSize: 16 }}>Sign Up Process Success</Text>
                        </View>
                        <View style={{ position: 'absolute', alignSelf: 'center', paddingTop: 75 }}>
                            <Text style={{ fontSize: 12 }}>
                                Your registration process has been completed . To {'\n'}
                                {'\n'}
                                complete next process please Sign In your account{'\n'}
                            </Text>
                        </View>
                        <View style={{ position: 'absolute', alignSelf: 'center', paddingTop: 165 }}>
                            <TouchableOpacity onPress={this.navigateToScreen('profile1')}>
                                <Text>DONE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container >



        )
    }
};
