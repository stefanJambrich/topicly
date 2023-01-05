import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/Login';
import RegisterScreen from './components/RegisterScreen';
import SignInScreen from './components/SignInScreen';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
  }
});
