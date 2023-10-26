import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Home } from "./Home";
import { Chat } from "./Chat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Chat App" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Create New Account" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "View Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
