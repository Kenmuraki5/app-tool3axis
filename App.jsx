// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import DrawerNavigator from "./src/navigation/DrawerNavigator";

//  const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }
// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
