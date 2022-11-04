import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <TextInput
        // TextInputs have no styles by default
        // except for the height
        style={styles.input}
        // handle iOS things
        autoCapitalize="none" // none, sentences, words, characters
        autoCorrect={false}  // true, false
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
