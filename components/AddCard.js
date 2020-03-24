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
import { getAllDecks, saveCard } from "../storage/deckStorage";

export default class AddCard extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleQuestionChange = (question) => {
    this.setState({ question });
  };

  handleAnswerChange = (answer) => {
    this.setState({ answer });
  };


  handleSubmit = () => {
    const { deckName } = this.props.route.params;
    const result = saveCard({deckName, ...this.state});
    result.then((deck) => {
        this.props.navigation.navigate('Deck', {name: deckName, cardCount: deck.cards.length})
      })
  };

  isDisabled = () => this.state.question === '' || this.state.answer === '';

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Question"
              maxLength={100}
              onBlur={Keyboard.dismiss}
              value={this.state.question}
              onChangeText={this.handleQuestionChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Answer"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.answer}
              onChangeText={this.handleAnswerChange}
            />
            <View
              style={[
                styles.inputContainer,
                { opacity: this.isDisabled() ? 0.3 : 1 },
              ]}
            >
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.handleSubmit}
                disabled={this.isDisabled()}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
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
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10
  },
  submitButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 15,
    margin: 5,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
