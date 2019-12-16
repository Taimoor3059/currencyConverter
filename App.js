import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = "Amount to be converted"
          keyboardType = "numeric"
          value = {this.state.inputValue}
          selectionColor = "#FFF"
          onChangeText = { (inputValue) => {this.setState({inputValue})} } 
        />
  
        <TouchableOpacity>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit : {
    backgroundColor : 'red',
    fontSize: 20,
    justifyContent : 'center',
    alignItems : 'center',
    borderColor: "black",
    fontWeight: 'bold'
  }
});



