import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  // useState is a hook
  // useState returns an array with two elements
  // The first element is the value of the state
  // The second element is a function that allows us to update the state
  // The argument to useState is the initial value of the state
  //    in this case, the initial value of the state is 0
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
