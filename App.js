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
          style = {styles.inputContainer} 
        />
  
        <TouchableOpacity>
          <Text style={styles.submit}>Dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.submit}>Euro</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit}>Dinar</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit}>Pounds</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit}>Yuan</Text>           
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
    fontWeight: 'bold',
    flex: 1
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "0A79DE"
  }
});



