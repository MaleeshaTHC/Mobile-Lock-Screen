import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: ['', '', '', ''],
      main_phrase: 'Enter your PIN code',
      pin: ['1', '2', '3', '4'],
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
        <View style={styles.upper}>
          <Text style={styles.text_style}>{this.state.main_phrase}</Text>
          <View style={styles.background_container}>
            {this.state.pincode.map(p => {
              let style = p !== '' ? styles.pin_used : styles.pin_unused;
              return <View style={style} />;
            })}
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.numbers_container}>
            {number.map(number => {
              return (
                <TouchableHighlight
                  activeOpacity={0.5}
                  underlayColor="#b3d1e3"
                  style={styles.circle}
                  key={number.index}
                  onPress={() => this.Press_Number(number.index)}>
                  <Text style={styles.number}>{number.index}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#b3d1e3"
            style={{left: 110, bottom: 80}}
            onPress={() => this.Press_Erase()}>
            <Icon name="backspace" size={50} color="#e6f5fa" />
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
    flex: 1,
    marginTop: 80,
  },
  lower: {
    flex: 4,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style: {
    fontFamily: 'Roboto',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#5095bf',
  },
  pin_unused: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#5095bf',
  },
  pin_used: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    backgroundColor: '#5095bf',
    borderColor: '#5095bf',
  },
  background_container: {
    marginTop: 90,
    marginLeft: 150,
    marginRight: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  numbers_container: {
    width: 325,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 90,
    margin: 8,
    backgroundColor: '#e6f5fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#5095bf',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
