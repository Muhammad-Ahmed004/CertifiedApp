// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import tw from 'tailwind-react-native-classnames';

// import Home from '../Screens/Home';
// import Inspection from '../Screens/Inspection';
// import TransportActive from '../Screens/TransportActive';
// import Profile from '../Screens/Profile';

// const Tab = createBottomTabNavigator();

// const TabBarIcon = ({ focused, color, size, iconName }) => {
//   return (
//     <View style={tw`items-center justify-center`}>
//       <Ionicons 
//         name={focused ? iconName : iconName + '-outline'} 
//         size={size} 
//         color={color} 
//       />
//     </View>
//   );
// };

// // Custom tab bar label component
// const TabBarLabel = ({ focused, color, children }) => {
//   return (
//     <Text style={[tw`text-xs font-medium mt-1`, { color: color }]}>
//       {children}
//     </Text>
//   );
// };

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Inspection') {
//             iconName = 'clipboard';
//           } else if (route.name === 'Transport') {
//             iconName = 'car';
//           } else if (route.name === 'Profile') {
//             iconName = 'person';
//           }

//           return <TabBarIcon focused={focused} color={color} size={size} iconName={iconName} />;
//         },
//         tabBarLabel: ({ focused, color, children }) => (
//           <TabBarLabel focused={focused} color={color}>
//             {children}
//           </TabBarLabel>
//         ),
//         tabBarStyle: [
//           tw`bg-white border-t border-gray-200 pb-1 pt-1 h-15`,
//           {
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: -2,
//             },
//             shadowOpacity: 0.1,
//             shadowRadius: 3,
//             elevation: 10,
//           }
//         ],
//         tabBarActiveTintColor: '#007AFF',
//         tabBarInactiveTintColor: '#8E8E93',
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={Home}
//         options={{
//           title: 'Home',
//         }}
//       />
//       <Tab.Screen 
//         name="Inspection" 
//         component={Inspection}
//         options={{
//           title: 'Inspection',
//         }}
//       />
//       <Tab.Screen 
//         name="Transport" 
//         component={TransportActive}
//         options={{
//           title: 'Transport',
//         }}
//       />
//       <Tab.Screen 
//         name="Profile" 
//         component={Profile}
//         options={{
//           title: 'Profile',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

import Home from '../Screens/Home';
import Inspection from '../Screens/Inspection';
import TransportActive from '../Screens/TransportActive';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

// Icon component
const TabBarIcon = ({ focused, color, size, iconName }) => (
  <View style={tw`items-center justify-center `}>
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      size={size}
      color={color}
    />
  </View>
);

// Label component
const TabBarLabel = ({ color, children }) => (
  <Text style={[tw`text-xs font-medium mt-1`, { color }]}>{children}</Text>
);

// Custom Button (No gray background on press)
const CustomTabBarButton = (props) => {
  const { children, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={tw`flex-1 items-center justify-center`}
      android_ripple={{ color: 'transparent' }} // Android ripple disable
    >
      {children}
    </Pressable>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Inspection') iconName = 'clipboard';
          else if (route.name === 'Transport') iconName = 'car';
          else if (route.name === 'Profile') iconName = 'person';

          return (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              iconName={iconName}
            />
          );
        },
        tabBarLabel: ({ color, children }) => (
          <TabBarLabel color={color}>{children}</TabBarLabel>
        ),
        tabBarStyle: [
          tw`bg-white border-t border-gray-200 pb-8 pt-1`,
          {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 10,
          },
        ],
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen name="Inspection" component={Inspection} options={{ title: 'Inspection' }} />
      <Tab.Screen name="Transport" component={TransportActive} options={{ title: 'Transport' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
