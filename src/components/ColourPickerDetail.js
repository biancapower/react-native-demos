import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColourPickerDetail = ({ colour }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button
        title={`More ${colour}`}
        // onPress={() => {
      />
      <Button title={`Less ${colour}`} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColourPickerDetail;
