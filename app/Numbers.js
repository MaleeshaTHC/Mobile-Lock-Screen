import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
export default class Numbers extends Component {
  render() {
    let no = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 0},
    ];
    return (
      <View style={styles.container}>
        {no.map(no => {
          return (
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor="#b3d1e3"
              style={styles.round}
              key={no.id}>
              <Text style={styles.numberText}>{no.id}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 325,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  round: {
    width: 90,
    height: 90,
    borderRadius: 75,
    backgroundColor: '#e6f5fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#5095bf',
  },
});
