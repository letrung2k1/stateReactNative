import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: 'green',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };
  handleResetClick = () => {
    this.setState({ message: '', backgroundColor: 'green' });
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <TitleComponent title="Hello World" color="white" />
        <ButtonComponent
          backgroundColor="yellow"
          message="yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="yellow" // limegreen
          label="Click me"
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF6347" // tomato
          label="Click me"
        />
        <ButtonComponent
          backgroundColor="brown"
          message="brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="brown" 
          label="Click me"
        />
        <ButtonComponent
          backgroundColor="black"
          message="black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="black" 
          label="Click me"
        />
        <ButtonComponent
          backgroundColor="green"
          onClick={this.handleResetClick}
          colorChange="green" 
          label="Reset"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, label } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
