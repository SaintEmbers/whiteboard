import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Canvas from './canvas'
import Evernote from '../evernote/index'

console.log('evernote', Evernote)

class ProfileView extends Component {
  render() {
    console.log('profile props', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Draw!
        </Text>
      
        <Canvas></Canvas>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  }
});


module.exports = ProfileView;
