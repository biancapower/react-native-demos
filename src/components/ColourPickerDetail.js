import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColourPickerDetail = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button
        title={`More ${colour}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Less ${colour}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColourPickerDetail;
