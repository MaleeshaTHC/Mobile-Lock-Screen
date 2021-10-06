import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import BackHandler from 'react-native';

export default class Quit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this._onPressNumber(BackHandler.exitApp())}>
          <Text style={styles.text}>Quit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: '#b3d1e3',
    width: 90,
    height: 50,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Roboto',
    lineHeight: 30,
    letterSpacing: 0.25,
    color: 'black',
  },
});
