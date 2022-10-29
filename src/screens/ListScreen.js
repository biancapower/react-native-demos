import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 18 },
    { name: "Friend #9", age: 24 },
  ]

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // change scroll direction to horizontal
        horizontal
        // hide scroll bar
        showsHorizontalScrollIndicator={false}

        // keyExtractor is a function that returns a unique key for each element in the array
        keyExtractor={friend => friend.name}

        // Data is an array of objects
        data={friends}

        // renderItem is a function that is called with each object in the data array
        // renderItem is the React Native (better) alternative to mapping over an array
        //    includes optimization for rendering large lists
        //    only renders the elements that are visible on the screen
        //    renders more elements as the user scrolls
        //    does not render elements that are not visible
        //    does not render elements that have been scrolled off the screen
        // The function is called with an object that has a property called item
        //    element === { item: { name: 'Friend #1' }, index: 0 }
        //    the item property is the object from the data array
        //    we can destructure the item property as below
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
