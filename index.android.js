
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import App from './src/app';

export default class auth extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('auth', () => auth);
