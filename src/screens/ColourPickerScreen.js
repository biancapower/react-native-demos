import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColourPickerDetail from "../components/ColourPickerDetail";

const COLOUR_INCREMENT = 25;

const ColourPickerScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColourPickerDetail
        colour="Red"
        onIncrease={() => setRed(red + COLOUR_INCREMENT)}
        onDecrease={() => setRed(red - COLOUR_INCREMENT)}
      />
      <ColourPickerDetail
        colour="Green"
        onIncrease={() => setGreen(green + COLOUR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOUR_INCREMENT)}
      />
      <ColourPickerDetail
        colour="Blue"
        onIncrease={() => setBlue(blue + COLOUR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOUR_INCREMENT)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourPickerScreen;
