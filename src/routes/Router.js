import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../pages/Products"
import Detail from "../pages/Detail"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={{ headerShown: false }} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

