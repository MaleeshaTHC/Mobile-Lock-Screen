import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet, Pressable} from 'react-native';

export default class Quit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Quit</Text>
        </Pressable>
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
    lineHeight: 30,
    letterSpacing: 0.25,
    color: 'black',
  },
});
