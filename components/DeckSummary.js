import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const DeckSummary = ({ deckName, cardCount, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(deckName, cardCount)}>
      <View style={styles.container}>
        <Text style={styles.name}>{deckName}</Text>
        <Text style={styles.cardCount}>{cardCount} cards</Text>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#F5FCFF",
  },
  name: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 20
  },
});

export default DeckSummary;

