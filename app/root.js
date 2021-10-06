import React, {Component} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Number from './Numbers';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.upper} />
        <View style={styles.lower}>
          <TouchableHighlight activeOpacity={10}>
            <Number />
          </TouchableHighlight>
        </View>
      </View>
    );
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
