import React, {Component} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Locked_screen from './Locked_screen';

export default class Root extends Component {
  render() {
    return <Locked_screen />;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  upper: {
    flex: 3,
  },
  lower: {
    flex: 4,
    alignItems: 'center',
  },
});
