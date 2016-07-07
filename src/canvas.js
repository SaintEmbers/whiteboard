

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import NativeModules from 'NativeModules';
import Sketch from 'react-native-sketch';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'aquamarine'
  },
  sketch: {
    width: width,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#111111',
    padding: 20,
    width: 200
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },

});

const Canvas = React.createClass({
  getInitialState(){

    return {encodedSignature: null}
  },
  onSave() {
    console.log('saving', this.sketch)
    this.sketch.saveImage(this.state.encodedSignature)
    .then((data) => {
      console.log('datum', data)
    })
    .catch((error) => console.log(error));
  },
  
  onReset() {
    console.log('reset', this.sketch)

    // this.sketch.onReset()
    // this.onUpdate(null)

  },

   onUpdate(base64Image) {
    this.setState({ encodedSignature: base64Image });
  },
  render() {
    return (
      <View style={styles.container}>
        <Sketch
          fillColor="white"
          strokeColor="blue"
          strokeThickness={2}
          onReset={this.onReset}
          onUpdate={this.onUpdate}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.sketch}
        />
        <TouchableOpacity
          disabled={!this.state.encodedSignature}
          style={styles.button}
          onPress={this.onSave}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
     
      </View>
    );
  }
});


export default Canvas;
