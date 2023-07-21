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
        name="HomeDrawer"
        component={BottomTabNavigator}
        options={{ headerShown: false }} // Hide the header for the drawer screen
      />
      <Drawer.Screen
        name="ContactDrawer"
        component={ContactStackNavigator}
        options={{ headerShown: false }} // Hide the header for the drawer screen
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
