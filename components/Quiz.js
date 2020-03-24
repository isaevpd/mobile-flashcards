import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { getCards } from "../storage/deckStorage";
import Card from "./Card";
import QuizResult from './QuizResult';

const Quiz = (props) => {
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const { deckName } = props.route.params;
    getCards(deckName).then((cards) => {
      cards && setCards(cards);
    });
  }, []);

  const updateCorrectCount = () => {
    setCorrectCount(correctCount + 1);
    getNextCard();
  };

  const getNextCard = () => {
    setCardIndex(cardIndex + 1);
  };

  const restartQuiz = () => {
    setCardIndex(0);
    setCorrectCount(0);
  };

  return cards[cardIndex] ? (
    <View style={styles.container}>
      <View style={styles.cardCountHeader}>
        <Text  style={styles.cardCountHeaderText}>{`${cardIndex + 1}/${cards.length}`}</Text>
      </View>
      <Card question={cards[cardIndex].question} answer={cards[cardIndex].answer}/>
      <View style={styles.buttonContainer}>
        <View
          style={[
            styles.inputContainer,
          ]}
        >
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={updateCorrectCount}
          >
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.inputContainer,
          ]}
        >
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={getNextCard}
          >
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <QuizResult correct={correctCount} total={cards.length} back={props.navigation.goBack} restartQuiz={restartQuiz}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 20,
    backgroundColor: "#F5FCFF",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    borderWidth: 1,
    padding: 15,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  cardCountHeader: {
    marginLeft: 10
  },
  cardCountHeaderText: {
    fontSize: 20
  }
});

export default Quiz;
