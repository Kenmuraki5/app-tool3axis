import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import ContactStackNavigator from "./ContactStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeDrawerScreen" // Use a unique name, e.g., "HomeDrawerScreen"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ContactDrawerScreen" // Use a unique name, e.g., "ContactDrawerScreen"
        component={ContactStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
