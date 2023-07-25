// DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import ContactStackNavigator from "./ContactStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeDrawer" // Rename this to something unique, e.g., "HomeDrawerScreen"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ContactDrawer" // Rename this to something unique, e.g., "ContactDrawerScreen"
        component={ContactStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
