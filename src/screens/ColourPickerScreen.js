import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColourPickerDetail from "../components/ColourPickerDetail";

const COLOUR_INCREMENT = 25;

const ColourPickerScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColour = (colour, change) => {
    switch (colour) {
      case 'red':
        return (red + change > 255 || red + change < 0) ? null : setRed(red + change);
      case 'green':
        return (green + change > 255 || green + change < 0) ? null : setGreen(green + change);
      case 'blue':
        return (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change);
      default:
        return;
    }
  };

  return (
    <View>
      <ColourPickerDetail
        colour="Red"
        onIncrease={() => setColour('red', COLOUR_INCREMENT)}
        onDecrease={() => setColour('red', -1 * COLOUR_INCREMENT)}
        />
      <ColourPickerDetail
        colour="Green"
        onIncrease={() => setColour('green', COLOUR_INCREMENT)}
        onDecrease={() => setColour('green', -1 * COLOUR_INCREMENT)}
        />
      <ColourPickerDetail
        colour="Blue"
        onIncrease={() => setColour('blue', COLOUR_INCREMENT)}
        onDecrease={() => setColour('blue', -1 * COLOUR_INCREMENT)}
      />
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${red},${green},${blue})` }}
      />
      <Text>RGB: {red}, {green}, {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourPickerScreen;
