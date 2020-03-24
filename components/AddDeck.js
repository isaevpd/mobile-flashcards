import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { getAllDecks, saveDeck } from "../storage/deckStorage";

export default class AddDeck extends React.Component {
  state = {
    name: "",
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleSubmit = () => {
    saveDeck(this.state);
    this.props.navigation.navigate('Deck', {name: this.state.name})

  };

  isDisabled = () => this.state.name === "";

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Deck title"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />
            <View
              style={[
                styles.inputContainer,
                { opacity: this.isDisabled() ? 0.3 : 1 },
              ]}
            >
              <TouchableOpacity
                style={styles.saveButton}
                onPress={this.handleSubmit}
                disabled={this.isDisabled()}
              >
                <Text style={styles.saveButtonText}>Create Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
