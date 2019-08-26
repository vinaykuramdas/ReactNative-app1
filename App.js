/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';

import Routing from './routes/Route';
import Profile from './pages/profile';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

console.disableYellowBox = true;
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor = '#1c313a'
          barStyle = 'light-content' />
         <Routing />
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#455a64',
  },
});
