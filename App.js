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
      title: "Mobile Cook"
    }
  }
);
/*********************Functions************************/

export default createAppContainer(Navigator);
