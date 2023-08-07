import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { DrawerActions } from "@react-navigation/native"; // Import DrawerActions

import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen" // Rename this to something unique, e.g., "ContactScreen"
        component={Contact}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons name="menu-outline" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default ContactStackNavigator;
