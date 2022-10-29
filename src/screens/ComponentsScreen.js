import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Welcome to the components screen!';
  const name = <Text>Peter Fry</Text>;

  return (
    // View is a container that can hold other elements
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
      <Text>This is a second element</Text>
      {name}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
