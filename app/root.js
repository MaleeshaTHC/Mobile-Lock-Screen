import React, {Component} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import Numbers from './Numbers';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.upper} />
        <View style={styles.lower}>
          <Numbers />
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
    flex: 2.5,
  },
  lower: {
    flex: 4,
    alignItems: 'center',
  },
});
