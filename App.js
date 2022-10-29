import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import ColourPickerScreen from "./src/screens/ColourPickerScreen";

// Decides what is shown on the screen
// The key is the name of the route
// The value is the component that is shown
// The HomeScreen component is shown when the user navigates to the route named "Home"
// The ComponentsScreen component is shown when the user navigates to the route named "Components"
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    ColourPicker: ColourPickerScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
