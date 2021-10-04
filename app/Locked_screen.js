import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/AntDesign';

export default class Locked_screen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.Flex1}>
          <Text style={styles.text1}>Maximum Attempts Reached</Text>
        </View>
        <View style={styles.Flex2} />
        <View style={styles.Flex3} />
        <View style={styles.Flex4}>
          <Text style={styles.text2}>
            To protect your information, access {'\n'}has been locked for 1 minute.
            {'\n'}
            Come back later and try again.
          </Text>
        </View>
        <View style={styles.Flex5}>
          <View style={styles.fixToText}>
            <Button title="Quite" color="blue" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: 'center',
  },
  Flex1: {
    flex: 1,
  },
  Flex2: {
    flex: 1,
    alignItems: 'center',
  },
  Flex3: {
    flex: 1,
  },
  Flex4: {
    flex: 1,
  },
  Flex5: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 80,
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});
