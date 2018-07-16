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
    Item,
    Input

} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput
} from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class Homescreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    static navigationOptions = {

    }
    state = {
        name: '',
        password: '',
        message: '',
    }

    updateFormInput = (type, value) => {
        this.setState({
            [type]: value,
        });
    }

    sendMessage = () => {
        this.setState({
            name: '',
            password: '',
            message: '',
        })
    }

    render() {
        return (
            <Container >

                <View style={{ paddingBottom: 10 }}>
                    <Header >
                        <Left style={{ paddingLeft: 10 }}>
                            <Button onPress={this.navigateToScreen('Home')}
                                transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body >
                            <Text style={{ fontSize: 20 }}>Apartemen</Text>
                        </Body>
                        <Right />
                    </Header>
                </View>
                <View style={{ flex: 2, }}>
                    <View style={{ paddingLeft: 30, }}>
                        <Image source={require('../img/Rectangle6.png')}
                            style={{ width: 129, height: 230 }} />
                    </View>
                    <View style={{ paddingLeft: 45, position: 'absolute', paddingLeft: 50, paddingTop:15  }}>
                        <Image source={require('../img/suite1.png')}
                            style={{width:287, height:200}} />
                    </View>
                    <View style={{ paddingLeft: 45, position: 'absolute', alignSelf: 'flex-end', paddingRight:0 , paddingTop: 80 }}>
                        <Image source={require('../img/Group22253x.png')}
                            style={{ resizeMode:'cover' }} />
                    </View>
                    <Text style={{ fontSize: 25,paddingLeft:35, paddingTop: 15 }}>Gunawangsa Apartemen</Text>

                </View >
                <View style={{ flex: 3 , paddingTop:50}}>
                    <ScrollView >
                        <View style={{ flex: 2, paddingTop: 7 }}>


                            <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 5 }}
                            >Price</Text>
                            <Text style={{ paddingLeft: 35, paddingBottom: 15 }}
                            >IDR 950.000.000</Text>
                            <View style={{ height: 0.8, backgroundColor: 'grey', marginHorizontal: 35, }} />
                            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 5 }}
                                    >Flor{'\n'}
                                        0{'\n'}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 15 }}
                                    >built In{'\n'}
                                        2016{'\n'}
                                    </Text>
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 15 }}
                                    >security{'\n'}
                                        Smartroom{'\n'}
                                    </Text>
                                </View>

                            </View>
                            <View style={{ height: 0.8, backgroundColor: 'grey', marginHorizontal: 35, }} />
                            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../img/Group2216.png')}
                                            style={{ marginLeft: 30, marginTop: 10 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../img/Group2220.png')}
                                            style={{ alignSelf: 'center', marginTop: 10 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../img/Group2221.png')}
                                            style={{ marginHorizontal: 10, marginTop: 10 }} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 4 }}>
                            <Image source={require('../img/snazy.png')}
                                style={{ resizeMode: 'cover', alignSelf: 'center' }} />


                        </View>

                    </ScrollView>
                </View>



            </Container >



        )
    }
};
