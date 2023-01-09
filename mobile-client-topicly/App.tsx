import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Login from './components/Login';
import RegisterScreen from './components/RegisterScreen';
import SignInScreen from './components/SignInScreen';
import Home from './components/Home';
import Profile from './components/Profile';
import Bookmarks from './components/bookmarks';
import Search from './components/search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="bookmark" component={Bookmarks} options={{ headerShown: false }} />
          <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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
