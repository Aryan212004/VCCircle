import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./index";
import Industry from "./industry";
import Subscribe from "./Subscribe";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="industry" component={Industry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
