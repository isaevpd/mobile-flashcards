import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";

const Card = ({ question, answer }) => {
  return (
    <View style={styles.container}>
      <FlipCard
        flipHorizontal={true}
        flipVertical={false}
        style={styles.card}
      >
        {/* Face Side */}
        <View style={styles.face}>
          <Text style={styles.text}>{question}</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text style={styles.text}>{answer}</Text>
        </View>
      </FlipCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#F5FCFF",
  },
  card: {
    margin: 50
  },
  face: {
    flex: 1,
    backgroundColor: "#2ecc71",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    flex: 1,
    backgroundColor: "#f1c40f",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});

export default Card;
