import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// props is always the first argument to a functional component
// destructuring props to get the navigation property
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter2")}
        title="Go to Counter 2 Demo"
      />
      <Button
        onPress={() => navigation.navigate("Colour")}
        title="Go to Colour Demo"
      />
      <Button
        onPress={() => navigation.navigate("ColourPicker")}
        title="Go to Colour Picker Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => navigation.navigate("Password")}
        title="Go to Password Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
