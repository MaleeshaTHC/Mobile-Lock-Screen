import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Quit from './Quit';
import Timer from './timer';
import Lockicon from './Lockicon';

export default class Locked_screen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.Flex1}>
          <Text style={styles.text1}>Maximum Attempts Reached</Text>
        </View>
        <View style={styles.Flex2}>
          <Timer />
        </View>
        <View style={styles.Flex3}>
          <Lockicon />
        </View>
        <View style={styles.Flex4}>
          <Text style={styles.text2}>
            To protect your information, access {'\n'}has been locked for 1
            minute.
            {'\n'}
            Come back later and try again.
          </Text>
        </View>
        <View style={styles.Flex5}>
          <Quit />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Flex1: {
    flex: 1,
  },
  Flex2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Flex3: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  Flex4: {
    flex: 1,
    justifyContent: 'center',
  },
  Flex5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
    marginTop: 80,
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
