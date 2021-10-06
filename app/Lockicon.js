import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Lockicon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Icon name="lock" size={75} color="#900" />;
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
