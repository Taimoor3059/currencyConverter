import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, SafeAreaView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "",
      resultValue: "0.0"
    }
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert('Enter some value')
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency] 

    this.setState({resultValue : result.toFixed(2)})
    
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>
              {this.state.resultValue}
            </Text>
          </View>

          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              placeholder= "Enter Value"
              value = {this.state.inputValue}
              keyboardType = "numeric"
              selectionColor = "#FFF"
            />
          </View>


        </View>
      </SafeAreaView>
      
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
    marginTop: 20
  },
  screenview: {
    flex: 1
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "c1c1c1",
    backgroundColor: "0A79DE",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },



 
});



