import React from "react";
import SearchScreen from "./Screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const Navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Mobile Cook"
    }
  }
);

export default createAppContainer(Navigator);
