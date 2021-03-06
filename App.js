import { StyleSheet } from "react-native";
import SearchScreen from "./Screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DetailsScreen from "./Screens/DetailsScreen";

/*********************Functions************************/
const Navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Cas Suche",
      headerTitleAlign: "center"
    }
  }
);
/*********************Functions************************/

export default createAppContainer(Navigator);
