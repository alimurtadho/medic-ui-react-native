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

} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput
} from 'react-native';
import { FormLabel, FormInput, } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class screen extends Component {
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
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1, }}>
                        <Image source={require('../img/login.png')}
                            style={{ resizeMode: 'contain', alignSelf: 'flex-start', marginTop: 60, zIndex: 2 }} />

                    </View>
                </View>
                <View style={{ flex: 3, paddingTop: 20 }}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <FormLabel>Username</FormLabel>
                        <FormInput value={this.state.name} onChangeText={(text) => this.updateFormInput('name', text)} />
                        <FormLabel>Password</FormLabel>
                        <FormInput value={this.state.password} onChangeText={(text) => this.updateFormInput('password', text)} />

                    </View>
                    <View style={{ paddingTop: 30, paddingBottom: 15 }}>
                        <TouchableOpacity onPress={this.navigateToScreen('profile1')}
                            style={{ alignSelf: 'center', }}>
                            <Image source={require('../img/sign-in.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.navigateToScreen('SignUp')}
                            style={{ alignSelf: 'center', }}>
                            <Text style={{ fontSize: 15 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>



            </Container>



        )
    }
};
