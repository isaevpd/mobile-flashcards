import React, { useEffect, useState } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import AddCard from "./components/AddCard";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import DeckList from "./components/DeckList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Quiz from "./components/Quiz";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {getAllDecks} from './storage/deckStorage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 100,
      },
    }}
  >
    <Tab.Screen
      name="Decks"
      options={{
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        ),
      }}
      component={DeckList}
    />
    <Tab.Screen
      name="Add deck"
      options={{
        tabBarLabel: "Add deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        ),
      }}
      component={AddDeck}
    />
  </Tab.Navigator>
);

export default function App() {
  const [decks, setDecks] = useState({});

  useEffect(() => {
    AsyncStorage.getAllKeys().then((keys) => {
      if (keys.length > 0) {
        AsyncStorage.clear();
      }
    });
  });

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="New deck" component={AddDeck} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Add card" component={AddCard} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
