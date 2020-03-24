import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {removeDeck} from '../storage/deckStorage';

const Deck = (props) => {
  let { name, cardCount } = props.route.params;
  if (!name) {
    name = props.name;
  }
  if (!cardCount) {
    cardCount = props.cardCount;
  }

  const addCard = () => {
    props.navigation.navigate('Add card', {deckName: name})
  };

  const startQuiz = () => {
    props.navigation.navigate('Quiz', {deckName: name})
  };

  const deleteDeck = () => {
    removeDeck(name).then(
      props.navigation.navigate('Home', {deckName: name})
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.deckInfo}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.cardCount}>{`${cardCount ? cardCount : 0} cards`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addCardButton} onPress={addCard}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizButton} onPress={startQuiz}>
          <Text style={styles.startQuizButtonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={deleteDeck}>
          <Text style={styles.deleteButtonText}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  addCardButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    padding: 15,
    margin: 5
  },
  addCardButtonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  startQuizButton: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#000000",
    padding: 15,
    margin: 5,
  },
  startQuizButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  deleteButton: {
    padding: 15,
    margin: 5,
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 20
  },
  deckInfo: {
    marginBottom: 200
  },
  buttonContainer: {
    display: 'flex',
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Deck;
