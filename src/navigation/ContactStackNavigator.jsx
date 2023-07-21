// ContactStackNavigator.js
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  const navigation = useNavigation(); // Initialize the useNavigation hook
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} options={{
        headerLeft: () => (
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu-outline" size={30} />
          </TouchableOpacity>
        ),
      }} />
    </Stack.Navigator>
  );
}

export default ContactStackNavigator;