import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AddButton from "../components/AddButton";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    padding: 0,
    left: 16,
    right: 16,
    bottom: 32,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderTopColor: "transparent",
    shadowColor: "#161719",
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: styles.tabBar,
    },
  }
);

export default createAppContainer(TabNavigator);