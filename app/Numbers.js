import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Pressable,
} from 'react-native';
import Delete from './delete';
export default class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ['', '', '', ''],
    };
  }

  _onPressNumber = no => {
    let tempCode = this.state.password;
    for (let i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === '') {
        tempCode[i] = no;
        break;
      } else {
        continue;
      }
    }
    this.setState({password: tempCode});
  };

  _onPressErase = () => {
    let tempCode = this.state.password;
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({password: tempCode});
  };
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
              onPress={() => this._onPressNumber(no.id)}
              activeOpacity={0.5}
              underlayColor="#b3d1e3"
              style={styles.round}
              key={no.id}>
              <Text style={styles.numberText}>{no.id}</Text>
            </TouchableHighlight>
          );
        })}
        <TouchableHighlight
          onPress={() => this._onPressErase()}
          activeOpacity={10}
          style={styles.container}>
          <Delete />
        </TouchableHighlight>
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
    margin: 7,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#5095bf',
  },
});
