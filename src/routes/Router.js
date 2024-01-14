import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import Detail from "../pages/Detail";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="DetailScreen" component={Detail} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignUpScreen"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInScreen"
              component={SignIn}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
