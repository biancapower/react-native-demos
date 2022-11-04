import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        // TextInputs have no styles by default
        // except for the height
        style={styles.input}

        // handle iOS things
        autoCapitalize="none" // none, sentences, words, characters
        autoCorrect={false}  // true, false

        // update the state
        onChangeText={(newValue) => setName(newValue)}
        value={name}
      />
      {/* uses state */}
      <Text>My name is {name}</Text>
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
