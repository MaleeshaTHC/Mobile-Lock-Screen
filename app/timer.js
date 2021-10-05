/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CountDown
          until={60}
          onFinish={this.onDoneCountdown}
          size={20}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
          digitStyle={{
            backgroundColor: '#FFF',
          }}
          digitTxtStyle={{color: 'black'}}
          showSeparator
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 65,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    justifyContent: 'center',
  },
});
