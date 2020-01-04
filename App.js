import React from "react";
import SearchScreen from "./Screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

/*********************Functions************************/
const Navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Cas Suche"
    }
  }
);
/*********************Functions************************/

export default createAppContainer(Navigator);
