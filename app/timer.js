import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet, Platform} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CountDown
          until={61}
          onFinish={this.onDoneCountdown}
          size={20}
          timeToShow={('H', 'M', 'S')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
