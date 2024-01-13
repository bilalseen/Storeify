import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FavouritesScreen"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
