import React from "react";
import { View, StyleSheet } from "react-native";
import ColourPickerDetail from "../components/ColourPickerDetail";

const ColourPickerScreen = () => {
  return (
    <View>
      <ColourPickerDetail colour="Red" />
      <ColourPickerDetail colour="Green" />
      <ColourPickerDetail colour="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourPickerScreen;
