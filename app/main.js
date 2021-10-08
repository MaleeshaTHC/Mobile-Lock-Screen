import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: ['', '', '', ''],
    };
  }

  Press_Number = number => {
    let temporary = this.state.pincode;
    for (let i = 0; i < temporary.length; i++) {
      if (temporary[i] === '') {
        temporary[i] = number;
        break;
      } else {
        continue;
      }
    }
    this.setState({pincode: temporary});
  };

  Press_Erase = () => {
    let temporary = this.state.pincode;
    for (let i = temporary.length - 1; i >= 0; i--) {
      if (temporary[i] !== '') {
        temporary[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({pincode: temporary});
  };

  render() {
    let number = [
      {index: 1},
      {index: 2},
      {index: 3},
      {index: 4},
      {index: 5},
      {index: 6},
      {index: 7},
      {index: 8},
      {index: 9},
      {index: 0},
    ];

    return (
      <View style={styles.main}>
        <View style={styles.upper} />
        <View style={styles.lower} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  upper: {
    flex: 1,
    marginTop: 80,
  },
  lower: {
    flex: 4,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
