import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Left,
    Right,
    Body,
    Icon,
    Accordion,
    Text,
    View,

} from "native-base";
import {
    StyleSheet, ScrollView, ListView, Image, TouchableOpacity, TextInput, ActionSheetIOS
} from 'react-native';
import { FormLabel, FormInput, Button, } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';


export default class alert extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
    static navigationOptions = () => ({
        title: 'ActionSheetIOS',
    });

    showActionSheetWithOptions = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: ['Send Email', 'Save', 'Update Contact', 'Cancel'],

        },
            (buttonIndex) => {
                console.log('ButtonIndex:', buttonIndex);
            });
    }

    showShareActionSheetWithOptions = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
            url: 'https://www.reactnative.training',
            message: 'Check out this website!',
            subject: 'a subject to go in the email heading', // email only
        },
            (error) => alert(error),
            (completed, method) => {
                let text;
                if (completed) {
                    text = `Shared via ${method}`;
                } else {
                    text = 'You didn\'t share';
                }
                console.log('message: ', text);
            });
    }


    state = {
        name: '',
        notelp: '',
        tgl_lahir: '',
        jeniskelamin: '',
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
            notelp: '',
            tgl_lahir: '',
            jeniskelamin: '',
            message: '',
        })
    }

    render() {
        return (
            <Container >
                {/* <View>
                    <Button
                        onPress={this.showActionSheetWithOptions}
                        title="showActionSheetWithOptions"
                    />
                    <Button
                        onPress={this.showShareActionSheetWithOptions}
                        title="showShareActionSheetWithOptions"
                    />
                </View> */}
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ccc' }}>
                    <View style={{ flex: 1, }}>
                        <Image source={require('../img/sing-up.png')}
                            style={{ resizeMode: 'contain', alignSelf: 'flex-start', marginTop: 60, zIndex: 2 }} />

                    </View>


                </View>
                <View style={{ flex: 2, paddingTop: 20, backgroundColor: '#ccc' }}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                        <FormLabel >Nama</FormLabel>
                        <FormInput value={this.state.name} onChangeText={(text) => this.updateFormInput('name', text)} />
                        <FormLabel>No_Telp</FormLabel>
                        <FormInput value={this.state.notelp} onChangeText={(text) => this.updateFormInput('notelp', text)} />
                        <FormLabel>Tanggal lahir</FormLabel>
                        <FormInput value={this.state.tgl_lahir} onChangeText={(text) => this.updateFormInput('tgl_lahir', text)} />
                        <FormLabel>jeniskelamin</FormLabel>
                        <FormInput value={this.state.jeniskelamin} onChangeText={(text) => this.updateFormInput('jeniskelamin', text)} />

                    </View>
                </View>

                <View style={{ alignSelf: 'center', zIndex: 2, position: 'absolute', paddingTop: 420 }}>
                    <Image source={require('../img/medic.png')}
                        style={{}} />
                </View>

                <View style={{ flex: 1.5, backgroundColor: '#ccc' }}>
                    <View style={{}}>
                        <Image source={require('../img/Rectangle.png')}
                            style={{ marginBottom: 0 }} />
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
                            <TouchableOpacity onPress={this.navigateToScreen('Login')}>
                                <Text>DONE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>








            </Container >



        )
    }
};
