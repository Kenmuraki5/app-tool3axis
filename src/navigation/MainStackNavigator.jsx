import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const navigation = useNavigation(); // Initialize the useNavigation hook

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft: () => (
          <TouchableOpacity style={{margin:10}} onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu-outline" size={30}  />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
