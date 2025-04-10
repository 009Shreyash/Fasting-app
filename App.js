import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import FastingScreen from './FastingScreen';
import WaterScreen from './WaterScreen';
import ProgressScreen from './ProgressScreen';
import SettingsScreen from './SettingsScreen';
import QuoteScreen from './QuoteScreen';
import * as Notifications from 'expo-notifications';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fasting" component={FastingScreen} />
        <Tab.Screen name="Water" component={WaterScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Quote" component={QuoteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}