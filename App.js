import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      resultValue: "0.0"
    }
  }

  buttonPressed = (currency) => {

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
          <Text style={styles.submit} value= "Dollar">Dollar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.submit} value = "Euro">Euro</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit} value = "Dinar">Dinar</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit} value = "Pound">Pounds</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={styles.submit} value = "Yuan">Yuan</Text>           
        </TouchableOpacity>

        <Text>{this.state.inputValue}</Text>
  
      </View>
    );
  }
  
}

var currencyPerRupee = {
  DOLLAR : 0.0064,
  POUND: 0.0048,
  EURO: 0.0058,
  DINAR: 0.0019,
  YUAN: 0.045
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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



