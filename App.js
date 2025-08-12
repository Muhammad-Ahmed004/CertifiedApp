import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Home from "./src/Screens/Home";
import Inspection from "./src/Screens/Inspection";
import VehicleReport from "./src/Screens/VehicleReport";
import TransportActive from "./src/Screens/TransportActive";
import TransportCompleted from "./src/Screens/TransportCompleted";
import NewBooking from "./src/Screens/NewBooking";
import Profile from "./src/Screens/Profile";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Inspection" component={Inspection} />
            <Stack.Screen name="VehicleReport" component={VehicleReport} />
            <Stack.Screen name="TransportActive" component={TransportActive}/>
            <Stack.Screen name="TransportCompleted" component={TransportCompleted} />
            <Stack.Screen name="NewBooking" component={NewBooking} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
