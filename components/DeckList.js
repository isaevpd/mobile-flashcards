import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {getAllDecks} from '../storage/deckStorage';
import DeckSummary from './DeckSummary';

const DeckList = ({ navigation }) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getAllDecks().then((decks) => setDecks([...Object.values(decks)]));
  });

  const handleDeckClick = (deckName, cardCount) => {
    navigation.navigate('Deck', { name: deckName, cardCount })
  };

  return (decks.length > 0) ?(
    <ScrollView style={styles.container}>
      {decks.map((deck) => (
        <DeckSummary
          handleClick={handleDeckClick}
          key={deck.name}
          deckName={deck.name}
          cardCount={deck.cards ? deck.cards.length : 0}
        />
      ))}
    </ScrollView>
  ) : <View style={styles.container}><Text style={styles.header}>You haven't created any decks yet!</Text></View>
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
});

export default DeckList;
