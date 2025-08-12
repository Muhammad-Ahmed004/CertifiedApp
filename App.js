import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { BottomTabNavigator } from "./src/navigation";
import VehicleReport from "./src/Screens/VehicleReport";
import TransportCompleted from "./src/Screens/TransportCompleted";
import NewBooking from "./src/Screens/NewBooking";
import TransportActive from "./src/Screens/TransportActive";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            <Stack.Screen name="VehicleReport" component={VehicleReport} />
            <Stack.Screen name="TransportActive" component={TransportActive} />
            <Stack.Screen name="TransportCompleted" component={TransportCompleted} />
            <Stack.Screen name="NewBooking" component={NewBooking} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
