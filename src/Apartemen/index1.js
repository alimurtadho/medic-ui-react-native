import React, {Component} from 'react';
import Router from './routes1';
import {AppRegistry} from 'react-native';

export default class CustomDrawer extends Component {
  render () {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);