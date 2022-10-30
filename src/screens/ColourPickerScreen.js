import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColourPickerDetail from "../components/ColourPickerDetail";

const COLOUR_INCREMENT = 25;

// action -> how to change our state object
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colourToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  // action.colourToChange === 'red', 'green', or 'blue'
  // action.amount === 15 or -15
  switch (action.colourToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColourPickerScreen = () => {
  // useReducer is a hook that is used to manage state
  // useReducer takes two arguments:
  //    1. a reducer function
  //    2. an initial state
  // useReducer returns an array with two elements:
  //    1. the current state
  //    2. a dispatch function
  // the _dispatch function_:
  //    runs the reducer function with the current state and the action object
  //    is used to update the state
  //    takes an action object as an argument
  //        the action object must have a type property
  // the _reducer function_ takes two arguments:
  //    1. the current state
  //    2. the action object
  // the _reducer function_:
  //    is called automatically by useReducer
  //    is called every time the dispatch function is called
  //    is called with the current state and the action object
  //    must return a new state object (or the current state object)
  //        cannot return undefined or null
  //    must not modify the current state object
  //    must not modify the action object
  //    must not call the dispatch function
  //    must not call the reducer function
  //    must not call any other function

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColourPickerDetail
        colour="Red"
        onIncrease={() => dispatch({ colourToChange: "red", amount: COLOUR_INCREMENT })}
        onDecrease={() => dispatch({ colourToChange: "red", amount: -1 * COLOUR_INCREMENT })}
        />
      <ColourPickerDetail
        colour="Green"
        onIncrease={() => dispatch({ colourToChange: "green", amount: COLOUR_INCREMENT })}
        onDecrease={() => dispatch({ colourToChange: "green", amount: -1 * COLOUR_INCREMENT })}
        />
      <ColourPickerDetail
        colour="Blue"
        onIncrease={() => dispatch({ colourToChange: "blue", amount: COLOUR_INCREMENT })}
        onDecrease={() => dispatch({ colourToChange: "blue", amount: -1 * COLOUR_INCREMENT })}
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
