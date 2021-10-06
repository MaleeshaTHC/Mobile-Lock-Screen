import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Delete extends Component {
  render() {
    return (
      <View>
        <Icon
          name="backspace"
          size={45}
          backgroundColor="black"
          style={{position: 'absolute', bottom: 40, left: 90}}
        />
        <Text style={styles.text}>Delete</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    bottom: 25,
    left: 90,
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#5095bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
