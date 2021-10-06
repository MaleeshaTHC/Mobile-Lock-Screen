import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Lockicon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Icon name="lock" size={75} backgroundColor="white" />;
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
});
