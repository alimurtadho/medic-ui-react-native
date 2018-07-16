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
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, FlatList, ActionSheetIOS
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Nearby extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    static navigationOptions = {

    }



    render() {
        let navigation = this.props.navigation;
        return (
            <Container >
                <Header>
                    <Left>
                        <Button onPress={this.navigateToScreen('Doctorprf')}
                            transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Nearby Doctor</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => {
                            this.props.navigation.openDrawer();
                        }}
                            transparent>
                            <Icon name='ios-menu' />
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <View style={{}}>
                            <Image source={require('../img/snazzy.png')}
                                style={{ resizeMode: 'contain' }} />
                            <Image source={require('../img/Group20.png')}
                                style={{ resizeMode: 'contain', zIndex: 2, position: 'absolute', paddingTop: 400 }} />
                            <Image source={require('../img/Group2.png')}
                                style={{ resizeMode: 'contain', position: 'absolute', alignSelf: 'center', paddingTop: 900 }} />


                        </View>
                    </ScrollView>
                    <View style={{ zIndex: 2 }}>

                    </View>
                </View>


            </Container>



        )
    }
};
