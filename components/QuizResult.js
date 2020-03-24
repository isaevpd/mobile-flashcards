import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const QuizResult = ({ correct, total, back, restartQuiz }) => {
  const goBack = () => {
    back();
  };

  return total ? (
    <View style={styles.container}>
      <Text
        style={styles.header}
      >{`You went through all the cards in the deck and got ${correct} out of ${total} questions right!`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.restartQuizButton} onPress={restartQuiz}>
          <Text style={styles.restartQuizButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToDeckButton} onPress={goBack}>
          <Text style={styles.backToDeckButtonText}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>
        Sorry, you cannot take a quiz because there are no cards in the deck
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 20,
    backgroundColor: "#F5FCFF",
  },
  buttonContainer: {
    marginTop: 30,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  restartQuizButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 15,
    margin: 5,
  },
  restartQuizButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  backToDeckButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 15,
    margin: 5,
  },
  backToDeckButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
});

export default QuizResult;
