/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
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


  FooterTab,
  Footer,
  Badge,
  ListItem,
  Card,
  CardItem



} from "native-base";

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                Homescreen
              </Text>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home1')}>
                Homescreen1
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Details')}>
              Details
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Button onPress={this.navigateToScreen('screen')}
            rounded LogOut>
            <Text>LogOut</Text>
          </Button>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
