import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        // TextInputs have no styles by default
        // except for the height
        style={styles.input}

        // handle iOS things
        autoCapitalize="none" // none, sentences, words, characters
        autoCorrect={false}  // true, false

        // update the state
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}

        // hide text on entry
        // i.e. act like a password field
        secureTextEntry={true}
      />
      {/* uses state */}
      {password.length < 5 ? <Text>Password must be at least 5 characters</Text> : null}
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

export default PasswordScreen;
