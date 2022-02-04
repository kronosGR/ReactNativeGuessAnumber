import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StartGameScreen = () => {
  return <View style={styles.screen}>
    <Text>Tha game screen</Text>
  </View>
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent:'center',
  }
})

export default StartGameScreen