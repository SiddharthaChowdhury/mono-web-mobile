import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "@mono/ui";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.welcomeText}>
        Welcome to your Expo Monorepo App!
      </Text>
      <Button
        title="Press Me (Shared Button)"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
