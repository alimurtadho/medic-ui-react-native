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
    static navigationOptions = {

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
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1, }}>
                        <Image source={require('../img/sing-up.png')}
                            style={{ resizeMode: 'contain', alignSelf: 'flex-start', marginTop: 60, zIndex: 2 }} />

                    </View>


                </View>
                <View style={{ flex: 3, paddingTop: 20 }}>
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
                    <View style={{ paddingTop: 30, paddingBottom: 15 }}>
                        {/* <TouchableOpacity style={{ alignSelf: 'center', }}>
                            <Image source={require('../../img/singup1.png')}
                            />
                        </TouchableOpacity> */}
                        <Button
                            onPress={this.navigateToScreen('alert')}
                            title="Sign-Up"
                            backgroundColor="#76A6F0"
                            style={{ marginHorizontal: 20 }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.navigateToScreen('Login')}
                            style={{ alignSelf: 'center', }}>
                            <Text style={{ fontSize: 16 }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>


                </View>




            </Container >



        )
    }
};
