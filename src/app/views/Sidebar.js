import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Sidebar.style';
import PropTypes from 'prop-types';

class DrawerContent extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            title='Home'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Home')} />

          <Text style={styles.sectionHeadingStyle}>
          </Text>

          <Button
            title='Info'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Info')} />
          <Text style={styles.sectionHeadingStyle}>
          </Text>

          <Button
            title='Extra'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Extra')} />





        </ScrollView>
        <Text style={styles.sectionHeadingStyle}>
        </Text>

        <Button
          title='Logout'
          buttonStyle={styles.button}
          onPress={this.navigateToScreen('Logout')} />
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;