import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
