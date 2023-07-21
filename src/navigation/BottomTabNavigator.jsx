// BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import MainStackNavigator from "./MainStackNavigator";
import ContactStackNavigator from "./ContactStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={MainStackNavigator}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }} // Hide the header for this tab
      />
      <Tab.Screen
        name="setting"
        component={ContactStackNavigator}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          )
        }} // Hide the header for this tab
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
