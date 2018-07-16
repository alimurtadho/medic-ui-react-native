import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './drawer.styles';
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
export default class DrawerScreen extends React.Component {
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
              <Button style={styles.navItemStyle} onPress={this.navigateToScreen('./Medik/profile1')}
               transparent>
                <Text>profile</Text>
              </Button>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Button style={styles.navItemStyle} onPress={this.navigateToScreen('./Doctorprf')}
               transparent>
                <Text>Doctor</Text>
              </Button>

              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Nearby')}>
                Nearby
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Button onPress={this.navigateToScreen('../screen')}
            rounded LogOut>
            <Text>LogOut</Text>
          </Button>
        </View>
      </View>
    );
  }
}