import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "DECK";

export const saveDeck = (deck) => {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((data) => (data ? JSON.parse(data) : {}))
    .then((data) => ({ ...data, [deck.name]: { ...deck, ...data[deck.name] } }))
    .then((data) => {
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data)).then(() =>
        getAllDecks().then((decks) => console.log(decks))
      );
    });
};

export const saveCard = ({ deckName, question, answer }) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((data) => JSON.parse(data))
    .then((data) => ({
      ...data,
      [deckName]: {
        ...data[deckName],
        cards: (data[deckName].cards || []).concat([{ question, answer }]),
      },
    }))
    .then((data) => {
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data)).then(
        () =>
          getAllDecks().then((decks) => {
            return decks[deckName];
          })
      );
    })
};

const getDeck = (deckName) => {
  return getAllDecks().then(decks => decks[deckName])
};

export const removeDeck = (deckName) => {
  return getAllDecks()
    .then(decks => {
      const {[deckName]: _, ...newDecks} = decks;
      return newDecks;
    })
    .then(newDecks => AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newDecks)))
};

export const getCards = (deckName) => {
  return getDeck(deckName).then(deck => deck ? deck.cards : [])
};

export const getAllDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((data) =>
    data ? JSON.parse(data) : {}
  );
};
