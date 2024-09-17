import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/Profile';
import DetailPage from './pages/DetailPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// IDEA Different ways to navigate between screens
// 1. Stack Navigator 🍄
// const Stack = createNativeStackNavigator();
{/* <NavigationContainer>
  <Stack.Navigator initialRouteName='Profile'>
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="About" component={AboutPage} />
    <Stack.Screen name="List" component={ListPage} />
    <Stack.Screen name="Profile" component={ProfilePage} />
  </Stack.Navigator>
</NavigationContainer> */}

// 2. Drawer Navigator 🍄
// const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

{/* <NavigationContainer>
  <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="About" component={AboutPage} />
    <Tab.Screen name="List" component={ListPage} />
    <Tab.Screen name="Profile" component={ProfilePage} />
  </Tab.Navigator>
</NavigationContainer> */}


// 3. Tab Navigator  🍄

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="About" component={AboutPage} />
          <Drawer.Screen name="List" component={ListPage} />
          <Drawer.Screen name="Profile" component={ProfilePage} />
          <Drawer.Screen name="Detail" component={DetailPage} />
        </Drawer.Navigator> */}

        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="About" component={AboutPage} />
          <Tab.Screen name="List" component={ListPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />
          <Tab.Screen name="Detail" component={DetailPage} />

        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}
