import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Welcome to the components screen!';
  return <Text style={styles.textStyle}>{greeting}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
