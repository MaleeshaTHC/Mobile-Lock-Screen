import React, {Component} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import Locked_screen from './Locked_screen';
import Numbers from './Numbers';

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
    flex: 2.5,
  },
  lower: {
    flex: 4,
    alignItems: 'center',
  },
});
