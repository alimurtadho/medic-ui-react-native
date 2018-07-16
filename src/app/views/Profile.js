import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, ListView, Image, TouchableOpacity, Text, FlatList, ActionSheetIOS
} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Accordion,
  View,
  FooterTab,
  Footer,
  Badge,
  ListItem,
  Card,
  CardItem
} from "native-base";

import { NavigationActions } from 'react-navigation';
export default class Profile extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
}

  render() {
    let navigation = this.props.navigation;
    return (
      <Container >
        <Header>
          <Left>
            <Button onPress={this.navigateToScreen('profile1')}
              transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Doctor Profile</Title>
          </Body>
          <Right>
            <Button
              onPress={() => navigation.navigate("DrawerOpen")}
              transparent>
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
            <View style={{ paddingTop: 15, justifyContent: 'flex-end', }}>
              <Button rounded

              >
                <Text>Available</Text>
              </Button>
            </View>
          </View>

        </View>


        <View style={{ flex: 3, paddingTop: 15, }}>

          <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#E5E5E5', }}>
            <View style={{ flex: 1, alignSelf: 'center', }}>
              <Text style={{ textAlign: 'center' }}>MONDAY</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'center', paddingLeft: 5 }}>
              <Text style={{ textAlign: 'center' }}>09.00 - 17.00</Text>
            </View>
          </View>
          <View style={{ flex: 0.5, }}>
            <Card style={{}}>
              <CardItem>
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


          <Card>
            <Text style={{ paddingLeft: 25 }}>
              8 recomendations
                                    </Text>
            <ScrollView horizontal style={{ paddingLeft: 25 }}>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>1</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>2</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>3</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>4</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>5</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>6</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>7</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>8</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>9</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>10</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge style={{ backgroundColor: 'blue' }}>
                    <Text>11</Text></Badge>

                </Button>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Button transparent >
                  <Badge >
                    <Text>12</Text></Badge>

                </Button>
              </View>
            </ScrollView>
            <ScrollView>
              <View style={{ alignSelf: 'center' }}>
                <Image source={require('../img/Group34.png')}
                />
              </View>
            </ScrollView>
          </Card>
        </View>
        <Footer>
          <FooterTab>
            <Button >
              <Text>Nomor Antrean : 14</Text>

            </Button>
            <Button
              active
              onPress={this.navigateToScreen('Antre')}
              title="showActionSheetWithOptions"
            >
              <Text>Antre Sekarang</Text>


            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

