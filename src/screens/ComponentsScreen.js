import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Welcome to the components screen!';
  const name = <Text style={styles.subHeaderStyle}>Peter Fry</Text>;

  return (
    // View is a container that can hold other elements
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
      {name}
      <Text>This is an additional element</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
