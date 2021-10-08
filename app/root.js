import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Numbers from './Numbers';
import Main from './main';

export default class Root extends Component {
  render() {
    return <Main />;
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
