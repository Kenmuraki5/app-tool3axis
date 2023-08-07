import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { DrawerActions } from "@react-navigation/native"; // Import DrawerActions
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home" // Rename this to something unique, e.g., "HomeScreen"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons name="menu-outline" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="About" // Rename this to something unique, e.g., "AboutScreen"
        component={About}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
