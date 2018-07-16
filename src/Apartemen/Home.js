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
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import { FormLabel, FormInput, SearchBar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Homescreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {

        return (
            <Container >
                <View style={{ flex: 1, }}>

                    <View style={{ flex: 1, }}>
                        <Image source={require('../img/Path.png')}
                            style={{ resizeMode: 'cover', alignSelf: 'flex-start', }} />

                        <Button onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}
                            style={{ position: 'absolute', paddingTop: 120 }}>
                            <Image source={require('../img/Group19.png')}
                                style={{ resizeMode: 'cover', position: 'absolute', marginHorizontal: 35 }} />
                        </Button>

                    </View>
                    <Item searchBar rounded
                        style={{ marginRight: 35, marginLeft: 35, height: 35, backgroundColor: 'white' }}
                    >
                        <Icon active name="search" />
                        <Input placeholder="Find your apartment or house" />

                    </Item>
                </View>
                <Text style={{ paddingLeft: 35, paddingTop: 90 }}
                >Recommended</Text>
                <View style={{ flex: 3, paddingTop: 7 }}>
                    <ScrollView>
                        <ScrollView horizontal style={{ paddingLeft: 35 }}>

                            <Image source={require('../img/Group99.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/Group100.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/Group100.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/Group100.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/Group100.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/Group100.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />



                        </ScrollView>
                        <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 5 }}
                        >Apartments Suite</Text>

                        <ScrollView horizontal style={{ paddingLeft: 35 }}>        
                             <Image source={require('../img/suite1.png')}
                                    style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/suite2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/suite1.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/suite2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/suite1.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/suite2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />



                        </ScrollView>
                        <Text style={{ paddingLeft: 35, paddingTop: 15, paddingBottom: 5 }}
                        >House Suite</Text>

                        <ScrollView horizontal style={{ paddingLeft: 35 }}>
                            <Image source={require('../img/house1.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/house2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/house1.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />
                            <Image source={require('../img/house2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/house1.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />

                            <Image source={require('../img/house2.png')}
                                style={{ resizeMode: 'cover', marginRight: 7 }} />



                        </ScrollView>

                    </ScrollView>
                </View>



            </Container>



        )
    }
};
